---
name: Editorial Monolith
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474a'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777b'
  outline-variant: '#c5c6ca'
  surface-tint: '#5b5f63'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#181c20'
  on-primary-container: '#808489'
  inverse-primary: '#c3c7cc'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#221a14'
  on-tertiary-container: '#8e8179'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e3e8'
  primary-fixed-dim: '#c3c7cc'
  on-primary-fixed: '#181c20'
  on-primary-fixed-variant: '#43474c'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#f0dfd5'
  tertiary-fixed-dim: '#d3c4ba'
  on-tertiary-fixed: '#221a14'
  on-tertiary-fixed-variant: '#4f453d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.1em
spacing:
  gutter: 2rem
  margin: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style
The design system channels an uncompromising, high-end editorial and lifestyle aesthetic rooted in modernist print publishing, architectural purity, and contemplative travel. It merges the tactile elegance of high-production print monographs with responsive digital interaction.

The target audience consists of design-literate readers, modern travelers, writers, and cultural purveyors who appreciate considered negative space, deliberate typography, and unadorned surfaces. 

The aesthetic is characterized by:
- **Severe Minimalism:** High deliberate whitespace, absence of superfluous decoration, and sharp structural framing.
- **Asymmetric Composition:** Off-axis grid placement, overlapping hero paper elements, and balanced dual-tone section splitters (cool off-white vs. deep charcoal slate).
- **Architectural Framing:** Unrounded, razor-sharp visual bounds and crisp layout seams that mimic folded broadsheet newspapers and book bindings.

## Colors
The palette is hyper-disciplined and monochromatic, intentionally restrained to let curated photography and editorial titles command focus.

- **Primary (`#181c20`)**: Deep slate black. Used for high-impact titles, solid editorial panels, dark accent blocks, high-contrast navigation active states, and crisp borders.
- **Secondary (`#767676`)**: Warm muted gray. Applied to metadata, category eyebrows, date stamps, supporting body copy, and secondary pagination elements.
- **Neutral (`#f8f9fa`)**: Subtle cool off-white. Forms the foundational background canvas, offering soft contrast against pure white card surfaces and avoiding optical glare.
- **Pure White (`#ffffff`)**: Applied to elevated overlapping content placards, image card containers, and reverse typography on slate dark blocks.

Dark panels must be implemented as distinct graphic planes rather than an inverted global mode, creating dual-tone architectural weight on the canvas.

## Typography
The system enforces a dual-type hierarchy contrasting classical editorial serif titles with austere, modern sans-serif functional text.

- **Playfair Display** provides literary weight, historical depth, and narrative presence. It is reserved for article headlines, pull quotes, and major section intros.
- **Inter** ensures effortless legibility across extensive reading copy, operational UI, navigation items, and micro-metadata.

Eyebrow labels (such as publishing dates and article categories) are set in uppercase using `label-md` or `label-sm` with deliberate tracking (`0.08em` to `0.1em`) to replicate refined editorial mastheads.

## Layout & Spacing
The layout follows an asymmetrical 12-column editorial grid structured with broad margins and rhythmic vertical cadence.

### Grid & Composition
- **Desktop (12 Columns):** Content container constrained to 1320px with standard `margin` of `4rem` (or full-bleed split panes). Gutters maintain a spacious `2rem` to isolate independent textual columns.
- **Asymmetric Overlays:** Hero displays use staggered overlapping zones where a primary media card extends across columns 5 through 12, while the textual placard is anchored across columns 2 through 6, layering over the image by 20–30% of its width.
- **Dual-Pane Backgrounds:** Sections frequently employ geometric split backgrounds (e.g., 60% cool off-white canvas, 40% deep slate backdrop) providing spatial balance behind floating photography.

### Responsive Behavior
- **Tablet (8 Columns):** Margins reduce to `2.5rem`, and overlapping elements transition into tighter offsets or stacked configurations with reduced negative margins.
- **Mobile (4 Columns):** Margins compress to `1.25rem` (`gutter`: `1rem`). Overlaps flatten into sequential vertical flows: media full-width followed by zero-offset content blocks.

## Elevation & Depth
Depth is produced through physical paper stratification rather than dramatic drop shadows.

- **Paper Layers:** Elevation is articulated by placing stark white `#ffffff` cards above `#f8f9fa` neutral grounds or against `#181c20` dark planes.
- **Subtle Ambient Lift:** Where cards overlap imagery or dark backgrounds, employ an ultra-diffused, barely perceptible shadow: `0 12px 32px -4px rgba(24, 28, 32, 0.05), 0 4px 12px -2px rgba(24, 28, 32, 0.03)`.
- **Zero-Shadow Architectural Insets:** Interactive tags overlaid directly on images (such as article headline ribbons) do not use drop shadows. They rely purely on solid primary fill (`#181c20`) with absolute geometric alignment.
- **Tactile Overlap:** Visual hierarchy is governed by z-index stacking: 
  - Base layer (0): Canvas and split layout blocks.
  - Media layer (1): Photography and full-bleed image frames.
  - Placard layer (2): Editorial white content modules.
  - Floating controls (3): Pagination pills, carousel arrows, and fixed headers.

## Shapes
The shape language is strictly **Sharp (0)**. 

- All structural elements—including cards, image containers, input fields, and article ribbons—must feature raw 0px corners (`border-radius: 0px`).
- Circular geometry is strictly reserved for standalone floating circular action controls (e.g., carousel navigation arrows) to create high-contrast geometric dialogues against the rectilinear grid.
- Dividers and frames use razor-thin 1px borders without bevels or soft transitions.

## Components

### Buttons & Action Links
- **Primary Editorial Links:** Clean inline text links styled with an appended directional glyph (`→`). Hover transitions translate the arrow by `+4px` horizontally. Font weight is `500` in Inter with a hairline bottom border.
- **Circular Icon Navigators:** 44px × 44px pure white or off-white floating circles containing 14px directional icons. Outlined with a hairline border (`rgba(24, 28, 32, 0.08)`) with minimal ambient lift.

### Cards & Editorial Modules
- **Overlapping Placard Card:** Pure `#ffffff` background with generous internal padding (`space-xl`), sharp 0px corners, containing a tracked date label, large serif headline, and inline action link.
- **Grid Post Card:** Vertical column assembly featuring an unrounded image wrapper (`aspect-ratio: 16/10`), an overlapping dark banner block (`#181c20`) holding the headline in reverse white serif, followed by excerpted sans-serif reading copy below.

### Navigation & Headers
- **Minimalist Top Bar:** Clean horizontal line-up featuring a dark monogram brand block, right-aligned sparse navigation links in `label-md` uppercase, and generous vertical padding (`space-lg`).
- **Pagination Indicators:** Fraction format (e.g., `1 / 3`) set in `body-sm` using the secondary neutral tone, placed directly inside photographic frames or aligned with top card borders.

### Input Fields & Controls
- **Text Inputs:** Sharp 0px boxes with 1px border (`#767676` or light gray border in rest state; `#181c20` when focused). Background matches canvas. No floating labels; clean uppercase placeholders in `label-sm`.
- **Checkboxes & Radios:** Sharp square checkboxes (0px radius) with solid `#181c20` fills on active selection.