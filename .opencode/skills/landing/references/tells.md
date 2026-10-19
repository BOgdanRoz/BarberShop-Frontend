# Signs of a Template-Like Landing Page

I compiled this list from two other people’s checklists about “why your website looks vibe-coded” and from my own test runs, where I observed what the model does by default. I removed some items from those checklists as matters of taste and added others myself.

These are symptoms to check for on a finished page, not rules for building one. Almost none of these items is inherently forbidden: if a decision was deliberately derived from the subject of the page, it can stay. The problem is when several signs appear together and none of them was chosen deliberately. There are two exceptions: the “Falsehoods” group and the sparkle symbol, which I always remove.

Replacing one sign with its nearest alternative fixes nothing. I saw this myself: as soon as one template was banned, the next one appeared in its place. A blue-purple gradient replaced with a beige background and terracotta accent, and Inter replaced with Space Grotesk, produce an equally recognizable next-generation template.

## Falsehoods

The most serious category. Always fix these.

| **Sign**                                                             | **What to do**                                           |
| -------------------------------------------------------------------- | -------------------------------------------------------- |
| Fabricated testimonials, names, job titles, or customer photos       | Remove the section or use testimonials from the brief    |
| Counters and metrics without a source (“10,000+ customers,” “99.9%”) | Remove them or replace them with figures from the brief  |
| Unverified “trusted by” logos                                        | Remove them                                              |
| Generated or stock photos presented as the “team” or “office”        | Remove them; show the product or use no photo            |
| A form that displays success without sending anything                | Connect submission or clearly mark the integration point |

## Copy

| **Sign**                                                                    | **What to do**                                                                 |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Vague hero headline (“Unlock your business’s potential”)                    | State what it is and who it is for                                             |
| Buzzword pile: innovative, seamless, end-to-end, ecosystem, next-generation | Replace with facts: a number, timeline, name, or example                       |
| Groups of three adjectives and the same rhythm in every paragraph           | Rewrite it the way the business owner would actually say it aloud              |
| Buttons labeled “Get started,” “Learn more,” or “Try it”                    | Name what will happen after clicking                                           |
| Emojis in headings or used instead of icons                                 | Remove them or replace them with icons in one consistent style                 |
| An em dash in every other sentence in English copy                          | Restructure the sentences. Dashes are normal in Russian copy; leave them alone |
| A “Made with AI” badge or website-builder credit                            | Remove it                                                                      |

## Structure

| **Sign**                                                                                              | **What to do**                                                             |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| The sequence “hero, three benefits, testimonials, pricing, call to action,” regardless of the product | Rebuild the page around visitors’ questions                                |
| Three cards in a row, each with an icon, heading, and two lines of text                               | Choose a format that fits the content: steps, table, list, or diagram      |
| A badge above the main headline                                                                       | Remove it if it communicates nothing important                             |
| All sections have the same height and composition, with centered text everywhere                      | Establish rhythm: alternate dense and spacious sections and vary alignment |
| Sections included “because that’s the norm” (FAQ with obvious questions, “our values”)                | Remove them                                                                |

## Visual Style

| **Sign**                                                                                                                                                                          | **What to do**                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A design with no signs of its industry: if you replace the name, the page could belong to a coffee shop, clinic, or delivery service                                              | Add an image of the service in the hero and a brand motif repeated throughout the page                                                                                     |
| A checkmark logo, a letter in a square, or an abstract shape unrelated to the service                                                                                             | Use a mark drawn from the world of the service, and repeat the same motif in icons and details                                                                             |
| A four-point sparkle (✦, sparkle) anywhere: in buttons, list markers, the logo, or illustrations. It is a common AI-feature symbol and gives away the page more than any gradient | Remove it everywhere. Represent cleanliness, shine, novelty, and “magic” in other ways: a strip of reflected light on a surface, a droplet, a bubble, or a concrete object |
| A decorative icon inside a button (sparkle, arrow, rocket, lightning bolt) with no meaningful purpose                                                                             | Use a text-only button. Include an icon only when it communicates the action: a phone for calling, a download symbol for a file                                            |
| Blue-purple gradient backgrounds or buttons                                                                                                                                       | Derive the palette from the subject                                                                                                                                        |
| Gradient-filled headline text                                                                                                                                                     | Use a solid color and create emphasis through size and weight                                                                                                              |
| Frosted-glass cards                                                                                                                                                               | Use flat surfaces with a clear hierarchy                                                                                                                                   |
| Cards with a colored strip along the top or side border                                                                                                                           | Distinguish cards by their content, not their borders                                                                                                                      |
| Grainy texture over a gradient                                                                                                                                                    | Remove it unless the texture is related to the subject                                                                                                                     |
| Dark theme with gray text on dark gray                                                                                                                                            | Increase contrast to at least 4.5:1                                                                                                                                        |
| Inter or another default font used for everything                                                                                                                                 | Choose a typeface that suits the product’s character and check its Cyrillic support                                                                                        |
| The “sans-serif plus italic serif for one word in the headline” pairing                                                                                                           | It is just the same template in a newer form. Choose it deliberately or remove it                                                                                          |
| Unmodified shadcn/ui components                                                                                                                                                   | Customize them using your own variables for radii, colors, spacing, and fonts                                                                                              |
| Lucide icons in every card                                                                                                                                                        | Keep icons where they help comprehension; remove the rest                                                                                                                  |
| Pill-shaped buttons everywhere                                                                                                                                                    | Choose button shapes as part of the overall radius system                                                                                                                  |
| Spacing values that do not follow a scale                                                                                                                                         | Bring them into a consistent scale                                                                                                                                         |
| The same shadow and corner radius on everything                                                                                                                                   | Establish levels: what sits on the page and what sits above it                                                                                                             |

## Motion

| **Sign**                                        | **What to do**                                           |
| ----------------------------------------------- | -------------------------------------------------------- |
| Every section appears on scroll                 | Keep one or two meaningful moments, or remove the effect |
| A glow or spot that follows the cursor          | Remove it                                                |
| A custom cursor                                 | Remove it                                                |
| Buttons whose only hover change is opacity      | Provide a clear hover state and visible keyboard focus   |
| Animation that ignores `prefers-reduced-motion` | Add support for disabling it                             |

## Incompleteness

| **Sign**                                                             | **What to do**                                                                                 |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| No favicon, or the framework’s default icon is still present         | Create a custom one; SVG is sufficient                                                         |
| Browser tab says “Vite App,” “Document,” or has an empty description | Write a `title` and `meta description`                                                         |
| No privacy policy or terms of use                                    | Create the pages and link to them                                                              |
| No Open Graph image, so shared links have no preview                 | Add one                                                                                        |
| `href="#"` links or social links that lead nowhere                   | Remove them or connect them                                                                    |
| No 404 page                                                          | Create one                                                                                     |
| The site uses the hosting provider’s technical subdomain             | This is outside the page implementation. Remind the owner to use a custom domain in the report |
| Horizontal scrolling or clipped headings on mobile                   | Fix it and test at 360 px                                                                      |
