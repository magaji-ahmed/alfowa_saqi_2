# Maison Fabrics — Static Marketing Website

A lean, framework-free website template for a custom fabric manufacturer.

## Recommended fabric architecture

This template uses **one reusable `fabric.html` page driven by `js/data.js`** rather than making a separate HTML file for every fabric.

A fabric is selected with a query string:

`fabric.html?fabric=royal-silk`

To add another fabric, add one object to `SITE_DATA.fabrics` in `js/data.js`. The overview grid automatically uses the same data.

### Why this approach?

- One detail-page layout to maintain.
- Add a fabric without duplicating HTML.
- Content is separated from presentation.
- Easy to extend with more fields later: colourways, MOQ, lead time, technical specs, FAQs, etc.
- Still works as a plain static site with no framework or build step.

If you eventually want individual clean URLs such as `/fabrics/royal-silk/`, you can move to static copies or a static-site generator later. For a no-build site, the query-string approach is the simplest.

## Contact links

Edit these two values in `js/data.js`:

```js
contact: {
  whatsapp: "https://wa.me/2348000000000",
  instagram: "https://instagram.com/yourhandle"
}
```

Every WhatsApp/Instagram CTA across the site reads from this single location.

## Adding a fabric

Copy an existing object in `SITE_DATA.fabrics`, change:

- `slug`
- `name`
- `shortDescription`
- `overview`
- `price`
- `heroClass`
- `threads`
- `process`
- `gallery`
- `featured`

Then visit:

`fabric.html?fabric=your-new-slug`

## Images

The visual blocks currently use CSS-generated textile textures so the template works immediately without an image folder.

For the real site, replace these texture blocks with actual fabric photography. The easiest route is to add image URLs/paths to each fabric object and update the rendering in `js/site.js` and `js/fabric-page.js`.

## Run locally

Because there is no build step, you can open `index.html` directly in a browser.

For development, a simple local server is preferable:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Pages

- `index.html` — Home
- `fabrics.html` — Fabric overview
- `fabric.html?fabric=...` — Reusable fabric detail template
- `order-process.html` — Ordering process
- `about.html` — About
- `contact.html` — Contact
- `css/styles.css` — Global styling
- `js/data.js` — Fabric + contact content
- `js/site.js` — Shared header/footer and overview cards
- `js/fabric-page.js` — Detail page renderer
