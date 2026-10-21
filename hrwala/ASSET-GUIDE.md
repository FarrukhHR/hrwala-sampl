# Content and media replacement

All configurable content is in `content.js`. Service media files live in `public/assets/`; the two banner portraits live in `images/`. Keep their URL paths in content.js as `assets/...` (do not prefix those URLs with public/), because Vite copies public files into the build root. Keep JavaScript quotes, commas and brackets intact. Avoid editing `app.js` for routine business content changes.

## Team videos — four

Replace `public/assets/service-1.mp4` through `public/assets/service-4.mp4` in this order:
1. HR Consultants
2. Brand Standards
3. Job Portal
4. HRWala Software

For each service, replace its `poster` image and set `demo: false`. Use H.264 MP4, AAC audio when supplied, and web-optimised faststart. Portrait or square presenter videos fit the tiles best; the modal preserves the actual video proportions with native controls. The included motion previews are intentionally silent. Replace the text below the “A conversation” heading that says motion previews are shown after all four actual videos are ready.

## Team — eight

Replace each item of `team` with actual approved name, role, photo path and bio. Example:

```js
{name: 'APPROVED NAME', role: 'APPROVED DESIGNATION', image: 'assets/team-01.webp', bio: 'Approved short biography.'}
```

Use consistent professionally photographed portraits. Recommended source 700×800 px or larger; centre faces and allow crop margin. Change the team section's placeholder note once approved details are installed. The current role names are suggested slots, not verified staff designations.

## Partners — sixteen

Each `partners` entry accepts `name` and `logo`. Example:

```js
{name: 'APPROVED PARTNER NAME', logo: 'assets/partner-01.svg'}
```

Supply only logos you are authorised to use. Use SVG or transparent PNG/WebP. Set exactly 16 unique records. The script duplicates the sequence to create the animation and hides the duplicate from screen readers. Remove the placeholder note in `index.html` only after real partner assets are installed.

## Hero and HRIS images

- `images/hero.webp` — custom generated transparent professional portrait. The ring and floating labels are live CSS/HTML, so they animate independently.
- `images/software.webp` — custom generated side-pose portrait holding a phone with HRIS on its screen.

These are already included locally. Their generation briefs are recorded below for later revisions.

### Hero image generation brief

Photorealistic South Asian professional woman, 28–35, warm confident smile, direct gaze, tailored royal blue blazer over modest ivory blouse, arms naturally folded, waist-up with complete head and hair. Genuine transparent background. Premium studio lighting, anatomically natural hands. No logo, text, circle or props. Circle and labels added separately in the website.

### HRIS image generation brief

Photorealistic South Asian professional woman in tailored royal blue pantsuit and ivory blouse, thigh-up three-quarter side pose facing left, holding smartphone upright angled toward viewer. Visible white screen headed HRIS with small blue dashboard graphics. Natural hands, soft smile, complete head and arms, genuine transparent background. No other graphics or text. Fine gold halo and benefit callout added separately in the website.

Built-in image generation was used for both assets. Final package paths are `images/hero.webp` and `images/software.webp`.

## Certification information

Update the eight programme titles only if the business has approved changes. Current dialogs intentionally do not invent fees, schedule, accreditation, course duration or eligibility. Add confirmed information before opening enrolment. Badge graphics describe categories, not awarded verifications.

## Jobs and live profiles

Current jobs are labelled sample listings and all salary figures are illustrative. Replace the sample data only after wiring a verified data source and application workflow. Do not remove the preview disclaimer while using local-only data. The local profile is not authentication. Live access roles must be enforced server-side.

## Contact

Set `contactEndpoint` only after a working HTTPS endpoint is ready. Update the preview privacy text in `app.js` with approved policy information before launch. Do not insert private credentials in any client file.

## Branding

Brand colours are in `branding.css` and `styles.css`. The approved uploaded logo is `images/hrwala-logo.png`, shared by both page headers, footers and the favicon. Its markup is in `app.js`. No external font or image URL is required by the delivered website.

## Current layout (v1.3.0)
The hero is fixed text, with no slideshow. Six floating labels are defined in index.html for each of the two portrait circles. The side-pose software image remains images/software.webp. Header branding is intentionally compact. The 8 certifications and 3 portal badge categories share one numbered 11-row list. All layout corrections live in refinements.css. Older comments about hero slide timing or separate badge cards are superseded by this revision.
