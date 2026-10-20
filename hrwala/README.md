# HR Wala.net — Discover + Job Portal

A complete, responsive static website package in royal blue, gold and black. The default page is **Discover** (`index.html`); the only other primary page is **Job Portal** (`jobs.html`). No build dependencies, package installation or npm build command are required.

## Pehle yeh samajh lein

Yeh upload-ready front-end hai. Discover ke tamam requested sections, animated hero, 4 looping motion previews, video popup, 12 HRIS functions, 8 certifications, 3 badge categories, 8 team slots, 16 partner slots, contact form aur Job Portal interface included hain.

Asli team videos, names/photos/bios aur partner logos supplied nahi thay. In jagahon par clearly marked placeholders hain. Job listings aur salaries sample hain. Local profile aur saved jobs sirf usi browser mein save hotay hain; yeh live account system nahi hai. Applications submit nahi hotin. Contact endpoint blank ho to enquiry text file download hoti hai, email send nahi hoti.

## Files

- `index.html` — Discover landing page, default entry.
- `jobs.html` — Job Portal page.
- `styles.css` — design tokens, desktop/tablet/mobile styles and motion.
- `content.js` — business content, media paths, team, partners and sample jobs.
- `app.js` — all front-end interactions.
- `assets/` — two generated campaign portraits, four silent motion-preview MP4s, posters and favicon.
- `.nojekyll` — disables Jekyll processing for GitHub Pages.
- `FIGMA-PROMPT.txt` — complete standalone Figma Make prompt.
- `ASSET-GUIDE.md` — instructions for replacing preview content.
- `VALIDATION.md` — verification performed and remaining limits.

## Apne computer par kholna

ZIP extract karein. `index.html` double-click se khul sakta hai. Consistent localStorage behavior ke liye local web server use karna behtar hai:

```bash
cd hrwala
python3 -m http.server 8000
```

Windows par agar `python3` command na ho to `py -m http.server 8000` use karein. Browser mein `http://localhost:8000` kholein.

## GitHub par upload — folder structure preserve karein

1. ZIP extract karein; ZIP ko akelay upload na karein.
2. Naya repository banayein. **hrwala folder ke andar ka content** repository root mein upload karein, taake `index.html` root mein ho.
3. `assets` ko poore folder ke taur par drag-and-drop karein. Us ke andar ki files ko root mein move na karein.
4. Commit karein. Agar browser folder upload mein issue de to GitHub Desktop ya Git use karein.
5. Pages hosting ke liye repository **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save** select karein.
6. GitHub ka diya hua Pages URL use karein. Project-subdirectory URLs supported hain; internal paths relative hain.

Git alternative (apna repository URL replace karein):

```bash
git init
git add .
git commit -m "Add HR Wala Discover and Job Portal"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Note: GitHub repository mein code rakhna aur site hosting enable karna alag steps hain. Domain name HR Wala.net design mein use hua hai; domain purchase, ownership ya DNS connection is package se nahi hota.

## Vercel par GitHub repo se deploy

- Import the repository.
- Framework Preset: **Other**.
- Root Directory: the folder containing `index.html` (repository root if uploaded as above).
- Build Command: leave empty (no build needed).
- Install Command: no install needed.
- Output Directory: the directory containing these static files; use `.` if an override is required.
- Do not set `dist` for this package; there is no build step or dist directory.

Existing React/Vite repository mein in files ko bina migration ke merge na karein. Is standalone package ko naya repo/project dena seedha tareeqa hai.

## Contact form ko live karna

`content.js` mein `contactEndpoint` ko apne HTTPS JSON endpoint se replace karein. Current client POST fields: `name`, `email`, `organisation`, `interest`, `message`. Endpoint ko request validate karni chahiye aur successful acceptance par 2xx response dena chahiye. Appropriate CORS, anti-spam, rate limiting, email delivery and data handling are the backend owner's responsibility. Browser code mein secrets/API private keys mat rakhein.

Endpoint blank ho to UI explicitly “Download enquiry” dikhata hai. Successful HTTP response ke baghair sent confirmation nahi dikhayi jati. Live privacy policy add karein before accepting actual enquiries.

## Real Job Portal backend — separate integration

Production accounts, authenticated candidate/employee/employer roles, public profiles, employer verification, job creation/moderation, CV uploads, applications, messaging, notifications and cross-device persistence require a backend/database. None of those are represented as live in this package. The current browser-only profile stores basic optional fields, supports edit/export/delete, and never requests passwords or documents.

## Motion and media

Hero auto-rotates slowly with manual dots and pause. Partner strip has pause and hover pause. Reduced-motion preference disables ambient animation and video autoplay. Four videos loop muted by default. Hover attempts sound; some browsers require a click before audio playback, so a sound control is provided. Preview clips have no audio track. Actual team MP4s can contain audio. Modal click is a user gesture; controls remain available if autoplay is denied.

## Figma use

Open `FIGMA-PROMPT.txt`, copy the complete prompt into Figma Make and optionally supply the two campaign images from `assets/`. The prompt describes the layout independently and needs no attached PDF. This package does not include a native editable Figma design file.

## Official deployment references

Checked 20 October 2026:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://vercel.com/docs/builds/configure-a-build

## Asset origin

Hero and HRIS portraits were generated using the built-in image-generation tool for this project; they are campaign models, not actual staff photographs. Motion clips are original code-generated placeholders, not team videos. The wordmark is a provisional typographic treatment, not a supplied approved logo. System fonts avoid external font dependencies. Replace provisional material with approved brand assets before launch.
