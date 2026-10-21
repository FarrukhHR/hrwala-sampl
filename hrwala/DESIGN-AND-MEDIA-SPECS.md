# Design and media handover — draft for review

These are implementation specifications and proposals based on the 21 October meeting, not a claim that all pending decisions were approved.

## Three hero copy options

The live top line remains the previously requested PEOPLE AT THE TOP. Alternatives for stakeholder review:

1. **Better people. Stronger business.** Supporting: Discover solutions. Find your next role. Actions: Get job / Hire people.
2. **Your next chapter.** Supporting: Find meaningful opportunities. Build your professional future. Actions: Get job / Build your expertise.
3. **People first. Work simplified.** Supporting: Connect your people. Manage your employee journey. Actions: Explore HRIS / Hire people.

## Palette and typography implemented

| Role | Value |
| --- | --- |
| Royal blue / primary hero | #1738B4 |
| Deep blue / hover | #132875 |
| Gold / decorative brand detail | #B68A39 |
| Light gold / text on blue | #F0D394 |
| Pale gold / CTA background | #EEE0BD |
| Royal black / HRIS and contrast | #10151F |
| Paper / general page surface | #F9F9F6 |
| Font family | Arial, Helvetica, sans-serif; no external font dependency |
| Fixed hero title | 50px desktop, responsive 32–44px on smaller screens |
| Rotating hero message | Responsive 28–44px, lighter weight than fixed title |
| Supporting hero line | 20px desktop, 18px tablet/mobile |
| Section heading | Responsive 32–48px |
| Body / compact UI | 15px / 12–14px |

Animation: slide hold 3 seconds, fade out 1 second, next fade in 1 second. Manual/pause controls retained; reduced-motion preference respected. Provisional logo entrance lasts 1.2 seconds, once per page load. Actual logo motion should preserve recognizable branding and have a static fallback.

## Proposed asset specification

| Asset | Proposed delivery |
| --- | --- |
| Logo | SVG plus transparent PNG; static monochrome and full-colour versions. Supply approved artwork before final animation. |
| Logo motion | 2–4 second restrained reveal; transparent WebM if needed, plus static SVG fallback. Target under 1MB. |
| Hero clip | MP4 H.264, 720p minimum, subject centred for circular crop; 8–15 second muted loop, target under 4MB; WebP poster under 150KB. |
| Four team previews | 8–15 second 720p loops, target under 2MB each; centre-safe framing; WebP posters. Longer presentation versions may use separate modal sources in a future extension. |
| Team presentation audio | Clear speech; captions as reviewed WebVTT plus transcript. Do not rely on hover audio for essential content. |
| Eight team portraits | 800px minimum short edge, consistent crop/light; WebP target under 150KB. Include approved name, designation and short biography. |
| Sixteen partner logos | SVG preferred; otherwise transparent WebP/PNG. No decorative logo redraws. Include approved display name. |

Targets are proposed budgets, not limits approved in the meeting. Existing service files remain silent illustrative motion previews. Hero captions can be configured as described in ASSET-GUIDE.md. Supply captioned service videos; separate service caption-track support remains pending.

## Navigation and anchor map

| Destination | Path |
| --- | --- |
| Discover / Job Portal | index.html / jobs.html |
| Four solutions | index.html#services |
| Employee Management Portal | index.html#software |
| Talent Acquisition | index.html#hris-talent-acquisition |
| On-boarding | index.html#hris-on-boarding |
| Payroll | index.html#hris-payroll |
| Separation | index.html#hris-separation |
| Certifications | index.html#certifications |
| Featured Partners | index.html#partners |
| Contact / Inquiry | index.html#contact |

All 12 module anchors are generated from their labels as lowercase hyphenated slugs with an `hris-` prefix. Keep those labels/slugs stable if sharing links.

## Certification and badge criteria — proposed only

Each certification needs a published syllabus, entry requirements, duration, price, assessment method, pass threshold, issuing organisation and renewal policy. A candidate should receive a certificate only after staff confirm the assessment result and issue a traceable record. None of these operational details are established by the minutes.

**Job-Ready Candidate:** proposed completed profile, reviewed CV and career-readiness checklist. Staff review and transparent appeal/correction process required. No guarantee of employment.

**HRWala Verified Candidate:** proposed identity confirmation with consent, plus checks of specifically claimed credentials using approved sources. Record exactly what was checked and when; allow correction and expiry/review. Do not imply a background check or guarantee of suitability.

**HRWala Trusted Employer:** proposed verified organisation identity, authorised recruiter contact, accurate company profile and acceptance of recruitment conduct rules. Review complaints and periodically recheck. No guarantee of job quality or payment.

Use limited-access verification records on a server, not browser storage or public frontend files. Approve the process, responsible reviewer and privacy/retention policy before activating badges.

## Hosting and 50GB backup proposal

Keep the current Vite frontend on the chosen static deployment host. Use the project's `public/assets` for current small media; assess a dedicated media/object store when final clip volume is known. This is an architecture proposal, not a provider or pricing recommendation. The meeting's reference to Jio Cloud does not establish availability, suitability, pricing or an approved purchase.

Illustrative 50GB budget: 20GB original approved media, 5GB web exports, 20GB versioned archives, 5GB spare. Review usage before exceeding 80%; adjust retention when actual files arrive. Do not put applicant identity documents into a general shared media folder.

Weekly manual routine: named owner exports source/content and approved assets; adds a dated archive to an access-controlled backup location; checks completion and archive readability; retains four weekly versions within the budget; performs a restore check monthly. Keep the live deployment separate from the backup. Provider, account owner, access rights and final retention remain TBD. This delivery does not set up automated backups or a database.
