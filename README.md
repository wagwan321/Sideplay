# SidePlay website

Static site: no build step. Open `index.html` in a browser, or upload the whole folder to any static host (Netlify drop, Vercel, GitHub Pages, cPanel).

## What's where

| Path | What it is |
|---|---|
| `index.html` | The page (hero, posters, shelf/catalog, how-to-order, footer) |
| `assets/css/styles.css` | All styling (colour tokens at the top) |
| `assets/js/app.js` | Catalog, search, filters, product sheet, WhatsApp order messages |
| `assets/data/products.js` | **The catalog: 174 items, prices, specs** |
| `assets/products/` | Product photos (taken from the supplier price lists) |
| `assets/photos/` | Lifestyle photos (generated with Higgsfield) |
| `assets/wall/` | Cut-out product photos hanging on the homepage wall |
| `assets/brand/` | Logo crop and icons |

## Changing a price or product

Edit `assets/data/products.js`. Each item looks like:

```js
{"id":"B077","d":"basketball","n":"Adjustable stand, quick lift","b":"","p":525,"img":"assets/products/b077.webp", ...}
```

- `p` is the USD price. Use `null` to show "Price on WhatsApp".
- `d` is the department: `rackets`, `fitness`, `basketball`, `yard`, `tables`, `ride`, `outdoor`.
- `s` is the spec list shown on the label and the product sheet, `c` the colours (comma separated), `t` an age/size tag.

Department counts and "from $" prices on the homepage update automatically.

## WhatsApp number

Set in `assets/js/app.js` (`WA = "96171904725"`) and in the `wa.me` / `tel:` links in `index.html`.

## Still to confirm with the owner

- Shop address / opening hours / delivery areas (nothing is claimed on the site yet).
- Items listed with no price in the catalogs show "Price on WhatsApp": HA937C, HA816, HA965, HA717A yoga mat 1 cm, tennis balls (S610, X830), WS-100 squash balls.
- Some catalog prices were read from PDF tables whose columns were misaligned; worth a quick check: HEAD fitness page 3–4 (bands, power tubes, rollers, gym balls) and Haiyi basket rings (B039).
