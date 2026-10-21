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
