---
name: landing
description: Building and auditing landing pages that don’t look template-generated. Use when the user asks to create a landing page, promotional website, or one-page site, or to review/improve an existing landing page (“looks vibe-coded,” “too AI-like,” “looks like everyone else”).
---

# Landing Pages

I put this skill together after comparing landing pages built from the same brief with and without the skill several times. The main thing I learned is that a landing page doesn’t look AI-generated because of a particular font or color. It looks that way when nobody has made any decisions: every empty space gets filled with the most common option, and the combination is recognizable from the first screen.

That’s why there isn’t a list of prohibitions at the beginning. I tried that: ban purple gradients and Inter, and the next most common template takes their place—a cream background with green and another trendy sans-serif. What works instead is deriving every noticeable decision from the subject of the page rather than from habit.

If there is a brief, it takes precedence over this skill. Wherever the brief explicitly specifies a decision (colors, font, copy, page composition, tech stack), follow the brief, even if it conflicts with the advice below. Apply this skill to everything the brief leaves open to your judgment. With a detailed brief, I saw almost no difference between the results; with a short one, the difference was visible from the first screen: the less that is specified, the more decisions you have to make.

Scale the amount of work to the task. In my measurements, a full pass takes roughly twice as long as building without the skill. A page intended for delivery or publication must go through all seven steps. If the user explicitly asks for a draft, sketch, or quick prototype, complete steps 1–5 and a brief browser review, skip step 6 (legal pages, 404, preview image), and list the skipped items in the report. Never shorten steps 1–3: they are what distinguish the result from a template, and they take the least time.

This determines the workflow: first understand what the page is about, then assemble real content, then make design decisions, and only then implement the page. Read the list of common tells in `references/tells.md` at the end, during the audit—not at the beginning.

## 1. Brief

Before writing any code, summarize the following for yourself in a few lines:

- What is being sold or offered, in one sentence using the customer’s own language.
- Who arrives at the page and what question they have in mind.
- The single action the page exists to drive (inquiry, purchase, booking, download).
- Which details in the brief are facts (prices, timelines, figures, testimonials, contact details, photos), and which are missing.

Take everything from the brief. If something is missing, make your own decision and record it as an assumption in the final report. Ask the user only if you cannot understand what is being sold or what the primary conversion action should be without an answer.

## 2. Content Before Design

Write the page copy in a simple document before implementing the layout. The design should be built around the copy, not the other way around.

**Do not invent facts.** Testimonials, client names, logos, counters (“10,000+ users”), ratings, percentages, timelines, prices, addresses, and team members may appear on the page only if they come from the brief. Fabricated proof is worse than no proof: visitors can recognize it, and it creates legal risk for the site owner. In my tests, the model did not make up testimonials even without this rule, but I kept it because mistakes here are more costly than almost anything else.

If information is missing:

- Remove the entire section. A landing page without testimonials is fine; one with fabricated testimonials is not.
- Or replace it with something truthful: how the process works, exactly what the price includes, or what happens after an inquiry.
- If a value is essential (business details, phone number, address), use a visible placeholder such as `[FILL IN: phone number]` and list all placeholders in the report.

**Copy.** The hero headline should answer “What is this, and who is it for?” so clearly that the visitor understands it without the subheading. For every sentence, ask: could a competitor or a company in another industry use this exact line unchanged? If yes, it is generic—replace it with something specific: a figure from the brief, a name, a timeline, or an example. A button should name what happens after clicking (“Book a measurement” rather than “Get started”), and the same action should be called the same thing everywhere. Without this rule, I once ended up with three different labels for the same button on one page.

For Russian and Ukrainian copy, follow standard typography: use appropriate quotation marks, em dashes, and non-breaking spaces after short prepositions. I did not include the advice to “remove em dashes because AI writes that way”: that advice applies to English, whereas dashes are normal punctuation in Russian.

## 3. Design Decisions

Make decisions before implementation and record them as CSS variables at the beginning of the stylesheets:

- Palette: 4–6 colors, each with a role (background, text, muted text, accent, border).
- Typography: one or two font families and a size scale.
- Spacing scale used for all distances on the page.
- Border radii, line thickness, and the character of shadows—or their absence.
- Motion: where it appears and why.

Derive each decision from the world of the product. Look at the things surrounding it: materials, tools, packaging, signage, and the environment in which its audience lives. These should inform the colors, textures, type character, and shape of elements. Apply the same test as with the copy: would this decision work just as well for any other landing page? If so, the decision has not been made yet.

**Three directions.** Before choosing, write down three directions, one or two lines each. They should differ in substance, not just in shade: different visual sources, different density, different primary element. I noticed a trap in the skill itself: early versions led to the same “paper document” concept twice in a row (an estimate, receipt, or printout). In other words, the skill developed its own template. Treat the first idea that comes to mind with suspicion, and use the “paper document” concept only when the other two are genuinely weaker for the product. Mention the rejected directions in one line in the report.

**Selection criterion.** Choose not the most unusual direction, but the one the target visitor will trust fastest and feel comfortable engaging with. I added this rule after a cleaning-service test: the clever version with dark “tile” panels felt colder and converted worse than an ordinary warm landing page built without the skill. Originality is a means, not an end. Picture a specific person in the target audience and ask what they would feel in the first few seconds. For everyday and local services (cleaning, repairs, delivery, salons, clinics), a warm, light, familiar presentation usually wins, with distinctive details giving it character. A cool or conceptual presentation makes sense when the audience thinks that way: professional tools, technical products, design.

**Recognizability of the service and brand.** This requirement was added after I looked at two polished cleaning-company landing pages and realized that either could just as easily have been a coffee shop’s website. From the visual appearance alone, before reading the copy, it should be clear what the company does. Use the substitution test: mentally replace the name and text with those of a coffee shop, dental practice, or delivery service. If the design would still work unchanged, it fails—even if the palette and grid are polished. An abstract idea alone is not enough: visitors must be able to see the actual service.

Recognizability has three layers, and all three are required:

- An image of the subject in the hero: what the company does, with what, and where. For cleaning, this might be a clean room, bucket and mop, gloves, or spray bottle; for a coffee shop, a cup, beans, or counter. This can be an original illustration, a set of SVG drawings in a consistent style, or a properly licensed photograph labeled as illustrative.
- A recurring brand motif throughout the page: a logo mark derived from the world of the service, repeated in icons, list markers, dividers, and section backgrounds. A logo in the header alone is not enough.
- Colors, textures, and shapes associated specifically with this service, rather than merely “pleasant” ones.

A separate note about the four-point sparkle (✦). I spotted it on a “Submit an inquiry” button in an almost-finished landing page: the model had used it to suggest “the sparkle of cleanliness,” which made semantic sense. But this symbol appears on every AI-generated button in every product and gives the page away more than any gradient. Do not use it anywhere: not as a motif, on buttons, or in illustrations. Show cleanliness and shine with a strip of reflected light on glass, a droplet, or a soap bubble. Keep buttons text-only, without decorative icons.

Choose one memorable element where all the boldness goes: an unusual hero grid, oversized typography, an original illustration, or a distinctive way of presenting the product. Keep everything else quiet and precise. A page where everything stands out looks just as templated as a page where nothing does.

If the user is available, show them the concept before implementation: five to seven lines covering the chosen direction, palette, font, primary element, and section order, then wait for their response. It is much cheaper to adjust the idea at this stage than to redo a finished page, and this is the only point where the client’s taste can shape the result. If working autonomously (as a subtask, or because the user asked not to be consulted), keep going: make the decisions yourself and include the same concept in the report.

For a Russian- or Ukrainian-language landing page, make sure the selected font supports Cyrillic, including і, ї, є, and ґ. Many popular typefaces do not, and the text may silently fall back to another font.

## 4. Structure

Do not start with the standard sequence of “hero, three benefits, testimonials, pricing, call to action.” Instead, list the questions visitors ask in order (what is this, is it for me, how does it work, how much does it cost, why should I trust it, what happens next) and keep only those that can be answered meaningfully.

The hero must contain three things visible without scrolling on both desktop and mobile: a headline that says what it is and who it is for; the primary action (button or form); and something visual that demonstrates the offer—the product itself, an example result, a calculation using real figures from the brief, or an illustration of the service. I added this rule after seeing a version whose hero consisted of text alone, with no button: it looked empty and lost visitors who were already ready to submit an inquiry. The illustration must not push the primary action below the fold.

The form of each section should follow its content: show a process as steps, a comparison as a table, prices as a price list, and a product as the product itself. If three consecutive sections look like rows of identical cards, the form was probably chosen out of habit.

## 5. Implementation

Use the tech stack specified in the brief. If none is specified, use static HTML and CSS with minimal JavaScript and no build step: that is enough for a landing page, and the result can be opened with a double-click.

- Use semantic markup, one `h1`, and correctly ordered headings.
- Support widths from 360 px upward without horizontal scrolling. Test on a narrow screen rather than assuming it works.
- Interactive elements must have states: hover, visible keyboard focus, pressed, and disabled.
- Forms need field labels, clear errors, submitting state, and success state. If there is no backend, do not silently pretend that submission succeeded: leave an explicit integration point and mention it in the report.
- Text contrast must be at least 4.5:1, including in dark areas.
- Use animation only when it explains something or confirms an action. Respect `prefers-reduced-motion`.
- Prefer images from the brief. If none are provided, the page must still visually communicate the service (see “Recognizability” in step 3): create original SVG illustrations in a consistent style or use a properly licensed photograph, label it on the page as illustrative, and record the source and license in the report. In the first version, I prohibited all stock photos and advised relying on typography, which made the pages bland. The rule now is only this: never present someone else’s or AI-generated images as the company’s actual work, team, office, or customers. Images must have dimensions specified and meaningful `alt` text.
- While the page is a prototype or uses demo contact details, it must not collect real personal data: do not store entered names, phone numbers, or email addresses, even locally. Keep the test-mode notice understated: one line of regular muted text beside the form. Initially, I used a red border under every form, which looked like a defect during demos. Show the detailed message that the data was not sent anywhere only after the user clicks the button, not beforehand. If the page has multiple forms, only one needs a persistent notice.

## 6. Completion

Small unfinished details reveal a page faster than its overall style. Before delivery:

- Write a page-specific `title` and `meta description`, and set `lang`.
- Add a favicon (SVG is sufficient) and Open Graph metadata with an image.
- Add a 404 page.
- If the page collects data (forms, analytics), provide a privacy policy page and link to it from the footer and beside the form. Base it on what the site actually collects, leave the operator’s legal details as placeholders, and note in the report that it is a draft for legal review.
- Terms of use are needed when the site includes payments, registration, or a public offer. If the brief restricts the page list and excludes them, do not add them; mention this in the report.
- No dead links (`href="#"`), filler text, unrelated names, or broken anchors.
- Contact details, year, and name in the footer must be real or clearly marked as placeholders.

## 7. Audit

Open the finished page in a browser and review screenshots at desktop and mobile widths. Look at it as a visitor: what is clear within five seconds, where does the eye go, and what looks broken? Repeat the substitution test on the hero screenshot: if you cover the headline and logo, can you still tell what the company does? If not, return to step 3 and add an image of the service and a brand motif.

Review the mobile screen separately, as an independent composition rather than a compressed desktop layout. No horizontal scrolling does not automatically mean the page is usable. Scroll through the entire page at 390 px width and check:

- What is visible in the first screen without scrolling? Is it clear what the page is about, and is the primary action present?
- Can every button and link be tapped comfortably (at least 44 × 44 px), and are they spaced apart?
- Are tables, diagrams, and the primary element readable, or have they become too small and need a different form on narrow screens?
- Has the page become an endless stream of identical blocks? Should some content be collapsed or shortened on phones?
- Do sticky bars cover content or form fields while the user is typing?

Then read `references/tells.md` and inspect the page. Fix each issue by returning to step 3 or 4 and making a deliberate decision, not by replacing it with the nearest equivalent.

Finish with a report: which design decisions were made and what informed them, which directions were rejected, which assumptions were made, which placeholders need filling, and what remains untested.

## Auditing an Existing Landing Page

If asked to evaluate an existing page, reverse the order: open it, capture screenshots, read the copy and code, and compare it with `references/tells.md`. Prioritize findings as follows:

1. Falsehoods (fabricated testimonials, figures, logos).
2. Unclear offer or unclear next action.
3. Broken elements (mobile layout, contrast, forms, links).
4. Incomplete work (step 6).
5. Templated appearance and lack of character.

For every finding, suggest a concrete replacement, not just a diagnosis.
