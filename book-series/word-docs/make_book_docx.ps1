# make_book_docx.ps1
# Usage: .\make_book_docx.ps1 -BookFolder "Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition"
# Combines chapter_*.md files into a single DOCX with page breaks between chapters.

param(
  [Parameter(Mandatory=$true)]
  [string]$BookFolder
)

$ErrorActionPreference = "Stop"

$bookPath = Join-Path "E:\repetition-mother-of-mastery\book-series" $BookFolder
$chaptersPath = Join-Path $bookPath "chapters"

if (-not (Test-Path $chaptersPath)) { throw "Chapters folder not found: $chaptersPath" }

# --- Find pandoc.exe ---
$pandocCmd = Get-Command pandoc -ErrorAction SilentlyContinue
if ($pandocCmd) {
  $pandoc = $pandocCmd.Source
} else {
  $common = @(@(
    Join-Path $env:LOCALAPPDATA "Pandoc\pandoc.exe"
    Join-Path $env:ProgramFiles "Pandoc\pandoc.exe"
    Join-Path ${env:ProgramFiles(x86)} "Pandoc\pandoc.exe"
  ) | Where-Object { $_ -and (Test-Path $_) })

  if ($common.Count -gt 0) {
    $pandoc = $common[0]
  } else {
    $winGetRoot = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"
    if (Test-Path $winGetRoot) {
      $found = Get-ChildItem -Path $winGetRoot -Recurse -Filter "pandoc.exe" -ErrorAction SilentlyContinue |
               Select-Object -First 1
      if ($found) { $pandoc = $found.FullName }
    }
  }
  if (-not $pandoc) { throw "pandoc.exe not found." }
}

# --- BOM-free UTF-8 ---
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# --- Get chapters ---
$files = Get-ChildItem -Path $chaptersPath -File -Filter "chapter_*.md" | Sort-Object Name
if (-not $files -or $files.Count -eq 0) { throw "No chapter_*.md files found in: $chaptersPath" }

# --- Output paths ---
$outDir = "E:\repetition-mother-of-mastery\book-series\word-docs"
$outMd  = Join-Path $outDir "_temp_combined.md"
$outDoc = Join-Path $outDir "$BookFolder.docx"
Remove-Item $outMd  -ErrorAction SilentlyContinue
Remove-Item $outDoc -ErrorAction SilentlyContinue

# --- Build combined document ---
$sb = New-Object System.Text.StringBuilder

for ($i = 0; $i -lt $files.Count; $i++) {

  $content = [System.IO.File]::ReadAllText($files[$i].FullName, $utf8NoBom)

  # Remove existing title line
  $content = [regex]::Replace($content, '(?m)^\s*Chapter\s+\d+.*(\r?\n){1,2}', '')

  # Build heading from filename
  $base = $files[$i].BaseName
  if ($base -match '^chapter_(\d+)_+(.*)$') {
    $num  = [int]$Matches[1]
    $slug = ($Matches[2] -replace '_', ' ')
    $slug = (Get-Culture).TextInfo.ToTitleCase($slug.ToLower())
    $heading = "Chapter $num - $slug"
  } elseif ($base -match '^chapter_(\d+)$') {
    $num = [int]$Matches[1]
    $heading = "Chapter $num"
  } else {
    $heading = $base
  }

  if ($i -gt 0) {
    # Heading with page-break-before as raw OpenXML — no separate page-break paragraph
    $safe = $heading -replace '&','&amp;' -replace '<','&lt;' -replace '>','&gt;'
    [void]$sb.AppendLine("")
    [void]$sb.AppendLine('``````{=openxml}')
    [void]$sb.AppendLine("<w:p><w:pPr><w:pStyle w:val=`"Heading1`"/><w:pageBreakBefore/></w:pPr><w:r><w:t>$safe</w:t></w:r></w:p>")
    [void]$sb.AppendLine('``````')
  } else {
    [void]$sb.AppendLine("# $heading")
  }

  [void]$sb.AppendLine("")
  [void]$sb.Append($content.Trim())
  [void]$sb.AppendLine("")
}

# Write and convert
[System.IO.File]::WriteAllText($outMd, $sb.ToString(), $utf8NoBom)
& $pandoc $outMd '--from=markdown+raw_attribute' '--to=docx' '-o' $outDoc
Remove-Item $outMd -ErrorAction SilentlyContinue

Write-Host "Created: $outDoc"
