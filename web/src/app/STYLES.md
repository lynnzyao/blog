# How the site styles work

`layout.tsx` imports `globals.css` once, so its shared values and defaults apply
to every page. Each home component imports its own `.module.css` file for its
layout and appearance. Next.js gives module classes unique names, so a `.title`
in Projects does not clash with a `.title` in RecentPosts.

## What belongs in globals.css

The file is organized into five sections:

1. **Dependencies:** Google Fonts loads Inter (400, 500, 600) and Playfair Display
   (400, 500, 600, plus italic 400). Tailwind supplies its reset and utilities.
2. **Design tokens:** CSS custom properties define reusable colors, font families,
   and page stacking levels. `color: var(--ink)` means “use the shared ink color.”
3. **Document defaults:** border-box sizing includes padding and borders in an
   element's declared size; the body has no outer margin; links inherit their
   text color; inputs and buttons inherit typography.
4. **Typography defaults:** headings and quotations use the display font.
   Components still choose their own font sizes, weights, and spacing.
5. **Motion preference:** anchor navigation scrolls smoothly unless the visitor
   has requested reduced motion. Component animation rules live in their modules.

## Colors and fonts

| Variable | Value | Purpose |
| --- | --- | --- |
| `--ink` | `#181c20` | Main text and dark blocks |
| `--muted` | `#767676` | Supporting text and metadata |
| `--paper` | `#ffffff` | White cards and section surfaces |
| `--canvas` | `#f8f9fa` | Off-white background panels |
| `--line` | `#e3e5e6` | Borders and dividers |
| `--page-background` | `#0b1014` | Body background behind the home layers |
| `--font-body` | Inter, sans-serif | Paragraphs, navigation, labels, controls |
| `--font-display` | Playfair Display, serif | Editorial headings and large numbers |

Changing a color token updates every component that references it. Both font
families are also referenced by the component modules. To use a different web
font, update its loading import as well as the variable; changing the name alone
does not download a new font. Fonts use system fallbacks if Google Fonts cannot
load. Some component-specific colors, such as disabled arrows, stay in modules.

## Where layouts live

| File | Responsibility |
| --- | --- |
| `src/home/layout.ts` | Foreground section heights and offsets |
| `src/home/backgroundLayout.ts` | Independent background block positions and sizes |
| `src/home/HomeLayers.tsx` | Passes layout parameters to both layers |
| `src/home/HomePage.module.css` | Foreground flow and absolute background stacking |
| `components/BackgroundLayer.module.css` | White background, photograph in the first block, and solid black remaining blocks |
| `src/shared/components/Header.module.css` | Name block and navigation |
| `components/Showcase.module.css` | Overlapping title card, picture, carousel controls |
| `components/RecentPosts.module.css` | Floating blog panel and responsive article grid |
| `components/Projects.module.css` | Floating projects panel, columns, and study links |
| `components/GlobalView.module.css` | Floating white panel aligned with Projects and Recent Posts |
| `src/shared/components/Footer.module.css` | Full-width white footer with constrained inner content and form |

Paths beginning with `components/` are relative to `src/home/`. Header and Footer
live in `src/shared/components/` for reuse across pages.

Header, Showcase, Recent Posts, Projects, Global View, and Footer content use
shared alignment tokens in `globals.css`: `--content-max-width` is 1200px and
`--content-gutter` is 120px on desktop, 40px at widths up to 900px, and 24px at
widths up to 600px. `--section-gap` equals `--header-height`: initially 64px on
desktop and 56px on mobile, then updated to the header's measured height.
The same gap separates the header from the showcase and each following section.
Footer has a full-width white background outside the main content and background
layers; its inner content follows the shared alignment. Component padding still
shrinks on smaller screens.

## How the layers work

The header reserves its measured height with a wrapper before the home body.
`Header.tsx` uses a `ResizeObserver` to update that space when navigation wraps,
fonts load, or the viewport changes, and publishes that height as `--header-height`
so section gaps follow it. Before client initialization, the header
stays in normal document flow; after measurement it is fixed at the top.

The header is followed by a relatively positioned home body. That body uses
`isolation: isolate` to keep its stacking context self-contained:

- `--layer-background: 0` places the decorative image behind the content.
- `--layer-shell: 10` places the home sections above that image.
- `--layer-header: 20` keeps the header above the home body.

`src/home/backgroundLayout.ts` defines the background geometry independently of
`src/home/layout.ts`, which controls foreground sections. `HomeLayers.tsx` accepts
separate `blocks` and `sections` props. The background is absolutely positioned
behind the foreground, which uses normal document flow. There are no shared grid
rows or measurements of foreground components.

Every background block has its own `top`, `left` or `right`, `width`, and `height`.
Coordinates are measured from the home body's top edge, below the header. Numbers
are pixels; CSS lengths are also accepted. For example,
`{ id: "custom", top: 900, left: 0, width: "20%", height: 500 }` places a block
900px below the home body's top, independently of any section. Edit each block's
position and size directly to adjust the overall composition. Explicit pixel
heights stay fixed when foreground content grows or stacks on mobile. Blocks are
clipped at the home body's edges and do not contribute to its content height.

The background surface is currently white (`#FFFFFF`). Only the first block shows
`/home_background.jpg` with a translucent black tint; all remaining blocks are
pure black (`#000000`). Blocks are real elements, with no pseudo-elements or
repeating gradients.

Foreground `height: "auto"` follows responsive content; a CSS length sets an
explicit section height. Foreground coordinates offset and size each relatively
positioned wrapper. Offsets do not reserve additional space in document flow.
Changing a section or its order has no effect on background block coordinates.

The background ignores pointer events, so links and buttons above it stay
clickable. Within the showcase, its title card uses a local stacking level to
overlap the photograph. Larger z-index numbers only compete within the relevant
stacking context; they are not a universal page ranking.

## What changed in this cleanup

Removed the unused CSS from the original homepage: the old hero, header, post,
project, manifesto, subscription, and footer rules; their responsive overrides;
the missing `/hero.jpg` reference; and four unused layer variables. The rebuilt
components already own these styles in CSS Modules.

The active palette and font choices are preserved. The original stylesheet and
design token reference remain untouched in `.agent/design/baseline/` at the
repository root. Those snapshots are historical references, not application
imports.

For future edits: change `globals.css` for site-wide defaults, a component module
for an individual section's appearance, and its `.tsx` file for text or behavior.
