---
name: SidePlay
description: Sports and play gear shop laid out as its own display wall, where real products hang on red hooks over white pegboard and every order is one pre-written WhatsApp message.
colors:
  signal-red: "#e3161b"
  red-deep: "#b70f14"
  red-ink: "#c8101a"
  pegboard: "#f2f2f3"
  peg-hole: "#cdcdd1"
  paper: "#ffffff"
  rule: "#e4e4e6"
  ink: "#111113"
  ink-2: "#55565c"
  ink-3: "#6b6c72"
typography:
  display:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.2rem, 4.4vw, 3.8rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "0"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "clamp(2.1rem, 2.95vw, 3.3rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "0"
    fontVariation: "\"wdth\" 100"
  price-tag:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0"
    fontVariation: "\"wdth\" 110"
  title:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1.04rem"
    fontWeight: 800
    lineHeight: 1.2
  body:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Arial Narrow, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "\"wdth\" 90"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.74rem"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  tag: "5px"
  control: "8px"
  sign: "10px"
  card: "12px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 3vw, 44px)"
  max: "1520px"
  peg-pitch: "16px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  swing-tag:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper}"
    typography: "{typography.price-tag}"
    rounded: "{rounded.tag}"
    padding: "22px 9px 14px"
  hanging-sign:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper}"
    typography: "{typography.headline}"
    rounded: "{rounded.sign}"
  aisle-sign:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "10px 24px 10px 10px"
  aisle-sign-hover:
    backgroundColor: "{colors.red-deep}"
  product-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
  filter-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  filter-chip-active:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.paper}"
  input-search:
    backgroundColor: "{colors.pegboard}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    height: "44px"
---

# Design System: SidePlay

## Overview

**Creative North Star: "The Shop Wall"**

The site is SidePlay's own display wall. White perforated pegboard is the ground; real products, cut out from the catalog photos, hang on red hooks; every price sits on a red swing tag tied to the item; signs hang from the wall and point down the aisles. The visitor is standing in front of the wall, not looking at a banner about a shop.

The palette is red and white, with black held to small accents: the logo plate, ink, the close button, focus rings. Type is one family, Archivo, pushed to heavy italic uppercase for anything that would be painted on a sign or tag, and set plainly for reading. Depth comes only from things hanging over the board: soft contact shadows and drop shadows under hooks and cut-outs. Nothing sits on a dark ground.

Motion is physical and belongs to the hang. Items drop onto their hooks and swing out, damped, around the hook point; brushing the pointer across an item swings it in that direction; tags swing a beat behind the item; counts flip when filters change. Under reduced motion everything hangs still.

**Key Characteristics:**
- White pegboard (16px hole pitch) and white paper as the only grounds.
- Signal red carries every hook, tag, sign, button and the footer.
- Black is a small accent, never a surface larger than a logo plate or a close button.
- Archivo alone: heavy italic uppercase for sign lettering, regular for reading; mono only for item codes and the order message.
- Every product is hung: hook above, item rotating from its top-centre, tag at a fixed corner.
- Swing physics is the signature interaction and is switched off entirely under reduced motion.

## Colors

A red-and-white shop palette: one saturated signal red at full strength on hardware and signage, cool near-whites for the wall, and a near-black used sparingly.

### Primary
- **Signal Red** (#e3161b): the hardware and signage colour. Hooks, swing tags, the hanging hero sign, aisle chevrons, primary and WhatsApp buttons, active filter chips, the hanging rail, the footer ground, selection and scrollbar thumb. White text on it passes AA (about 4.8:1).
- **Deep Red** (#b70f14): the pressed/hover state of every red surface (buttons, aisle signs, WhatsApp pill), and the hook colour on the how-to rail.
- **Red Ink** (#c8101a): red used as text on white: section titles over paper, poster captions, the live result count. Never used as a fill.

### Neutral
- **Pegboard** (#f2f2f3): the wall face behind hanging products (first viewport, product sheet header) and the fill for search fields, quantity steppers and the message header.
- **Peg Hole** (#cdcdd1): the hole tone of the pegboard grid.
- **Paper** (#ffffff): page body, top bar, product cards, poster frames, step tags, the product sheet.
- **Rule** (#e4e4e6): 1px card borders and dividers, 2px chip and stepper strokes.
- **Ink** (#111113): body text, the logo plate, the sheet close button, outline-button stroke, focus rings.
- **Ink 2** (#55565c): secondary text: brands, specs, counts, captions.
- **Ink 3** (#6b6c72): tertiary text: item codes, spec labels, placeholders, field icons.

### Named Rules
**The Small Black Rule.** Black appears only as small accents: the logo plate, text, the close button, the outline-button stroke and focus rings. No black section, band or card ground.

**The Red Is Hardware Rule.** Red fills belong to things that physically hang or are pressed: hooks, tags, signs, rails, buttons, chips. Red as text uses Red Ink (#c8101a), never Signal Red on white body copy.

**The No Dark Ground Rule.** Every surface is pegboard, paper, or signal red. There is no dark mode and no dark hero.

## Typography

**Display Font:** Archivo variable (with Arial Narrow, sans-serif)
**Body Font:** Archivo variable (with Arial Narrow, sans-serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace), item codes and the WhatsApp message preview only

**Character:** One grotesque doing two jobs. Pushed wide (wdth 100 to 112), weight 900, italic and uppercase, it reads as lettering painted on a shop sign or punched on a price tag; at weight 400 and normal width it is a plain, legible catalogue voice.

### Hierarchy
- **Display** (900 italic uppercase, wdth 112, clamp(2.2rem, 4.4vw, 3.8rem), line-height 0.94, word-spacing 0.12em): section titles ("The shop", "Pick your game."). Red Ink on paper.
- **Headline** (900 italic uppercase, wdth 100, clamp(2.1rem, 2.95vw, 3.3rem), line-height 0.98): lettering on the hanging hero sign, white on red. Product-sheet name uses the same voice at clamp(1.6rem, 4vw, 2.1rem).
- **Price Tag** (900 italic, wdth 110, 1.3rem on the wall, 1.15rem on cards, 1.6rem in the sheet, line-height 1): prices on swing tags. The no-price fallback "Price on WhatsApp" drops to 800 upright at 0.72rem.
- **Title** (800, 1.04rem, line-height 1.2): product names on cards.
- **Body** (400, 1rem, line-height 1.5): running text; how-to copy at 1.15rem capped at 34em.
- **Label** (800 italic uppercase, wdth 90 to 92, 0.82 to 0.9rem): nav links, aisle signs, filter chips, footer headings. Condensed so long department names fit a sign.
- **Code** (JetBrains Mono 500, 0.74rem): item codes on cards and in the spec list; the order message preview at 0.86rem/1.55.

### Named Rules
**The Sign Lettering Rule.** Anything that would be painted on a sign or tag is Archivo 900 italic uppercase with letter-spacing 0. Reading text is never italic.

**The Mono Is Paperwork Rule.** JetBrains Mono appears only on item codes and the outgoing WhatsApp message. Never on headings, prices or labels.

**The Tabular Phone Rule.** Phone numbers and live counts use tabular numerals so digits never jitter.

## Layout

The page is a sequence of walls and shop floors. The first viewport is a full-height pegboard wall (min-height 100svh minus the 72px bar) on a five-column grid (1fr .62fr .95fr 1.1fr 1.25fr): the two largest products hang full-height in the outer columns, the hero sign spans the middle three columns at the top, and smaller products hang beneath it. A row of seven aisle chevrons closes the wall.

Below, content sits in a 1520px max container with a fluid gutter (clamp(16px, 3vw, 44px)). The shop is an auto-fill grid of cards (min 236px, gap clamp(14px, 1.6vw, 22px)) under a sticky control bar that docks beneath the sticky top bar. Posters hang in a seven-across row; the how-to section is two columns with three step tags hanging from a red rail. Section padding runs clamp(56px to 72px, 8 to 9vw, 110px to 130px).

At 1000px and below the wall turns into a horizontal, snap-scrolled rail of hung products under a full-width sign; aisles and posters also become snap rails. At 640px the bar shrinks to 62px, the card grid goes two-up with specs hidden, the how-to steps stack, the product sheet becomes a bottom sheet, and a round red WhatsApp button floats bottom right once the hero search leaves view.

## Elevation & Depth

Depth is physical overlap: things hang in front of the wall and cast soft contact shadows onto it. There are no glows, no layered card stacks and no hard offset shadows. Hooks and cut-out products use `drop-shadow` filters so the shadow follows the silhouette; flat hung objects (signs, tags, step tags, poster captions) use a short, negatively spread box shadow that lands just below them.

### Shadow Vocabulary
- **Contact** (`box-shadow: 0 18px 22px -14px rgba(17,17,19,.28)`): signs, poster captions and step tags hanging against the wall.
- **Hook** (`filter: drop-shadow(3px 5px 2px rgba(17,17,19,.28))`): the red hook, scaled down (2px 3px 1.5px) on cards.
- **Cut-out** (`filter: drop-shadow(0 16px 14px rgba(17,17,19,.2))`): hero products hanging on the wall.
- **Tag** (`box-shadow: 0 8px 12px -8px rgba(17,17,19,.45)`): the swing tag.
- **Card lift** (`box-shadow: 0 18px 30px -22px rgba(17,17,19,.45)`): product card on hover only.
- **Sheet** (`box-shadow: -30px 0 80px rgba(17,17,19,.25)`): the product sheet over a 40% ink backdrop.

### Named Rules
**The Hung Not Floating Rule.** A shadow exists only because something hangs in front of the wall or is lifted by the pointer. Shadows sit below their object with negative spread; nothing hovers in a halo.

## Shapes

Gently rounded, hardware-like forms. Tags have a 5px top and 7px bottom radius with a punched hole and a short grey string; buttons and aisle signs 8px; the hero sign, fields and the WhatsApp pill 10px; product cards 12px; filter and view chips are full pills. Aisle signs are chevrons, cut by a clip-path that points 20px to the right. Hooks are a single custom SVG J-hook; the poster hook is a 14px red disc. Borders are 1px Rule on cards and dividers, 2px on chips, steppers and step tags (red on step tags), and a 2px red top rule on the spec list.

## Components

### Buttons
Solid, heavy and pressable.
- **Shape:** gently rounded (8px), min-height 48px, 56px for the large size.
- **Primary:** Signal Red with white 800-weight text, 0 22px padding, optional inline SVG icon at 1.2em.
- **Hover / Focus:** hover deepens to Deep Red; active nudges down 1px; focus is a 3px Ink outline offset 3px.
- **Outline:** Paper with a 2px inset Ink stroke; hover inverts to Ink with white text.
- **WhatsApp pill (top bar):** Signal Red, 10px radius, 48px tall, 800 italic text with the WhatsApp glyph and the tabular phone number.

### Chips
- **Style:** full pill, 40px tall, Paper with a 2px Rule stroke, 800 italic uppercase 0.82rem.
- **State:** hover turns the stroke red; pressed fills Signal Red with white text. View pickers in the sheet use the same pill at 44px, upright 700 capitalised.

### Cards / Containers
A product card is a small piece of wall with the item hung on it.
- **Corner Style:** 12px.
- **Background:** Paper; the upper 4:3 area holds a small hook and the product (multiply blend) with its swing tag top right.
- **Shadow Strategy:** flat at rest; Card lift on hover with a slightly darker border.
- **Border:** 1px Rule.
- **Internal Padding:** 12px 16px 16px (10px 12px 12px on phones). Body reads code (mono), name, brand, specs, then a full-width red Order button pinned to the bottom.

### Inputs / Fields
- **Style:** Pegboard fill, 2px transparent stroke, 10px radius, 44px tall, leading search icon in Ink 3. The hero finder is a white field inside the red sign with an attached red Find button.
- **Focus:** the stroke turns Ink (shop search); the finder gets a 3px Ink outline offset 3px.
- **Quantity stepper:** 2px Rule frame, 10px radius, 44px Pegboard buttons that turn red on hover, tabular count.

### Navigation
- **Top bar:** white, sticky, 72px, 1px Rule bottom border; logo on a black plate left; department links in 800 italic uppercase condensed (wdth 90); WhatsApp pill right.
- **Hover / current:** a 3px red underline grows from the left. Links hide below 1240px; aisle signs carry department navigation.

### Swing Tag (signature)
The price, hung on the item. Signal Red, white 900 italic numerals, punched Pegboard hole at the top and a thin grey string, rotated 7deg from a pivot above its top edge. Always the same place per item, always the same facts. Items without a price carry "Price on WhatsApp" in a smaller upright tag.

### Hanging Sign and Aisle Signs
The hero sign hangs from two red hooks with Contact shadow and settles with a short damped swing on load. Aisle signs are red chevrons with a white line icon over the label; hover or current deepens to Deep Red and lifts 4px.

### Product Sheet
A right-side dialog (bottom sheet on phones) with a pegboard header where the item hangs and swings on open, a spec list under a 2px red rule, view and quantity pickers, and a live mono preview of the WhatsApp message that flashes faintly red as it updates, ending in a full-width red order button.

### Motion
- **Drop + swing:** items drop 46px onto hooks (0.8s, staggered 0.11s) then swing out damped over about 2s around the hook, easing `cubic-bezier(.37, 0, .63, 1)`.
- **Pointer swing:** pointer travel across an item swings it that way, amplitude clamped to plus or minus 9deg; not on touch.
- **Tag lag:** the tag swings 0.08s behind with a larger, longer arc.
- **Settle on view:** cards, posters and steps swing 3 to 6deg as they enter the viewport.
- **Count flip:** the result count flips on its X axis when filters change.
- **Reduced motion:** all animation and transitions off; everything hangs still.

## Do's and Don'ts

### Do:
- **Do** hang every product: red hook above, item pivoting from top-centre, swing tag at a fixed corner.
- **Do** keep grounds to pegboard (#f2f2f3 with the 16px hole grid), paper (#ffffff) or signal red (#e3161b).
- **Do** set sign and tag lettering in Archivo 900 italic uppercase, wdth 100 to 112, letter-spacing 0.
- **Do** use Red Ink (#c8101a) for red text on white and Deep Red (#b70f14) for every red hover.
- **Do** use the Contact shadow for anything hanging flat against the wall.
- **Do** use tabular numerals for phone numbers and counts.
- **Do** switch off every swing, drop, flip and transition under reduced motion.

### Don't:
- **Don't** put any section, hero or card on a dark ground; black stays at logo-plate size or smaller.
- **Don't** use a sports-shop photo banner in place of the wall of real, hung products.
- **Don't** use JetBrains Mono outside item codes and the order message.
- **Don't** set reading text in italic or uppercase.
- **Don't** use hard offset shadows or glows; shadows sit below their object with negative spread.
- **Don't** move a price off its swing tag or vary what a tag says from item to item.
