# Validation record

Checked for this delivery:

- Both JavaScript files passed `node --check`.
- Default entry is `index.html` (Discover); `jobs.html` is the other primary page.
- HTML IDs are unique; all static local links, in-page anchors, scripts, stylesheets and image references resolve.
- All configured service video and poster paths exist.
- Four preview MP4 streams verified as H.264, 400×520, yuv420p, approximately 6.3 seconds; they intentionally contain no audio.
- Content configuration contains exactly 4 services, 12 software functions, 8 certification titles, 3 badge panels in HTML, 8 team entries and 16 unique partner entries.
- Executed job filtering logic checks cover initial results, text search, location/work-mode combinations, empty results and saved-only filtering.
- All job IDs are unique.
- Two campaign images are included locally as optimised WebP with alpha.
- No external runtime dependencies or remote font/image requests are required.

Limitations:

A supported browser preview/testing tool was not available in this session. No browser screenshots or end-to-end mouse/keyboard/media tests were performed. Responsive styles, dialogs, mobile navigation, video audio policies, localStorage and downloads should be checked in target browsers before public launch. GitHub/Vercel deployment and domain DNS were not performed; the user requested files to upload independently.

This is a static front-end delivery. Live account authentication, role access control, databases, job posting, applications, candidate verification and email delivery are not connected. Demo content is explicitly marked. The contact form downloads an enquiry unless a working HTTPS endpoint is configured. Supply approved business content and complete backend integration before presenting this as an operational HR portal.
