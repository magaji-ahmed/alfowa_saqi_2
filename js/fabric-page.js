(() => {
  const root = document.getElementById("fabric-detail");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("fabric") || SITE_DATA.fabrics[0]?.slug;
  const fabric = SITE_DATA.fabrics.find(f => f.slug === slug) || SITE_DATA.fabrics[0];

  if (!fabric) {
    root.innerHTML = `<section class="page-hero"><div class="container narrow"><h1>Fabric not found.</h1><a class="text-link" href="fabrics.html">Back to fabrics →</a></div></section>`;
    return;
  }

  document.title = `${fabric.name} — Maison Fabrics`;

  root.innerHTML = `
    <section class="fabric-detail-hero">
      <div class="container detail-hero-grid">
        <div>
          <a class="back-link" href="fabrics.html">← All fabrics</a>
          <span class="eyebrow">CUSTOM FABRIC</span>
          <h1>${fabric.name}</h1>
          <p class="lead">${fabric.overview}</p>
          <div class="price-block"><span>Starting price</span><strong>${fabric.price}</strong></div>
          <div class="hero-actions">
            <a class="btn btn-primary" data-contact="whatsapp" href="#">Ask about this fabric</a>
            <a class="btn btn-outline" data-contact="instagram" href="#">Instagram</a>
          </div>
        </div>
        <div class="detail-hero-image ${fabric.heroClass}"><span>${fabric.name}</span></div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <div class="section-heading">
          <div><span class="eyebrow">PRODUCTION</span><h2>How this fabric is made</h2></div>
          <p class="heading-note">The exact process can vary with the specification.</p>
        </div>
        <div class="process-grid">
          ${fabric.process.map(step => `<article class="process-card"><span>${step[0]}</span><h3>${step[1]}</h3><p>${step[2]}</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">THREADS</span>
          <h2>What goes into the cloth.</h2>
          <p>Thread composition is one of the variables we can discuss and adapt to the intended use, feel and finish.</p>
        </div>
        <div class="thread-list">
          ${fabric.threads.map((t, i) => `
            <article class="thread-item">
              <span class="swatch swatch-${(i % 4) + 1}"></span>
              <div><h3>${t.name}</h3><strong>${t.material}</strong><p>${t.note}</p></div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <div class="section-heading"><div><span class="eyebrow">EXAMPLES</span><h2>Finished pieces & texture</h2></div></div>
        <div class="gallery-grid">
          ${fabric.gallery.map(g => `<div class="gallery-item ${g.className}"><span>${g.label}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section cta-band">
      <div class="container cta-inner">
        <div><span class="eyebrow">INTERESTED IN ${fabric.name.toUpperCase()}?</span><h2>Let's discuss your specification.</h2><p>Ask about available colours, quantities, customisation, lead time and current pricing.</p></div>
        <div class="hero-actions">
          <a class="btn btn-gold" data-contact="whatsapp" href="#">WhatsApp us</a>
          <a class="btn btn-light" data-contact="instagram" href="#">Instagram</a>
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll("[data-contact]").forEach(el => {
    const type = el.dataset.contact;
    if (SITE_DATA.contact[type]) el.href = SITE_DATA.contact[type];
    el.target = "_blank";
    el.rel = "noopener";
  });
})();
