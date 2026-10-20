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
