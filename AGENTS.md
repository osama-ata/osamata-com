# AGENTS

Guidance for AI coding agents and contributors working in this repository.

## Project Snapshot

- Framework: Docusaurus 3.10
- Package manager in practice: npm (lockfile is present)
- Node requirement: >=20
- Core docs/blog content is under docs and blog

## Expected Workflow

1. Make focused, minimal edits.
2. Validate with a production build before handing off:
   - `npm run build`
3. If needed, preview output locally:
   - `npm run serve`

## Content and MDX Conventions

- Prefer `.mdx` for files that contain MDX/JSX syntax.
- Use strict MDX-compatible patterns:
  - JSX comments, for example: `{/* truncate */}`
  - Bracketed admonition titles, for example: `:::info[Title]`
- Keep content portable and parser-friendly.

## AI-Friendly Output

- llms artifacts are generated during build and served from the build output:
  - `build/llms.txt`
  - `build/llms-full.txt`
- Do not commit generated build output.

## Guardrails

- Do not commit secrets or environment-specific credentials.
- Avoid broad refactors unless explicitly requested.
- Preserve existing writing style and information architecture.
