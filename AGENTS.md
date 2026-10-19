# AGENTS.md --- Barbershop Landing Page

## 0. graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.

## 1. Project Mission

Build a polished, production-minded, responsive landing page for a
barbershop serving **men and children**, with men as the primary
audience and parents booking or choosing services for children as a
secondary audience.

The website must communicate the business's value quickly, make its
services easy to understand, establish trust in the barbers and their
craft, and guide visitors toward the business's Instagram destination.

This is a commercial website project. Do not describe the website or
business as fictional, fake, a demo, a mockup, a portfolio concept, or a
template in the website UI, page copy, metadata, or other user-facing
content. Do not add such disclaimers unless the user explicitly asks.

## 2. Communication Rules

- Communicate with the user in **Ukrainian** in explanations,
  questions, progress updates, and summaries.
- Keep this file and code identifiers, filenames, component names,
  commit messages, and technical documentation in **English**, unless
  the user explicitly requests otherwise.
- User-facing website copy should be **Ukrainian by default**. Follow
  any later language instruction from the user.
- Be concise and practical when reporting work. Explain what changed,
  which checks were run, and any unresolved issue.
- If an essential business detail is unknown, do not interrupt the
  workflow with a long list of questions. Use a sensible, editable
  default where possible and ask only when the missing information
  materially affects implementation.

## 3. Design References and Visual Direction

Treat the user-provided design references as the primary visual
direction. They indicate:

- A refined, warm barbershop identity with a confident, masculine feel
  that still feels welcoming to parents and children.
- A palette built around deep seal brown, reddish brown, black bean,
  muted gold/tan, seashell cream, and white.
- Clear typography with expressive display headings and highly
  readable body copy.
- Strong editorial layouts, intentional whitespace, carefully composed
  barber photography, simple line icons, and restrained decorative
  details.
- A mix of light cream sections and dark brown sections, rather than
  one uninterrupted dark page.
- Service cards and barber portraits that feel crafted and premium.
- A substantial dark footer with clear navigation, business
  information, and social links.
- Responsive layouts that preserve hierarchy and readability on
  mobile.

## 3.5 Git Workflow and Version Control

Follow a structured Git workflow throughout development.

### 1. Before Starting Work

- Check the current Git branch and working tree status.
- Inspect recent commits to understand the project's history.
- Never overwrite, discard, or commit the user's unrelated changes.
- Do not start a task if existing uncommitted changes could be affected without first understanding them.

### 2. Branch Management

- Keep `main` as the stable branch.
- Before starting a new feature, create a dedicated branch from the latest appropriate base branch.
- Use descriptive branch names with prefixes such as `feature/`, `fix/`, `refactor/`, or `docs/`.
- Do not create a new branch for every minor action within the same task. Reuse the current task branch when appropriate.
- Never switch branches if doing so could lose or disrupt uncommitted work.

### 3. Commits

- Create commits after completing meaningful, logically independent changes.
- Use short, descriptive commit messages in English.
- Prefer Conventional Commit prefixes, such as `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, and `chore:`.
- Before committing, review the diff and ensure no secrets, environment files, generated build output, or unrelated changes are included.
- Run relevant checks before committing.
- Never create empty commits or claim a commit succeeded unless Git confirms it.

### 4. Push and Merge

- Do not push branches to a remote repository unless the user has authorized remote pushes.
- Do not merge feature branches into `main`, rebase shared branches, force-push, or rewrite published history without explicit user approval.
- When a task is complete, report the branch name, commits created, checks performed, and whether the branch has been pushed or merged.
- If a task requires a merge, explain the current state and request approval before performing it.

### 5. Safety

- Never use destructive Git commands, such as `git reset --hard`, `git clean -fd`, or force-push, without explicit user approval.
- Preserve all user changes and investigate unexpected Git status results before proceeding.
- If Git is unavailable or the repository is not initialized, report the issue and ask before initializing or changing repository setup.

### Reference palette

Use these as the initial design tokens, matching the supplied color
palette reference:

```css
:root {
  --color-seal-brown: #5a1b0c;
  --color-brown: #9c3111;
  --color-black-bean: #34120a;
  --color-lion: #ad885a;
  --color-seashell: #f9f0eb;
  --color-white: #ffffff;
}
```

Use the colors purposefully: - `--color-seal-brown`: deep brand surfaces
and prominent dark sections. - `--color-brown`: warm accent blocks and
selected emphasis. - `--color-black-bean`: darkest backgrounds, footer,
and strong contrast. - `--color-lion`: muted gold details, borders,
icons, and secondary accents. - `--color-seashell`: primary light
surfaces and soft backgrounds. - `--color-white`: cards, text on dark
surfaces, and clean negative space.

Check text contrast before finalizing. Do not use gold/tan for small
text on light backgrounds if contrast is insufficient.

### Typography

The references suggest: - **Righteous** for expressive display headings,
if available and visually appropriate. - **Poppins** for body text,
navigation, labels, and buttons.

Load fonts intentionally and provide sensible system fallbacks. Avoid
using many font families or weights. If a reference asset or font is
unavailable, choose the closest dependable alternative and keep
typography consistent.

### Visual quality rules

- Follow the **Landing Page Skill** for landing-page design and
  implementation. Before creating or substantially redesigning the
  landing page, locate and read the installed skill's `SKILL.md` and
  apply its instructions. If the skill cannot be found or read, report
  that briefly and continue using this file rather than pretending the
  skill was loaded.
- Design around the actual business offering and visitor
  decisions---not generic AI landing-page patterns.
- Avoid gratuitous gradients, glassmorphism, excessive rounded cards,
  random floating shapes, decorative blobs, and unnecessary animation.
- Do not make every section look identical. Use a deliberate rhythm
  between light and dark sections.
- Use photography that is relevant to barbers, haircuts, beard care,
  and family-friendly children's cuts. Avoid unrelated stock imagery.
- Do not use an image as a substitute for real text or essential UI.
- Avoid tiny text, low contrast, overcrowding, and decorative effects
  that compete with the content.
- Prefer purposeful, subtle motion. Respect `prefers-reduced-motion`.
- Do not invent elaborate visual elements just to make the page appear
  more complex.

## 4. Landing Page Scope

This project is a **single-page landing website**. Keep it focused and
straightforward.

### Core sections

Build the final section order to suit the references and the content,
using these sections as the baseline:

1.  **Header**
    - Brand mark/name.
    - Desktop navigation to page sections.
    - One clear primary CTA.
    - Accessible mobile menu with a visible open/close state.
    - Keep the header visually aligned with the cream/brown brand
      system.
2.  **Hero**
    - A clear, memorable headline focused on the haircut experience
      and craftsmanship.
    - Supporting copy that communicates the barbershop's value for men
      and children.
    - A primary CTA that leads to `https://www.instagram.com/`.
    - A secondary CTA that scrolls to services or the barbers section.
    - Relevant barber/shop imagery, arranged with strong composition
      and readable text.
    - Avoid vague claims such as "the best in the world" unless the
      user provides evidence.
3.  **Services**
    - Present a concise, understandable selection of relevant
      services, such as men's haircuts, children's haircuts, beard
      trimming, clean shave, and styling.
    - Use clear labels, brief descriptions, and prices only when the
      user has supplied or approved them.
    - Do not invent real business prices. If prices are needed before
      they are known, make them easy to update in one central data
      file and ask the user to confirm before production.
    - Ensure children's services feel welcoming rather than like an
      afterthought.
4.  **About / Why Choose Us**
    - Explain the approach to quality, attention to detail, comfort,
      and service.
    - Keep copy specific and useful rather than relying on generic
      marketing filler.
    - Do not claim certifications, years of experience, awards, or
      other factual credentials unless supplied by the user.
5.  **Barbers / Artists**
    - A portrait-led section inspired by the references.
    - Each profile may include a name, role, and specialties.
    - Do not invent real staff names or biographies as facts. Keep
      content centralized and editable until the user supplies
      approved details.
6.  **Gallery**
    - Show relevant haircut, beard, shop, and family-friendly work
      imagery.
    - Use consistent image treatment and accessible alt text.
    - Do not add a complex gallery library unless the interaction
      genuinely needs it.
7.  **Testimonials**
    - Include this section only when approved review content is
      available.
    - Never fabricate customer testimonials, names, star ratings, or
      quotes. If no approved reviews exist, omit the section or create
      a neutral trust/value section instead.
8.  **Final CTA**
    - A clear invitation to explore or contact the barbershop through
      Instagram.
    - Use the exact destination specified in the Instagram rules
      below.
9.  **Footer**
    - Brand identity, anchor links, services, and relevant
      contact/business details when supplied.
    - Include an Instagram link to the destination defined below.
    - Do not invent a physical address, phone number, email, opening
      hours, or legal details.

The final page can adjust or combine sections if doing so makes the
story clearer and the page more effective.

## 5. Instagram Destination and Functional Boundaries

There is no specific business Instagram profile URL available yet.

- All Instagram CTAs and Instagram social links must point to
  **`https://www.instagram.com/`** for now.
- Do not invent a username or link to a guessed profile.
- Open external links in a new tab only where appropriate, using
  `target="_blank"` with `rel="noopener noreferrer"`.
- This is a link to Instagram's website, **not an Instagram API
  integration**.
- Do not implement Instagram OAuth, Instagram Graph API, feeds,
  embeds, direct messages, or account-specific functionality.
- Do not build appointment booking, online payments, customer
  accounts, a CMS, an admin dashboard, or a backend unless the user
  explicitly expands the scope.
- Do not label a button "Book an appointment" if it does not actually
  perform a booking. Use a truthful action such as visiting Instagram
  or viewing services.
- Internal navigation should scroll to real sections on the same page
  and work on both desktop and mobile.

## 6. Technology and Architecture

Use the following stack unless the existing repository or the user
explicitly establishes a different one:

- React
- TypeScript
- Vite
- CSS Modules
- Semantic HTML
- React components with clear, maintainable responsibilities

### Constraints

- Do **not** use Tailwind CSS.
- Do not add a UI framework or dependency for a small interaction that
  can be implemented clearly with existing tools.
- Do not add routing for a single-page landing page unless the user
  requests multiple routes.
- Avoid unnecessary global state, custom abstractions, and
  overengineering.
- Keep visible content and repeatable data separate from presentation
  where practical.
- Prefer native browser capabilities and accessible HTML elements.
- Keep code, filenames, component names, and exported symbols in
  English.

### Suggested structure

Adapt this to the repository rather than forcing a restructure:

```text
src/
  assets/
  components/
    Header/
    MobileMenu/
    SectionHeading/
    ServiceCard/
    BarberCard/
    Footer/
  sections/
    Hero/
    Services/
    About/
    Barbers/
    Gallery/
    Testimonials/
    FinalCta/
  data/
    siteContent.ts
    services.ts
    barbers.ts
  styles/
    globals.css
    variables.css
  App.tsx
  main.tsx
```

Do not create empty folders or unnecessary files just to match this
example. Use CSS Modules for component-specific styling and keep shared
tokens/reset rules in global styles.

## 7. Responsive Design

Build mobile-first or verify the layout carefully from narrow to wide
viewports.

At minimum, check: - Small mobile screens around 320--375 px wide. -
Typical mobile screens around 390--430 px wide. - Tablet widths. -
Desktop widths around 1280--1440 px and wider.

Requirements: - No horizontal overflow. - No clipped headings, buttons,
navigation, or cards. - Images must scale and crop intentionally using
`object-fit` and suitable aspect ratios. - Desktop navigation must
become a usable mobile menu where needed. - Tap targets should be
comfortably usable. - Avoid fixed heights that clip content when text
wraps or font sizes change. - The layout must remain usable with browser
zoom and larger text. - Ensure the mobile version is deliberately
designed, not merely a compressed desktop layout.

## 8. Accessibility and Semantics

- Use semantic landmarks such as `header`, `nav`, `main`, `section`,
  and `footer`.
- Maintain a logical heading hierarchy.
- Provide meaningful `alt` text for informative images and empty alt
  text for decorative images.
- Make all interactions keyboard-accessible.
- Add visible focus states; do not remove outlines without a
  replacement.
- Use accessible names for icon-only controls.
- Use buttons for actions and anchors for navigation.
- Ensure sufficient color contrast.
- Keep mobile menu state and ARIA attributes synchronized.
- Respect `prefers-reduced-motion`.
- Do not communicate service availability or other important
  information using color alone.

## 9. Content and Data Integrity

- Keep editable business content in a clear, central location where
  practical.
- Never fabricate real business facts, staff credentials, customer
  reviews, prices, contact details, or opening hours.
- Do not put internal implementation notes, TODOs, placeholder
  warnings, or development commentary in the public-facing UI.
- If real business details are missing, use restrained copy that does
  not assert unsupported facts and keep data easy to replace.
- Avoid lorem ipsum and generic filler.
- Use natural, concise Ukrainian copy that speaks to men and parents
  choosing a haircut for a child.
- Do not mention in user-facing content that the site or business is
  fictional, fake, a demo, or a portfolio concept.

## 10. Performance and SEO

- Use appropriately sized, compressed images; avoid shipping
  unnecessarily large assets.
- Lazy-load below-the-fold images where appropriate, but do not
  lazy-load the main hero image if doing so harms initial rendering.
- Prevent layout shifts by defining image dimensions or aspect ratios.
- Use a descriptive Ukrainian page title and meta description once the
  business name is known.
- Use a sensible favicon if brand assets are available.
- Add Open Graph metadata when appropriate and when reliable
  content/assets are available.
- Use meaningful section IDs for anchor navigation.
- Do not add analytics, trackers, cookie banners, or external scripts
  unless requested.
- Avoid SEO claims, structured data, or business details that cannot
  be verified.

## 11. Working Procedure

For every task:

1.  Inspect the existing repository and relevant files before editing.
2.  Read this `AGENTS.md` and the Landing Page Skill's `SKILL.md` before
    relevant landing-page design work. Re-read the skill when a task
    depends on its specific guidance.
3.  Understand the current implementation and identify the smallest
    appropriate change.
4.  Make focused changes; preserve working functionality.
5.  Reuse existing components and styles where appropriate instead of
    duplicating them.
6.  Check responsive behavior and accessibility for any affected UI.
7.  Run available checks, ideally:
    - TypeScript/build check (`npm run build` or the repository's
      equivalent).
    - ESLint (`npm run lint` or the repository's equivalent).
8.  Fix issues introduced by the changes. Do not claim a check passed
    unless it was actually run and passed.
9.  Summarize the changes in Ukrainian, list the checks actually
    performed, and mention any remaining issue.

### When information is missing

- Do not assume the repository is empty; inspect it first.
- Do not overwrite existing project setup without a clear reason.
- Do not invent commands, scripts, dependencies, skill paths, or
  configuration files.
- If a required command is unavailable, say so and use the closest
  valid check.
- Ask a short clarification only when proceeding would likely produce
  the wrong result.

## 12. Code Quality

- Use strict, explicit TypeScript types where useful; avoid `any`
  unless there is a justified reason.
- Keep components focused and reasonably small.
- Extract a component when it improves clarity or avoids meaningful
  duplication---not just to make every JSX block a separate file.
- Avoid duplicated styles and hard-coded values that should be design
  tokens.
- Use stable keys for rendered lists.
- Keep React effects purposeful and correctly cleaned up.
- Avoid unnecessary effects for values that can be derived during
  render.
- Avoid console errors, warnings, dead code, unused imports, and
  unused dependencies.
- Do not add complex state management for a mostly static landing
  page.
- Do not perform broad refactors unrelated to the task.
- Do not suppress lint or TypeScript errors just to get a green build.

## 13. Definition of Done

A task is complete when:

- The requested behavior or visual change is implemented.
- The result follows the supplied references and design tokens.
- Desktop and mobile layouts are checked.
- Links and controls have truthful, working behavior.
- No unsupported business facts or fabricated testimonials have been
  introduced.
- No avoidable console, lint, or TypeScript/build issues remain.
- Relevant checks have been run and their actual results are reported.
- The final explanation to the user is in Ukrainian.

## 14. Priority Rules

When instructions conflict, use this order:

1.  The user's latest explicit instruction.
2.  The relevant guidance in the installed Landing Page Skill.
3.  The visual references and this `AGENTS.md`.
4.  Existing project conventions, when they do not conflict with the
    above.

Keep the implementation focused on a clear, attractive, accessible, and
commercially credible barbershop landing page for men and children.
