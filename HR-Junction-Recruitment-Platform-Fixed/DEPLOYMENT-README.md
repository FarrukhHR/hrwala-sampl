# HR Junction / HR Wala — Hostinger deployment

## Fixed in this package

- `vite.config.ts` now imports `./site.config.json`, a normal visible file at the project root. A GitHub upload that misses the hidden `.figma` directory can no longer cause the reported missing-site-configuration error.
- `site.config.json` preserves the exact original configuration from `.figma/make/site.json`.
- The production build output is explicitly `dist`.
- Three missing separators in TypeScript object types in `src/App.tsx` are fixed.
- `package.json` declares pnpm 10.34.3, matching the original Figma toolchain. The original lockfile is unchanged.
- All other original files, including Figma metadata and the application design, are preserved.

## Upload to GitHub

1. Extract this ZIP on your computer.
2. Open the extracted directory containing `package.json`, `vite.config.ts`, and `site.config.json`.
3. Upload that directory's contents into your GitHub repository, preserving `src/`, `public/`, and all other folder paths. Upload the contents rather than an extra enclosing project directory if you want to use the repository root.
4. Replace the corresponding old files. Do not upload just this ZIP to the repository; GitHub deployment needs the extracted source files.
5. Confirm that the deployed branch contains `site.config.json` beside `vite.config.ts`.

For an existing complete repository, the changed/new deployment files are:

- `vite.config.ts`
- `site.config.json`
- `package.json`
- `src/App.tsx`

## Hostinger settings

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Branch | main, if that is the branch containing the uploaded code |
| Node version | 22.x, with Node 22.12 or newer |
| Root directory | Repository root (`.` or the root/default option) when `package.json` is on the repository's first page |
| Package manager | pnpm |
| Build command | pnpm run build |
| Output directory | dist |

If `package.json` is inside an enclosing folder such as `HR Junction Recruitment Platform`, select that exact relative folder path as Root directory instead.

After committing the source changes, redeploy the latest commit in Hostinger.

## Local commands

Use Node 22.12 or newer and pnpm 10.34.3:

```sh
pnpm install --frozen-lockfile
pnpm exec tsc --noEmit
pnpm run build
pnpm run preview
```

## Validation and existing application limits

The corrected source passed the TypeScript check and a production build using Node 22.23.3 and pnpm 10.34.3. The production files are emitted into `dist`. A separate build also passed with the entire `.figma` directory temporarily absent, reproducing the missing-folder upload scenario.

This is the original frontend prototype. Its sign-in uses browser session storage, listings use demo data, and some actions are simulated. This deployment fix does not add a database, real authentication, payment processing, or other backend services. Fonts and photos retain their original external URLs.

The original `robots.index: false` setting is preserved, so the built site requests that search engines do not index it. Change `site.config.json` deliberately when you are ready for public indexing. The original default document title is also preserved.
