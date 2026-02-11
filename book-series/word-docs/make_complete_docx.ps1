# make_complete_docx.ps1
# Combines front matter + TOC + chapters + back matter into a single ebook-ready DOCX.
# Usage: .\make_complete_docx.ps1 -BookFolder "Repetition Mother of Mastery Book 1 - ..."

param(
  [Parameter(Mandatory=$true)]
  [string]$BookFolder
)

$ErrorActionPreference = "Stop"

$seriesBase = "E:\repetition-mother-of-mastery\book-series"
$bookPath   = Join-Path $seriesBase $BookFolder

# --- Validate ---
$chaptersPath = Join-Path $bookPath "chapters"
$fmPath       = Join-Path $bookPath "front_matter"
$bmPath       = Join-Path $bookPath "back_matter"
if (-not (Test-Path $chaptersPath)) { throw "Chapters folder not found: $chaptersPath" }

# --- Find pandoc ---
$pandocCmd = Get-Command pandoc -ErrorAction SilentlyContinue
if ($pandocCmd) {
  $pandoc = $pandocCmd.Source
} else {
  $common = @(@(
    Join-Path $env:LOCALAPPDATA "Pandoc\pandoc.exe"
    Join-Path $env:ProgramFiles "Pandoc\pandoc.exe"
    Join-Path ${env:ProgramFiles(x86)} "Pandoc\pandoc.exe"
  ) | Where-Object { $_ -and (Test-Path $_) })
  if ($common.Count -gt 0) { $pandoc = $common[0] }
  else {
    $winGetRoot = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"
    if (Test-Path $winGetRoot) {
      $found = Get-ChildItem -Path $winGetRoot -Recurse -Filter "pandoc.exe" -ErrorAction SilentlyContinue | Select-Object -First 1
      if ($found) { $pandoc = $found.FullName }
    }
  }
  if (-not $pandoc) { throw "pandoc.exe not found." }
}

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# --- Output paths ---
$outDir = Join-Path $seriesBase "word-docs"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }
$outMd  = Join-Path $outDir "_temp_combined.md"
$outDoc = Join-Path $outDir "$BookFolder - Complete.docx"
Remove-Item $outMd  -ErrorAction SilentlyContinue
Remove-Item $outDoc -ErrorAction SilentlyContinue

$sb = New-Object System.Text.StringBuilder
$isFirst = $true

# --- Helper: add a section with page break ---
function Add-Section {
  param([string]$FilePath, [string]$HeadingOverride)

  if (-not (Test-Path $FilePath)) { return }
  $content = [System.IO.File]::ReadAllText($FilePath, $utf8NoBom).Trim()

  if ($HeadingOverride) {
    # Strip ONLY the first line if it is a heading (preserve sub-headings in body)
    $content = [regex]::Replace($content, '\A\s*#{1,3}\s+[^\r\n]*(\r?\n){0,2}', '')
    $content = $content.Trim()
  }

  if ($script:isFirst) {
    if ($HeadingOverride) {
      [void]$sb.AppendLine("# $HeadingOverride")
      [void]$sb.AppendLine("")
    }
    [void]$sb.Append($content)
    [void]$sb.AppendLine("")
    $script:isFirst = $false
  } else {
    $heading = if ($HeadingOverride) { $HeadingOverride } else { "Section" }

    $safe = $heading -replace '&','&amp;' -replace '<','&lt;' -replace '>','&gt;'
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine('``````{=openxml}')
    [void]$sb.AppendLine("<w:p><w:pPr><w:pStyle w:val=`"Heading1`"/><w:pageBreakBefore/></w:pPr><w:r><w:t>$safe</w:t></w:r></w:p>")
    [void]$sb.AppendLine('``````')
    [void]$sb.AppendLine("")
    [void]$sb.Append($content)
    [void]$sb.AppendLine("")
  }
}

# =============================================
# FRONT MATTER (before TOC)
# =============================================
# 1. Copyright
Add-Section (Join-Path $fmPath "copyright.md") "Copyright"

# 2. Dedication
Add-Section (Join-Path $fmPath "dedication.md") "Dedication"

# 3. Epigraph
Add-Section (Join-Path $fmPath "epigraph.md") "Epigraph"

# =============================================
# TOC placeholder - pandoc --toc will insert it
# We add a page break and heading for it
# =============================================

# 4. Preface
Add-Section (Join-Path $fmPath "preface.md") "Preface"

# 5. Prologue
Add-Section (Join-Path $fmPath "prologue.md") "Prologue"

# 6. Introduction
Add-Section (Join-Path $fmPath "introduction.md") "Introduction"

# =============================================
# CHAPTERS
# =============================================
$files = Get-ChildItem -Path $chaptersPath -File -Filter "chapter_*.md" | Sort-Object Name
if (-not $files -or $files.Count -eq 0) { throw "No chapter files found" }

for ($i = 0; $i -lt $files.Count; $i++) {
  $content = [System.IO.File]::ReadAllText($files[$i].FullName, $utf8NoBom)

  # Remove existing title line (with or without # prefix)
  $content = [regex]::Replace($content, '(?m)^\s*#{0,3}\s*Chapter\s+\d+.*(\r?\n){1,2}', '')

  # Build heading - renumber 1-based per book
  $localNum = $i + 1
  $base2 = $files[$i].BaseName
  if ($base2 -match '^chapter_(\d+)_+(.*)$') {
    $slug = ($Matches[2] -replace '_', ' ')
    $slug = (Get-Culture).TextInfo.ToTitleCase($slug.ToLower())
    $heading = "Chapter $localNum - $slug"
  } elseif ($base2 -match '^chapter_(\d+)$') {
    $heading = "Chapter $localNum"
  } else {
    $heading = $base2
  }

  $safe = $heading -replace '&','&amp;' -replace '<','&lt;' -replace '>','&gt;'
  [void]$sb.AppendLine("")
  [void]$sb.AppendLine('``````{=openxml}')
  [void]$sb.AppendLine("<w:p><w:pPr><w:pStyle w:val=`"Heading1`"/><w:pageBreakBefore/></w:pPr><w:r><w:t>$safe</w:t></w:r></w:p>")
  [void]$sb.AppendLine('``````')
  [void]$sb.AppendLine("")
  [void]$sb.Append($content.Trim())
  [void]$sb.AppendLine("")
}

# =============================================
# BACK MATTER
# =============================================
# 1. Epilogue
Add-Section (Join-Path $bmPath "epilogue.md") "Epilogue"

# 2. Author's Note
Add-Section (Join-Path $bmPath "authors_note.md") "Author's Note"

# 3. Also By
Add-Section (Join-Path $bmPath "also_by.md") "Also By Ketan Shukla"

# 4. About the Author
Add-Section (Join-Path $bmPath "about_the_author.md") "About the Author"

# 5. Connect
Add-Section (Join-Path $bmPath "connect.md") "Connect with Ketan Shukla"

# 6. Review Request
Add-Section (Join-Path $bmPath "review_request.md") "A Quick Favor"

# =============================================
# Write and convert with TOC
# =============================================
[System.IO.File]::WriteAllText($outMd, $sb.ToString(), $utf8NoBom)
& $pandoc $outMd '--from=markdown+raw_attribute' '--to=docx' '--toc' '--toc-depth=1' '-o' $outDoc
Remove-Item $outMd -ErrorAction SilentlyContinue

Write-Host "Created: $outDoc"
