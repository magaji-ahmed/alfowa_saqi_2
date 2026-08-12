(() => {
  const d = SITE_DATA;

  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <div class="container nav-wrap">
          <a class="brand" href="index.html"><span class="brand-mark">M</span><span>${d.brand.name}</span></a>
          <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false">☰</button>
          <nav class="nav-links" aria-label="Main navigation">
            <a href="index.html">Home</a>
            <a href="fabrics.html">Fabrics</a>
            <a href="order-process.html">Order process</a>
            <a href="about.html">About</a>
            <a class="nav-cta" data-contact="whatsapp" href="#">WhatsApp us</a>
          </nav>
        </div>
      </header>
    `;

    const toggle = header.querySelector(".nav-toggle");
    const nav = header.querySelector(".nav-links");
    toggle?.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <a class="brand brand-footer" href="index.html"><span class="brand-mark">M</span><span>${d.brand.name}</span></a>
            <p>Custom fabrics manufactured to order, with care from thread to finished cloth.</p>
          </div>
          <div>
            <span class="footer-label">Explore</span>
            <a href="fabrics.html">Fabrics</a>
            <a href="order-process.html">Order process</a>
            <a href="about.html">About</a>
          </div>
          <div>
            <span class="footer-label">Contact</span>
            <a data-contact="whatsapp" href="#">WhatsApp</a>
            <a data-contact="instagram" href="#">Instagram</a>
          </div>
        </div>
        <div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${d.brand.name}</span><span>Made to order.</span></div>
      </footer>
    `;
  }

  document.querySelectorAll("[data-contact]").forEach(el => {
    const type = el.dataset.contact;
    if (d.contact[type]) el.href = d.contact[type];
    if (type === "whatsapp") el.target = "_blank";
    if (type === "instagram") el.target = "_blank";
    el.rel = "noopener";
  });

  const card = (f) => `
    <a class="fabric-card" href="fabric.html?fabric=${encodeURIComponent(f.slug)}">
      <div class="fabric-image"><img src="${f.image}" alt="${f.name} fabric" loading="lazy"><span>View fabric</span></div>
      <div class="fabric-card-body">
        <span class="card-index">${String(d.fabrics.indexOf(f) + 1).padStart(2, "0")}</span>
        <h3>${f.name}</h3>
        <p>${f.shortDescription}</p>
        <span class="text-link">Explore <span>→</span></span>
      </div>
    </a>
  `;

  const featured = document.getElementById("featured-fabrics");
  if (featured) {
    featured.innerHTML = d.fabrics.filter(f => f.featured).slice(0, 3).map(card).join("");
  }

  const all = document.getElementById("all-fabrics");
  if (all) all.innerHTML = d.fabrics.map(card).join("");
})();
