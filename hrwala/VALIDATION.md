# Validation — v1.3.0

## Browser checks

- Desktop render inspected: smaller wordmark, centered menu, fixed hero heading and six floating labels.
- Browser-measured gap between video grid and service cards: exactly 10px.
- Six labels present in each of the hero and software circles.
- All 11 certification/badge entries rendered. Desktop certificate panel and row list both measured 518px high, aligned at top and bottom; no internal scrolling.
- Desktop team section measured about 424px high for eight profiles.
- Phone (390px frame) and tablet (768px frame) layouts inspected. Body content width equalled available width (375px and 753px after scrollbar); no horizontal page overflow.
- Mobile menu opens and closes and displays Discover / Job Portal.
- Verified Candidate badge dialog opens with the pending-verification explanation and closes successfully.
- Header remains visible while scrolling after fixing its sticky wrapper.

The four video files and two portrait assets are unchanged from the uploaded package. Existing motion previews remain silent. Real team/partner assets and backend services remain pending. No deployment performed.

## Build and file checks

- Vite 8.3.4 production build passed for both pages.
- All generated HTML references resolve to emitted local files.
- Original portrait, video, poster and favicon bytes match the uploaded ZIP.
- Inset service video player opens and closes; desktop modal width measured 1150px.
- Header Job Portal navigation loads the existing six sample opportunities.

## v1.3.1 targeted checks — 21 October 2026
- Vite production build passed.
- Both original portrait assets loaded in browser at source root and under /dist/ with hashed relative URLs.
- Computed heading font is Arial, Helvetica, sans-serif.
- Certification feature transform is scale(0.7); all 11 certification/badge rows remain present.
- Hero, software banner and reduced certification frame visually inspected.

## v1.3.2 branding checks — 21 October 2026
- Production Vite build passed. Logo and portraits loaded from bundled relative asset paths.
- Discover and Job Portal use Arial, Helvetica, sans-serif; both main headings have computed weight 600.
- Navy is #0B1F4B; gold is #D4AF37, sampled from the supplied logo. Uploaded logo file is unchanged.
- Both portraits visually checked with hair/headroom visible.
- All six hero labels use rgb(41,57,77).
- Desktop certification panel and text list both measure 518px and share the same top edge.
- 390px and 768px responsive views checked; no horizontal page overflow.
