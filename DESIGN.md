---
name: David's Notes
description: 경제학자 김동영의 블로그. 한 장의 사진과 한 편의 글, 차가운 회백 종이 위의 칼럼과 큐레이션.
colors:
  d-red: "#B91C1C"
  paper: "#E8E9E8"
  sheet: "#F4F5F4"
  ink: "#111827"
  ink-soft: "#374151"
  graphite: "#4B5563"
  selection-ink: "#16161A"
  rule-nav: "#BEBEB6"
  rule-footer: "#D4D5D2"
  legacy-ground: "#FBFBFA"
typography:
  page-en:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.5rem, 1.9rem + 2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  section-en:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.45rem + 0.9vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title-en:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  label-en:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  article-ko:
    fontFamily: "Noto Sans KR, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.35rem + 1.7vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  display-ko:
    fontFamily: "Noto Sans KR, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.4vw, 2.375rem)"
    fontWeight: 700
    lineHeight: 1.32
    letterSpacing: "-0.03em"
  title-ko:
    fontFamily: "Noto Sans KR, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "-0.02em"
  sub-ko:
    fontFamily: "Noto Sans KR, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Noto Sans KR, Source Sans 3, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.625
  nav:
    fontFamily: "Noto Sans KR, Source Sans 3, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    letterSpacing: "-0.01em"
  logo:
    fontFamily: "Playfair Display, serif"
    fontWeight: 900
rounded:
  cover: "8px"
  card: "16px"
  band: "24px"
  pill: "9999px"
spacing:
  gutter: "16px"
  gutter-lg: "32px"
  grid-gap: "32px"
  card-pad: "28px"
  hero-card-pad: "40px"
  section-gap: "96px"
  section-lead: "112px"
  frame: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.d-red}"
    textColor: "{colors.sheet}"
  link-arrow:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "8px 0"
  link-arrow-hover:
    textColor: "{colors.d-red}"
  card-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  hero-card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.hero-card-pad}"
    width: "34rem"
  band-meet-david:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.band}"
  story-tile-image:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.card}"
  nav-item:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    padding: "8px 0"
  nav-bar-paper:
    backgroundColor: "{colors.paper}"
    height: "80px"
  meta-line:
    textColor: "{colors.graphite}"
    typography: "{typography.label-en}"
---

# Design System: David's Notes

## Overview

**Creative North Star: "One Photograph, One Essay"**

The home opens on a single full-bleed photograph with one essay floating over it on a translucent sheet, then settles onto a cool grey-white proof paper where everything else sits in wide, quiet tiles. The model is a personal notebook with the confidence of a magazine cover, not a news portal: few things per screen, lots of air, and nothing that shouts except the photograph.

Depth comes from tone, not ornament. A paper ground carries lighter sheets one step up; the only real shadows sit under the hero card and under book covers, because those are objects lying on the paper. Type does the hierarchy work: Korean in Noto Sans KR bold and tidy, English names of pages and sections in Source Serif 4, and small tracked capitals for labels. Red belongs to the D. mark; everywhere else it only answers a pointer.

The world was chosen by the author (2026-09-27) as a Gates Notes-style composition mixed with the ground colour of a proofreading sheet. The "D." mark, the wordmark and the red end mark are fixed brand assets drawn in Playfair Display and change only with the author.

**Key Characteristics:**
- Cool grey paper ground (paper) with one-step-lighter sheets for cards, bands and the hero card.
- One full-bleed photograph per home, credited in the corner; a single translucent sheet card over it.
- English section and page names in Source Serif 4, each paired with a small Korean subtitle.
- Category and source sit in a meta line below the text ("LABEL · date"), never as a kicker above a heading.
- Red (D. red) reserved for the brand mark and hover states.
- 16px corners on every card and image tile; flat surfaces; one authored entrance animation.

## Colors

A near-monochrome cool grey system with a single brand red that is owned by the D. mark.

### Primary
- **D. Red** (d-red): the colour of the D. mark's dot, the NOTES dot in the wordmark, the article end mark, the blockquote rule, and the input caret. In the interface it appears only as a hover/active response (links, "전체 보기", "전문 읽기 →", the pill button's hover fill, footer links).

### Neutral
- **Proof Paper** (paper): the ground of the home page, the scrolled navigation bar, the open state of the home nav, and the footer.
- **Sheet** (sheet): cards, the Meet David band, empty image tiles, and the hero card (at 95% opacity over the photograph). Also the selection text colour.
- **Ink** (ink): headings, body emphasis, nav text, and the fill of the primary pill button. Also the dark D. stamp behind blockquotes.
- **Soft Ink** (ink-soft): the hero card excerpt.
- **Graphite** (graphite): excerpts, Korean subtitles, meta lines, footer text. This is the lightest text colour allowed on paper (about 6:1 on paper).
- **Selection Ink** (selection-ink): the ::selection background, paired with sheet text.
- **Nav Rule** (rule-nav) and **Footer Rule** (rule-footer): the single hairlines under the paper nav bar and above the footer.
- **Legacy Ground** (legacy-ground): the pre-migration ground still used by the site frame in `app/layout.tsx`, `body`, and every subpage (with white nav/mega-menu surfaces). Recorded as a known gap, not as a target for new surfaces.

### Named Rules
**The Red Belongs to D. Rule.** Red is the brand mark's colour. Outside the logo dot, end mark, blockquote rule and caret, it appears only as a hover or focus response, never as resting text, a label, or a fill.

**The Graphite Floor Rule.** No text on paper or sheet is lighter than graphite. Gray-500 and lighter fail 4.5:1 on paper.

## Typography

**Korean Font:** Noto Sans KR (400, 500, 700) with system-ui
**Latin Display Font:** Source Serif 4 (500, 600) with Georgia
**Label Font:** Source Sans 3 with system-ui
**Brand Font:** Playfair Display, for the "D." mark, the "David's" wordmark, the footer wordmark and the end mark only

**Character:** A tidy, upright Korean sans carries every Korean heading and body line; a warm text serif names things in English, the way a magazine names its sections. The two never compete, because each has its own job.

### Hierarchy
- **Page name, English** (page-en): top-of-page names on subpages (Books, On My Desk, Videos, About).
- **Article title, Korean** (article-ko): article page headlines.
- **Display, Korean** (display-ko): the hero card title; enlarged to 24-36px for the Meet David line.
- **Section name, English** (section-en): Latest, Meet David, On My Desk, Videos, Books; also mobile menu items at 28px.
- **Title, English** (title-en): English-language curated article titles (chosen automatically when a title has no Hangul).
- **Title, Korean** (title-ko): tile and card titles; 21px in Latest tiles, 17px under book covers.
- **Subtitle, Korean** (sub-ko): the small Korean subtitle beside each English section name.
- **Body** (body): excerpts at 15.2px with relaxed leading; 17px in the Meet David band and at sm+ in the hero card. Excerpts are clamped (2-4 lines) rather than truncated by hand.
- **Label** (label-en): uppercase, 12px, tracked 0.14em; used inside meta lines for category and source.
- **Nav** (nav): 17px medium English nav items.

### Named Rules
**The Two Tongues Rule.** Korean text is always Noto Sans KR; English names of pages, sections and English article titles are Source Serif 4 at 600. Never set a Korean headline in the serif, or an English section name in the sans.

**The Keep-All Rule.** `word-break: keep-all` with `overflow-wrap: break-word` is global. Korean words never break mid-word; headings also use `text-wrap: balance`.

**The Twelve Pixel Floor.** No text below 12px (0.75rem). The label-en size is the floor.

## Layout

The site frame is 1440px; content runs in a 1240px container with a 16px gutter on mobile and 32px from lg (1024px). The home hero deliberately breaks out of the frame to the full viewport width (author decision), sized 88svh on mobile and 92vh from md, clamped between 560px and 960px. The hero card sits bottom-left inside the 1240 container, max 34rem wide; the photo credit sits bottom-right in 12px white at 80%.

Below the hero the rhythm is generous: 112px above the first section, 96px between sections, 40px between a section head and its grid. Grids are 3 columns for Latest and On My Desk, 2 for Videos, 4 for Books (2 on mobile), with 32px gaps; everything collapses to one column below md (768px) except Books.

Section heads pair an English section name with a Korean subtitle on one baseline, and put a "전체 보기 →" link at the far right.

Photographs come from per-post frontmatter: `heroImage`, `heroCredit`, `heroAlt`, `heroFocus` (an object-position), falling back to `coverImage`. The current hero is a credited Unsplash placeholder awaiting the author's own photograph.

## Elevation & Depth

Flat by default, with tonal layering: paper at the bottom, sheet one step up. Shadows exist only where something physically lies on the surface.

### Shadow Vocabulary
- **Hero card lift** (`box-shadow: 0 24px 60px -20px rgba(0,0,0,0.5)`): the translucent sheet card floating over the photograph.
- **Book cover drop** (`box-shadow: 0 12px 30px -12px rgba(0,0,0,0.35)`): book covers on the Books shelf.
- **Nav on scroll** (Tailwind `shadow-sm`): the paper nav bar once the page scrolls past 50px.

### Named Rules
**The Objects-Only Shadow Rule.** Cards, bands and tiles are flat sheets. Only the hero card and book covers cast shadows.

## Shapes

Softly rounded rectangles throughout: 16px on cards, the hero card, image tiles and video frames; 24px on the wide Meet David band; 8px on book covers (they read as objects, not UI); full pills for the one filled button. The D. mark itself is a square with a 2px border and no radius. Hairlines are single 1px rules, used only under the nav bar and above the footer.

## Components

### Buttons
- **Shape:** full pill (9999px).
- **Primary:** ink fill, sheet text, 16px semibold, 14px x 28px, trailing arrow ("김동영 소개 →").
- **Hover / Focus:** fill shifts to D. red; colour transition only.
- **Arrow link (tertiary):** bold or semibold ink text with an 16-18px arrow, 8px vertical padding for target size; turns red on hover ("전문 읽기 →", "전체 보기 →").

### Cards / Containers
- **Corner Style:** 16px (band: 24px).
- **Background:** sheet on paper.
- **Shadow Strategy:** none (see Elevation).
- **Border:** none.
- **Internal Padding:** 28px on On My Desk cards; the band's text column 36px x 20px on mobile to 64px x 56px at md.
- **Content order:** title, excerpt, then the meta line pinned to the bottom.

### Meta line
Graphite 14px line: uppercase tracked label (category or source), a middle dot, then the date. Always below the text it describes.

### Navigation
- **Style:** fixed 80px bar. D. mark and wordmark at left; plain English items (Meet David, Focus, Books, On My Desk) centered with 56px spacing at 17px medium; search icon and menu button at right.
- **States:** active and hover draw a 2px underline in currentColor that scales in from the left (300ms).
- **Over the home hero:** transparent with a top-down dark gradient (black 55% to transparent), white text.
- **Home, scrolled or mobile menu open:** paper background with a nav-rule hairline.
- **Subpages:** white with a light grey hairline (legacy, see Colors).
- **Mega menus:** Meet David and Focus open on hover, click or keyboard; Escape closes and returns focus to the trigger; blur outside closes.
- **Mobile:** full-screen white overlay sliding from the right; closed state is `inert`. Items set in section-en/title-en.

### Hero card (signature)
A single sheet card at 95% opacity, bottom-left over the full-bleed photograph: display-ko title (underline on hover), one-sentence excerpt (2 lines on mobile), then a row with the meta line and "전문 읽기 →". Enters once: 700ms rise of 18px with fade, `cubic-bezier(0.22, 1, 0.36, 1)`, 150ms delay; static under reduced motion.

### Video facade
16px-rounded 16:9 frame showing the YouTube thumbnail with a 64px white round play button over a 20% black scrim (35% on hover). The nocookie iframe loads only after the click.

### Story tile
4:3 photograph in a 16px frame (decorative link, removed from tab order), then title-ko at 21px, a 3-line excerpt, and the meta line.

## Do's and Don'ts

### Do:
- **Do** put the home on paper and lift content onto sheet; never introduce a third ground tone.
- **Do** name sections in English Source Serif 4 and pair each with a small Korean subtitle in graphite.
- **Do** put category and source in the meta line below the text ("LABEL · date").
- **Do** give every photograph a `heroAlt` and, for any image not taken by the author, a visible `heroCredit`.
- **Do** keep text at 12px or larger and no lighter than graphite on paper or sheet.
- **Do** keep motion to the one hero entrance; under reduced motion keep only colour and opacity transitions.
- **Do** keep mega menus keyboard-operable with Escape, keep the skip link, and keep the closed mobile menu inert.

### Don't:
- **Don't** change the D. mark, wordmark, end mark or their Playfair Display face without the author.
- **Don't** use D. red for resting text, labels, kickers or fills; it is the brand's colour and a hover response only.
- **Don't** put a category or source kicker above a heading.
- **Don't** pack the home into a dense card grid or use generic space/abstract stock backgrounds; one photograph, one essay, then wide tiles.
- **Don't** add shadows to cards or bands.
- **Don't** show features that don't work yet (newsletter, join, unlisted social accounts); they stay behind the `lib/site.ts` flags.
