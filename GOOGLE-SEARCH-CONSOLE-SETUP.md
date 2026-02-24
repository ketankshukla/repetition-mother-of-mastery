# Google Search Console Setup — repetition.ketanshukla.com

## Step-by-Step Setup

### Step 1: Go to Google Search Console

1. Open **https://search.google.com/search-console/about**
2. Click **"Start now"**
3. Sign in with the same Google account you used for your other properties

### Step 2: Add Your Property

1. Choose **"URL prefix"**
2. Enter: `https://repetition.ketanshukla.com`
3. Click **"Continue"**

### Step 3: Verify Ownership

**HTML file upload (recommended):**
1. Google gives you a file like `googleXXXXXXXXXXXXXXXX.html`
2. Place it in `E:\repetition-mother-of-mastery\public\`
3. It will be accessible at `https://repetition.ketanshukla.com/googleXXXXXXXXXXXXXXXX.html`
4. Commit and push to GitHub → Vercel auto-deploys
5. Wait 1-2 minutes, then click **"Verify"** in Google Search Console

**Alternative — HTML meta tag:**
1. Google gives you a meta tag like: `<meta name="google-site-verification" content="XXXXXXXX" />`
2. Tell Cascade the content value and it will be added to `layout.tsx` metadata

### Step 4: Submit Your Sitemap

1. In the left sidebar, click **"Sitemaps"**
2. Enter: `sitemap.xml`
3. Click **"Submit"**
4. Full URL: `https://repetition.ketanshukla.com/sitemap.xml`

### Step 5: Request Indexing

1. In the left sidebar, click **"URL Inspection"**
2. Paste: `https://repetition.ketanshukla.com/`
3. Click **"Request Indexing"**

---

## What Your Sitemap Contains

| URL | Priority | Change Frequency |
|-----|----------|-----------------|
| `https://repetition.ketanshukla.com` | 1.0 | monthly |

## What Your robots.txt Allows

```
User-agent: *
Allow: /

Sitemap: https://repetition.ketanshukla.com/sitemap.xml
```

---

## Timeline

| Milestone | Expected Time |
|-----------|--------------|
| Sitemap submitted | Day 1 |
| Page indexed | 2-7 days |
| Search impressions visible | 1-2 weeks |
| Organic clicks begin | 2-8 weeks |
