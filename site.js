const DISCORD_URL = "https://discord.gg/hj2T25vVq6";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "lore", label: "The City", href: "lore.html" },
  { id: "catalogue", label: "Catalogue", href: "catalogue.html" },
  { id: "staff", label: "Staff", href: "staff.html" },
  { id: "rules", label: "Rules", href: "rules.html" },
  { id: "media", label: "Media", href: "media.html" },
  { id: "join", label: "Join", href: "join.html" },
];

const CATALOG_ITEMS = [
  {
    id: "car-autobio",
    type: "car",
    featured: 1,
    name: "Obey Autobio",
    subtitle: "Luxury SUV",
    price: 19.99,
    image: "https://cdn.discordapp.com/attachments/1459537383686017184/1493276347223642303/IMG_2039.png?ex=69de6178&is=69dd0ff8&hm=3fcef742ae4d65ba75c7e4b5436dc14e7a3ea7cdab23678654b3abab021b7fff&",
    note: "Executive SUV for clean money runs, player convoys, and low-key arrivals.",
    delivery: "OneSync ready",
    tags: ["Widebody", "VIP", "Import"],
  },
  {
    id: "car-bentayga",
    type: "car",
    featured: 2,
    name: "Bentayga Mansory",
    subtitle: "Prestige SUV",
    price: 24.99,
    image: "https://cdn.discordapp.com/attachments/1459537383686017184/1493276347663913122/IMG_2040.png?ex=69de6179&is=69dd0ff9&hm=8674a0fed0d18dfa7ae2a177b1b627e59a3db3ab44ffacf7ef6a285f09f63072&",
    note: "A high-status city piece built for bosses, moguls, and armored-looking flex.",
    delivery: "Escrow configured",
    tags: ["Luxury", "Gang boss", "Premium"],
  },
  {
    id: "car-boss429",
    type: "car",
    featured: 3,
    name: "Boss 429",
    subtitle: "Muscle icon",
    price: 21.99,
    image: "https://cdn.discordapp.com/attachments/1459537383686017184/1493276348012171324/IMG_2041.png?ex=69de6179&is=69dd0ff9&hm=e29a63bfe9800868f6f14405b5684c36afcb624338352df088000269e5a5ef83&",
    note: "Raw American muscle for strip scenes, burnouts, and southside intimidation.",
    delivery: "Drag tuned",
    tags: ["Muscle", "Street race", "Classic"],
  },
  {
    id: "car-c8p1",
    type: "car",
    featured: 4,
    name: "Corvette C8 P1",
    subtitle: "Track-bred exotic",
    price: 29.99,
    image: "https://cdn.discordapp.com/attachments/1459537383686017184/1493276348716683345/IMG_2042.png?ex=69de6179&is=69dd0ff9&hm=a8f0e2b4fdc536d1b6134716aeb312f002fb3474d08fe857de9a126a8c15045d&",
    note: "Fast, clean, and made for Vinewood drops or illegal freeway pulls.",
    delivery: "Handling pack",
    tags: ["Supercar", "Showroom", "Police bait"],
  },
  {
    id: "car-tundra",
    type: "car",
    featured: 5,
    name: "2019 Tundra Crawler",
    subtitle: "Off-road truck",
    price: 18.99,
    image: "https://cdn.discordapp.com/attachments/1459537383686017184/1493276349241102606/IMG_2043.png?ex=69de6179&is=69dd0ff9&hm=0925671b8cdaa320e38d322d24318f50e2227ff1301ab915a61d3a8af4b4c80f&",
    note: "Perfect for Sandy runs, ranch compounds, and dirty cargo routes.",
    delivery: "Lifted setup",
    tags: ["Off-road", "Utility", "County"],
  },
  {
    id: "mlo-tower",
    type: "mlo",
    featured: 6,
    name: "Bloodline Tower Suite",
    subtitle: "Executive MLO",
    price: 49.99,
    image: "https://cdn.discordapp.com/attachments/1460455526503813253/1490075978071019723/image.png?ex=69de9a65&is=69dd48e5&hm=92b97af250e5cd21b4037c76c4a4bb26461aba58109049c716d9ecf42bc500f7&",
    note: "High-rise luxury interior for cartel bosses, boardroom roleplay, and elite socials.",
    delivery: "Shell + mapping",
    tags: ["Luxury", "HQ", "Whitelist"],
  },
  {
    id: "mlo-penthouse",
    type: "mlo",
    featured: 7,
    name: "Mirror Park Penthouse",
    subtitle: "Lifestyle MLO",
    price: 39.99,
    image: "https://cdn.discordapp.com/attachments/1460455526503813253/1490075978456891645/image.png?ex=69de9a65&is=69dd48e5&hm=0f7a3d155b0e2a4e05ade55caf3951c405f00ef6b66a752c1fab8d2629e78f3e&",
    note: "A cinematic apartment space for influencer stories, dirty money meetings, and clean fronts.",
    delivery: "Furnished",
    tags: ["Housing", "Scenic", "Social"],
  },
  {
    id: "mlo-traphouse",
    type: "mlo",
    featured: 8,
    name: "Davis Trap Compound",
    subtitle: "Gang MLO",
    price: 44.99,
    image: "https://cdn.discordapp.com/attachments/1460455526503813253/1490075978989436948/image.png?ex=69de9a65&is=69dd48e5&hm=ccbe2bf3fc5f8883dbb585a25494bb7e69b488bff970f021d03df7f0ec262d93&",
    note: "A hard southside base with stash space, strategy rooms, and street-level pressure.",
    delivery: "Gang pack",
    tags: ["Gang", "Southside", "Stash"],
  },
  {
    id: "mlo-nightclub",
    type: "mlo",
    featured: 9,
    name: "Vinewood Afterhours",
    subtitle: "Business MLO",
    price: 54.99,
    image: "https://cdn.discordapp.com/attachments/1460455526503813253/1490075979551604887/image.png?ex=69de9a65&is=69dd48e5&hm=96a8ce351d946b5d6cbcb1713a27447b36fc7a88e8e11421d15e605ecc048624&",
    note: "Nightclub floor, private office, and VIP backroom space for legal cash or dirty laundering.",
    delivery: "Business ready",
    tags: ["Nightlife", "Business", "VIP"],
  },
  {
    id: "mlo-warehouse",
    type: "mlo",
    featured: 10,
    name: "Portside Warehouse",
    subtitle: "Industrial MLO",
    price: 42.99,
    image: "https://cdn.discordapp.com/attachments/1460455526503813253/1490075980604117075/image.png?ex=69de9a66&is=69dd48e6&hm=d8a60148a608f07fa6affa8204e42a636f8e6ff243ed98b536c43e6ef74b7073&",
    note: "A heavy industrial scene for smuggling, chop lines, and long-form organized crime RP.",
    delivery: "Industrial props",
    tags: ["Warehouse", "Crime", "Docklands"],
  },
  {
    id: "mlo-ranch",
    type: "mlo",
    featured: 11,
    name: "Sandy County Ranch",
    subtitle: "County hideout",
    price: 36.99,
    image: "https://cdn.discordapp.com/attachments/1460455526503813253/1490075982126911568/image.png?ex=69de9a66&is=69dd48e6&hm=9a8351c1a79616f2bb20bba3998b3d7bd10e791f63ad5f2eebfd3cc5ff1aaaf8&",
    note: "A Blaine County property for outlaw crews, stash farming, and remote heat dumps.",
    delivery: "County atmosphere",
    tags: ["County", "Hideout", "Biker"],
  },
];

const state = {
  filter: "all",
  sort: "featured",
  search: "",
};

document.addEventListener("DOMContentLoaded", () => {
  injectAtmosphere();
  injectSiteChrome();
  bindGlobalEvents();
  hydrateCatalogueFromQuery();
  renderFeaturedGrids();
  renderCatalogue();
  setYear();
});

function injectAtmosphere() {
  if (document.querySelector(".blood-atmosphere")) return;

  document.body.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="blood-atmosphere" aria-hidden="true">
        <span class="blood-orb one"></span>
        <span class="blood-orb two"></span>
        <span class="blood-orb three"></span>
        <span class="blood-streak left"></span>
        <span class="blood-streak right"></span>
      </div>
    `,
  );
}

function injectSiteChrome() {
  const page = document.body.dataset.page || "";
  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");

  if (headerMount) {
    headerMount.outerHTML = `
      <header class="site-header">
        <div class="shell header-inner">
          <a class="brand-lockup" href="index.html" aria-label="Bloodline RP home">
            <span class="brand-kicker">Premium FiveM Roleplay</span>
            <span class="brand">Bloodline <span>RP</span></span>
          </a>
          <nav class="site-nav" aria-label="Primary">
            ${NAV_LINKS.map((link) => `<a class="${link.id === page ? "active" : ""}" href="${link.href}">${link.label}</a>`).join("")}
          </nav>
          <div class="nav-actions">
            <a class="status-chip" href="join.html">112 / 128 Online</a>
            <button class="nav-toggle" type="button" data-nav-toggle aria-label="Toggle navigation">Menu</button>
          </div>
        </div>
      </header>
    `;
  }

  if (footerMount) {
    footerMount.outerHTML = `
      <footer class="footer">
        <div class="shell footer-grid">
          <div>
            <h2 class="footer-brand">BLOODLINE <span>RP</span></h2>
            <p class="footer-note">A cinematic FiveM experience built around crime, consequence, business, and long-form character stories.</p>
          </div>
          <div class="footer-links">
            <strong>The Site</strong>
            ${NAV_LINKS.map((link) => `<a href="${link.href}">${link.label}</a>`).join("")}
          </div>
          <div class="footer-links">
            <strong>Connect</strong>
            <a href="${DISCORD_URL}" target="_blank" rel="noreferrer">Join Discord</a>
            <a href="join.html#purchase-request">Purchase Request</a>
            <span class="footer-note">Not affiliated with Rockstar Games, Take-Two, or FiveM official.</span>
            <span class="footer-note">&copy; <span data-year></span> Bloodline RP Community</span>
          </div>
        </div>
      </footer>
    `;
  }

  if (!document.querySelector(".lightbox")) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="lightbox" data-lightbox>
          <div class="lightbox-panel">
            <div class="lightbox-bar">
              <div>
                <span class="note-label">Media View</span>
                <strong data-lightbox-title>Bloodline RP</strong>
              </div>
              <button class="lightbox-close" type="button" data-lightbox-close aria-label="Close image">X</button>
            </div>
            <div class="lightbox-media">
              <img src="" alt="" data-lightbox-image>
            </div>
          </div>
        </div>
        <div class="toast" data-toast></div>
      `,
    );
  }
}

function bindGlobalEvents() {
  document.addEventListener("click", (event) => {
    const navToggle = event.target.closest("[data-nav-toggle]");
    if (navToggle) {
      document.body.classList.toggle("nav-open");
      return;
    }

    if (event.target.closest(".site-nav a")) {
      document.body.classList.remove("nav-open");
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      state.filter = filterButton.dataset.filter;
      syncFilterButtons();
      renderCatalogue();
      return;
    }

    const discordButton = event.target.closest("[data-open-discord]");
    if (discordButton) {
      window.open(DISCORD_URL, "_blank", "noopener");
      return;
    }

    const lightboxCard = event.target.closest("[data-lightbox-card]");
    if (lightboxCard) {
      openLightbox(lightboxCard.dataset.lightboxSrc, lightboxCard.dataset.lightboxTitle || "Bloodline RP");
      return;
    }

    if (event.target.matches("[data-lightbox].open")) {
      closeLightbox();
      return;
    }

    if (event.target.closest("[data-lightbox-close]")) {
      closeLightbox();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-catalog-search]")) {
      state.search = event.target.value.trim().toLowerCase();
      renderCatalogue();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-catalog-sort]")) {
      state.sort = event.target.value;
      renderCatalogue();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      document.body.classList.remove("nav-open");
    }
  });
}

function hydrateCatalogueFromQuery() {
  if (!document.querySelector("[data-catalog-grid]")) return;

  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");
  if (filter && ["all", "car", "mlo"].includes(filter)) {
    state.filter = filter;
  }

  syncFilterButtons();
}

function renderFeaturedGrids() {
  document.querySelectorAll("[data-featured-grid]").forEach((grid) => {
    const type = grid.dataset.featuredGrid;
    const limit = Number(grid.dataset.featuredLimit || 3);
    const items = CATALOG_ITEMS.filter((item) => item.type === type)
      .sort((left, right) => left.featured - right.featured)
      .slice(0, limit);

    grid.innerHTML = items.map((item) => buildProductCard(item)).join("");
  });
}

function renderCatalogue() {
  const grid = document.querySelector("[data-catalog-grid]");
  if (!grid) return;

  const countMount = document.querySelector("[data-catalog-count]");
  const items = getVisibleItems();
  grid.innerHTML = items.map((item) => buildProductCard(item)).join("");

  if (countMount) {
    countMount.textContent = `${items.length} items live`;
  }

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty-cart">
        <p>No entries match that filter. Try another category or clear the search.</p>
      </div>
    `;
  }
}

function getVisibleItems() {
  const filtered = CATALOG_ITEMS.filter((item) => {
    const matchesFilter = state.filter === "all" ? true : item.type === state.filter;
    const source = `${item.name} ${item.subtitle} ${item.note} ${item.tags.join(" ")}`.toLowerCase();
    const matchesSearch = state.search ? source.includes(state.search) : true;
    return matchesFilter && matchesSearch;
  });

  const sorted = [...filtered];
  if (state.sort === "price-low") {
    sorted.sort((left, right) => left.price - right.price);
  } else if (state.sort === "price-high") {
    sorted.sort((left, right) => right.price - left.price);
  } else if (state.sort === "name") {
    sorted.sort((left, right) => left.name.localeCompare(right.name));
  } else {
    sorted.sort((left, right) => left.featured - right.featured);
  }

  return sorted;
}

function buildProductCard(item) {
  return `
    <article class="product-card">
      <div class="product-media">
        <img src="${item.image}" alt="${escapeHTML(item.name)}">
      </div>
      <div class="product-body">
        <div class="product-top">
          <div>
            <p class="card-tag">${item.type === "car" ? "Vehicle" : "MLO"}</p>
            <h3 class="product-title">${escapeHTML(item.name)}</h3>
            <p class="product-subtitle">${escapeHTML(item.subtitle)}</p>
          </div>
          <div class="product-price">${formatMoney(item.price)}</div>
        </div>
        <div class="pill-row">
          ${item.tags.map((tag) => `<span class="meta-pill">${escapeHTML(tag)}</span>`).join("")}
        </div>
        <p class="product-note">${escapeHTML(item.note)}</p>
        <div class="product-footer">
          <small>${escapeHTML(item.delivery)}</small>
        </div>
      </div>
    </article>
  `;
}



function syncFilterButtons() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
}

function openLightbox(src, title) {
  const modal = document.querySelector("[data-lightbox]");
  const image = document.querySelector("[data-lightbox-image]");
  const titleMount = document.querySelector("[data-lightbox-title]");
  if (!modal || !image || !titleMount) return;

  image.src = src;
  image.alt = title;
  titleMount.textContent = title;
  modal.classList.add("open");
}

function closeLightbox() {
  document.querySelector("[data-lightbox]")?.classList.remove("open");
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setYear() {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(value);
  }

  return new Promise((resolve, reject) => {
    const area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.style.position = "absolute";
    area.style.left = "-9999px";
    document.body.append(area);
    area.select();

    try {
      const copied = document.execCommand("copy");
      area.remove();
      if (copied) {
        resolve();
      } else {
        reject(new Error("Copy command failed"));
      }
    } catch (error) {
      area.remove();
      reject(error);
    }
  });
}

function formatMoney(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
