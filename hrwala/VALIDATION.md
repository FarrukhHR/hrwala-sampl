# Vite conversion validation

Version 1.1.0 converts this website to a genuine Vite multi-page project.

- Locked npm dependencies installed using npm ci.
- npm run build successfully produced Discover and Job Portal HTML entries.
- All emitted local script, stylesheet, image and icon references resolve.
- Every configured video/poster and all public media are present in dist.
- Both HTML pages load the shared bundled JavaScript, which includes the content configuration before UI initialization.
- Source JavaScript and Vite configuration pass syntax checks.
- Prior content counts and job filtering checks remain applicable; business logic is unchanged.

No browser UI automation was available. Browser visual, keyboard and audio playback QA remains unperformed. Hostinger deployment has not been executed from this session. Correct repository root must still be selected on the hosting platform.

This remains a static front-end. Live accounts, roles, database, job posting/applications and email delivery are not connected. Preview content remains labelled.

## v1.1.1 header/hero corrections

- Vite production build passes after the corrections.
- Timer simulation checks the 3-second hold, 1-second fade-out and 1-second fade-in scheduling, manual slide cancellation, pause and visibility stop/resume.
- Source syntax and generated asset links checked. Browser visual/animation rendering QA remains unavailable.

## v1.2.0 meeting review

- Production Vite build passed for Discover and Job Portal on 21 October 2026.
- JavaScript syntax check passed.
- Existing timer simulation passed after providing the new optional-video variable in the test harness: 3-second hold, 1-second fade-out, 1-second fade-in, pause, manual selection and hidden-page handling.
- Journey-link simulation confirmed that a filtered-out function is restored, the All filter is selected, and the target scrolls into view and receives focus. Already-visible and invalid targets were also checked.
- All source fragment links resolve to static or generated module IDs; counts remain 4 services, 12 modules, 8 certifications, 8 team slots, 16 partner slots.
- Both generated HTML pages reference existing local assets; all public media was included in dist.
- Browser screenshots, visual breakpoints, keyboard navigation and audio/video playback were not tested: supported browser automation was unavailable in this environment. Optional hero-video playback awaits the actual approved asset and browser QA.
- Backend connections, final business assets, live hosting and scheduled backups were not added by this visual update.
