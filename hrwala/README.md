# HR Wala.net — Vite deployment package v1.1.1

This updated package uses **Vite 8.3.4**. Select **Vite** in your hosting framework dropdown. The previous Other/custom-copy build instructions no longer apply.

The two pages remain Discover (`index.html`, default) and Job Portal (`jobs.html`). The visual design and front-end interactions are retained. This change adds a genuine Vite build; it does not add backend accounts, a database or application processing.

## GitHub upload — important

ZIP extract karein. Agar aap repository mein poora `hrwala` folder upload karte hain, to files `hrwala/package.json`, `hrwala/index.html`, `hrwala/vite.config.js`, aur `hrwala/public/assets/...` par honi chahiyein.

- Poora folder upload kia hai → Root Directory **hrwala**.
- Folder ke andar ki files repository root mein upload ki hain → Root Directory **.** (repository root).
- ZIP ko akelay GitHub par upload karna kaafi nahi; extracted source files upload karein.
- `public` folder ko poora upload karein, uska structure preserve rakhein.
- Purani `HR-Junction-Recruitment-Platform...` root directory select na rakhein. Root ko us folder par set karein jahan is project ka `package.json` hai.
- Latest ZIP ka source purani version ki jagah use karein. `build.mjs` ab required nahi; `vite.config.js` naya config hai.

## Hostinger settings

| Setting                      | Value                                                            |
| ---------------------------- | ---------------------------------------------------------------- |
| Framework                    | **Vite**                                                         |
| Root Directory               | **hrwala** if that folder contains package.json; otherwise **.** |
| Node.js                      | **22.x** (22.12+ required), or **24.x**                          |
| Package manager              | **npm**                                                          |
| Install Command              | **npm ci**                                                       |
| Build Command                | **npm run build**                                                |
| Output Directory             | **dist**                                                         |
| Server entry / Start command | Not required; this is a static frontend                          |

Dashboard → Settings & Redeploy / Redeploy par current settings kholein. Failed deployment details screen par jo purani root show hoti hai woh us build ka record hai. Nayi deployment ke liye correct root save honi chahiye. Agar current settings screen par root field locked/absent ho to us screen ka screenshot lein; purani folder ko delete karne se saved root automatically change nahi hoti.

`dist` selected project root ke relative hai: `hrwala` root select ki ho tab bhi Output Directory sirf `dist` rakhein, `hrwala/dist` nahi.

## Local development and build

```bash
cd hrwala
npm ci
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Build creates `dist/index.html`, `dist/jobs.html`, bundled JS/CSS and all media. The source HTML uses ES modules; do not preview the source by double-clicking index.html. Use the Vite dev server or serve the generated dist directory.

## Vercel / GitHub Pages

Vercel: Framework Vite, correct Root Directory, Build Command `npm run build`, Output Directory `dist`.

GitHub Pages needs the **built dist contents**, not the source project. Build locally and publish the contents of dist to your configured Pages branch, or configure an Actions workflow that builds and publishes dist. Base path is relative (`./`) so project-subdirectory hosting is supported. Both HTML pages are explicit build entries.

## Project files

- `index.html`, `jobs.html`: the two page entries.
- `app.js`: ES module with the interface interactions; imports content.js.
- `content.js`: business content, videos, modules, certifications, team, partners, sample jobs and contact endpoint.
- `styles.css`: brand tokens, responsive styles and motion.
- `vite.config.js`: relative base URL and multi-page build configuration.
- `package.json`, `package-lock.json`: scripts and locked dependencies.
- `public/assets/`: campaign images, four motion clips, posters and favicon.
- `public/.nojekyll`: copied to dist for optional GitHub Pages publishing.
- `FIGMA-PROMPT.txt`: complete design prompt.
- `ASSET-GUIDE.md`: media/content replacement guide.
- `VALIDATION.md`: verification performed and remaining limits.

Do not upload node_modules or dist as project source. npm ci installs dependencies and npm run build creates dist during deployment. Never put private keys in frontend files.

## Content and backend status

Team videos, eight actual team member profiles and sixteen real partner logos have not been supplied; labelled placeholders remain. The four included videos are silent motion previews. Jobs and salaries are illustrative. Profiles and saved jobs use browser localStorage only, not live accounts. No applications are submitted.

With `contactEndpoint: ''`, the contact form downloads an enquiry instead of sending it. To accept live enquiries, set an approved HTTPS JSON endpoint in content.js. Submitted fields: name, email, organisation, interest and message. The backend must validate requests, handle spam/rate limiting, delivery and data protection. The current client only confirms acceptance after a successful HTTP response. Update the privacy notice before accepting live enquiries.

Production authentication, server-enforced candidate/employee/employer roles, database, uploads, vacancies, applications and cross-device persistence remain separate backend integrations. HRIS modules are a product showcase.

## Media behavior

The hero text rotates automatically and respects reduced-motion preferences and page visibility. Six service and career labels surround the hero portrait. The Discover page currently goes directly from the hero to section 02; the former video-preview section and its playback controls are not displayed. The four preview clips and posters remain in `public/assets/` for possible future use. The partner strip loops continuously and respects reduced-motion preferences.

## Asset origin

The two campaign portraits were generated for this project and are not actual staff photos. Motion previews are original procedural clips, not actual service presentations. Wordmark is a provisional typographic treatment. Poppins is loaded from Google Fonts for branded section headings, with a local sans-serif fallback; no external media service is required.

## References

- https://vite.dev/guide/build.html
- https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
- https://www.hostinger.com/support/how-to-redeploy-a-node-js-application/

## Requested visual refinements — v1.1.2

The header logo is smaller, navigation is centred, and the right-side actions are removed. The hero portrait is visible inside a smaller, higher circle. Six labels are arranged in matching left/right pairs close to the circle. The PEOPLE AT THE TOP headline uses Poppins. The hero buttons, note, slide controls, promise strip and former section 01 have been removed so section 02 follows the hero. Hero copy continues to rotate, fades between slides, and respects reduced-motion preferences.

The approved actual logo was not supplied. The existing blue mark remains a placeholder until it is supplied. These changes affect the front-end only; existing deployment settings remain Framework Vite, npm run build, output dist.
