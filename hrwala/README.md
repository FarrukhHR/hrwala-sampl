# HRWala.net — updated Vite package v1.3.0

This package updates the uploaded HRWala-Website-GitHub-Package(2).zip using the latest spoken corrections. There are two pages: Discover (index.html, default landing page) and Job Portal (jobs.html).

## Upload and deploy

Extract the ZIP. Upload the entire extracted `hrwala` folder to GitHub, preserving `public/assets` and all source files.

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Root directory | hrwala (if package.json is inside that folder); otherwise repository root |
| Install | npm ci |
| Build | npm run build |
| Output | dist |
| Node | 22.12+ or 24 |

Do not upload the ZIP alone. Do not upload node_modules. The build creates dist. GitHub Pages requires the built dist contents; GitHub source upload alone does not publish the site. Relative asset paths support deployment under a project subdirectory.

Local development: run `npm ci`, then `npm run dev` inside hrwala. Production verification: `npm run build`. Source HTML should be served through Vite, not opened with a file:// URL.

## Latest changes

- Smaller HRWala.net wordmark, centered desktop navigation; header employer/profile buttons removed.
- Fixed People at the Top in the original Arial font; rotating text, hero buttons, notes, slide controls, promise strip and numbered intro removed.
- Six floating labels around the raised hero portrait. Get job links to Job Portal; Get people opens the enquiry section with Job Portal selected.
- A Way Forward above the unchanged four service videos. Four restyled service cards begin exactly 10px below the video grid.
- HRWala Software has its own clear heading; Manage your employees and Employee Management Dashboard accompany the original side-pose portrait in the same circular floating-label layout.
- All 12 functions remain visible below Software Operations, without filter tabs or journey links.
- Professional Certification / Skills Development; enlarged seal, centered Expertise with Purpose, and all 11 numbered certification/badge entries visible without a nested scrollbar. Desktop list and certificate panel align at top and bottom.
- Team HRWala uses eight compact cards. Featured Partners contains only its heading and moving logo placements; hovering or focusing the strip pauses it.
- Contact heading is Hello. The spoken instruction ended at “Tell…”, so the existing contact paragraph, form and steps remain below it.

## Editing

- index.html / jobs.html: page structure.
- app.js: shared header/footer, videos, dialogs, local profile and job interactions.
- content.js: service copy/media, 12 functions, 8 certifications, team, partners, sample vacancies and contact endpoint.
- styles.css: base interface, jobs and modal styles.
- refinements.css: current responsive visual layout; loaded after styles.css.
- public/assets: retained campaign portraits, four motion clips/posters and favicon.
- FIGMA-PROMPT.txt: current design brief, replacing older conflicting directions.
- VALIDATION.md: checks and limitations for this revision.

## Content status

This is a static frontend. Actual logo, eight team portraits/names/bios, sixteen partner logos and real team videos have not been supplied in this ZIP. Existing placeholders and silent motion previews remain. Campaign portraits are generated illustrations, not team members. No new accreditation or verified status is claimed: badge detail dialogs state that the verification process is pending.

Profiles and saved jobs remain browser-local previews. No authentication server, job posting/application backend, database or email service has been added. With contactEndpoint empty, the form downloads an enquiry rather than sending it. The approved HTTPS endpoint must be supplied and the server implemented before accepting live enquiries.

## Motion and accessibility

Floating labels pause on hover or keyboard focus. The partner strip pauses on hover/focus and resumes when neither applies. Reduced-motion settings disable decorative animation. Video behavior is retained: silent looping previews, hover/click sound control, and an inset player with native controls and close button. Actual audio requires replacement team clips.

## v1.3.1 image and frame correction
Portraits now live in images/ and are bundled by Vite with content-hashed, relative build URLs. Upload the complete source folder, including images/, and build with npm run build; publish dist/. Keep the hosting Root Directory pointed at the folder containing package.json. The certification frame is scaled to 70%; Arial is restored throughout.

## v1.3.2 approved logo and layout
Uploaded logo added unchanged to both headers and footers. Navy #0B1F4B and gold #D4AF37 replace the earlier palette. Discover uses the Job Portal Arial font and heading weights. Both portrait images now fit inside their circles with headroom. All six hero labels share one charcoal color. The certification frame matches the height of the eleven-row list on desktop, with a compact content-sized frame above the list on mobile. Latest overrides are in branding.css. Upload images/ and all three stylesheets with the rest of the source.
