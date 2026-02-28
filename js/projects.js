/* ============================================================
   ZAHRA INTERIOR ARCHITECTURE — Projects Data & Logic
   ============================================================ */

/* ── PROJECT DATA ─────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'vienna-altbau',
    title: 'ZA04817',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2024,
    scope: 'Full Interior Design & Renovation',
    status: 'Completed',
    coverImage: 'images/residential/apt-living-dining.jpg',
    coverAlt: 'Vienna apartment — open living and dining space with art-hung walls and warm chandelier',
    narrative: [
      'This third-floor apartment in Vienna\'s 4th district came to the studio with a familiar problem: a beautiful late-19th-century shell that had been subdivided and modernised in ways that worked against its proportions. Our task was to restore its spatial logic — reconnecting the reception rooms, reinstating original ceiling heights where possible, and introducing a material palette that felt at once contemporary and true to the building.',
      'The tonal language was built around warm plasterwork, pale oak, and aged brass — materials chosen for their ability to absorb and reflect the particular light that comes off Vienna\'s Ringstrasse buildings in the late afternoon. The client\'s collection of art gave us a reference point for colour and weight throughout.'
    ],
    images: [
      { src: 'images/residential/apt-living-dining.jpg', alt: 'Main living and dining space — art wall, chandelier, herringbone parquet', wide: true },
      { src: 'images/residential/apt-kitchen.jpg',       alt: 'Kitchen — dark island, walnut detail, marble fireplace beyond' },
      { src: 'images/residential/apt-bathroom.jpg',      alt: 'Bathroom — teal walls, subway tile, brass fixtures, ornate mirror' },
      { src: 'images/residential/apt-fireplace.jpg',     alt: 'Salon — gold mirror over fireplace, warm wall sconces' },
      { src: 'images/residential/apt-hallway.jpg',       alt: 'Hallway — floor-to-ceiling mirrors, herringbone parquet, crystal chandelier' },
      { src: 'images/residential/apt-bedroom.jpg',       alt: 'Bedroom suite — marble bathroom beyond glass door, pendant lighting, art above bed' }
    ]
  },
  {
    id: 'london-townhouse',
    title: 'ZA11293',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2023,
    scope: 'Full Interior Design, FF&E',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-dining.png',
    coverAlt: 'Contemporary apartment — gold crescent pendant, round dining table, tall curtained windows',
    narrative: [
      'A Vienna apartment brought to the studio for a complete interior overhaul. The brief was precise: warmth without weight, and a considered material language that would serve the family over time rather than follow a moment.',
      'The dining space is anchored by a statement pendant in formed brass, with floor-length curtains softening the tall windows characteristic of the building. Throughout, upholstery is confined to warm linen tones; colour arrives through art and carefully placed accent pieces.'
    ],
    images: [
      { src: 'images/residential/modern-apt-dining.png',    alt: 'Dining room — gold crescent chandelier, round table, floor-length curtains', wide: true },
      { src: 'images/residential/modern-apt-living.png',    alt: 'Living space — cream sofa, teal sideboard, warm lamp' },
      { src: 'images/residential/modern-apt-lounge.png',    alt: 'Lounge — abstract art, sculpted sofa, globe pendant' },
      { src: 'images/residential/modern-apt-openplan.png',  alt: 'Open plan living room — colourful artwork, garden doors, warm afternoon light' }
    ]
  },
  {
    id: 'zurich-retreat',
    title: 'ZA07634',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2024,
    scope: 'Full Interior Design & Renovation',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-openplan.png',
    coverAlt: 'Open plan living room — colourful artwork, garden doors, warm afternoon light',
    narrative: [
      'A Vienna apartment substantially reconfigured for a family, with the brief centred on openness and connection — between rooms, between inside and outside, and between the collection of contemporary art that animates every space.',
      'Materials were chosen for their ability to recede and allow the art to lead. The palette is quiet and deliberate: light oak, undyed textiles, and plaster tones that shift with the day. The result is a home that feels genuinely lived in rather than designed around.'
    ],
    images: [
      { src: 'images/residential/modern-apt-openplan.png', alt: 'Main living space — open plan, artwork, garden doors', wide: true },
      { src: 'images/residential/modern-apt-living.png',   alt: 'Living zone — connected rooms, warm layered lighting' },
      { src: 'images/residential/modern-apt-lounge.png',   alt: 'Lounge corner — sculptural furniture, curated objects' }
    ]
  },
  {
    id: 'beirut-retail',
    title: 'ZA09251',
    category: 'Commercial',
    location: 'Cyprus',
    year: 2022,
    scope: 'Commercial Interior Design',
    status: 'Completed',
    coverImage: 'images/commercial/cigar-lounge.png',
    coverAlt: 'Cigar lounge — leather seating, marble fireplace surround, walnut display shelving',
    narrative: [
      'A premium lounge concept in Cyprus, designed to function simultaneously as a retail destination and a members\' room. The brief called for warmth and confidence — a space that felt assembled over time rather than installed all at once.',
      'The design is anchored by walnut shelving wrapping two walls floor-to-ceiling, a marble fireplace surround with integrated display, and low leather seating arranged for conversation. Lighting is warm and directional throughout, placing product in a flattering but unforced context.'
    ],
    images: [
      { src: 'images/commercial/cigar-lounge.png', alt: 'Lounge — leather seating, marble fireplace, walnut display shelving', wide: true }
    ]
  },
  {
    id: 'milan-showroom',
    title: 'ZA15847',
    category: 'Commercial',
    location: 'Beirut, Lebanon',
    year: 2022,
    scope: 'Commercial Interior Design, Brand Environment',
    status: 'Completed',
    coverImage: 'images/commercial/inshades-store.png',
    coverAlt: 'Eyewear retail concept — curved white shell structure, full-height display, open atrium',
    narrative: [
      'A flagship retail concept in Beirut designed to position the brand as an architectural destination within a major transit hub. The brief demanded visibility from a distance and intimacy on arrival — a difficult balance resolved through a curved white shell form that draws the eye and then encloses.',
      'Inside, display is organised as a continuous landscape rather than discrete shelving units. Product is at eye level throughout, and the structure itself acts as a light diffuser, softening the ambient brightness of the surrounding concourse into something more considered.'
    ],
    images: [
      { src: 'images/commercial/inshades-store.png',       alt: 'Retail shell — curved white structure, full-height display, open atrium', wide: true },
      { src: 'images/commercial/la-casa-habano-kiosk.png', alt: 'Airport retail kiosk — premium brand environment' }
    ]
  },
  {
    id: 'paris-penthouse',
    title: 'ZA08362',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2023,
    scope: 'Interior Design & Bespoke Furniture',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-lounge.png',
    coverAlt: 'Vienna apartment — abstract art, sculpted low sofa, globe pendant',
    narrative: [
      'A Vienna apartment for an art collector, brought to us in near-original condition. The client wanted nothing superfluous — a home that supported work and contemplation above all else, with just enough space for books, objects, and light.',
      'We preserved every element worth preserving: the herringbone oak parquet and curved plasterwork. The contemporary additions — a long walnut desk, bespoke storage running the full width of the study wall — were designed to feel as though they had always been there.'
    ],
    images: [
      { src: 'images/residential/modern-apt-lounge.png', alt: 'Main room — abstract painting, sculpted sofa, globe pendant', wide: true },
      { src: 'images/residential/modern-apt-dining.png', alt: 'Dining area — gold chandelier, round table, tall windows' },
      { src: 'images/residential/modern-apt-living.png', alt: 'Living space — connected rooms, warm ambient light' }
    ]
  },
  {
    id: 'lisbon-villa',
    title: 'ZA13574',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2023,
    scope: 'Interior Design, Conservation Advisory',
    status: 'Completed',
    coverImage: 'images/residential/apt-armchair.jpg',
    coverAlt: 'Sitting room — olive velvet armchair, tall plant, herringbone floor, period mouldings',
    narrative: [
      'A Vienna apartment requiring sympathetic renovation and a new interior language that respected the original architecture without rendering the space museum-like. The client — a collector of contemporary art — needed something more alive than a restoration.',
      'We worked with the original architectural features as the fixed backdrop, introducing contemporary furniture and lighting in conversation with these elements rather than in opposition. The art collection became the connective tissue: each room is designed around a specific work, allowing the collection to structure the spatial experience.'
    ],
    images: [
      { src: 'images/residential/apt-armchair.jpg',  alt: 'Sitting room — statement chair, large plant, herringbone parquet', wide: true },
      { src: 'images/residential/apt-kitchen.jpg',   alt: 'Kitchen — island, walnut cabinetry, open to reception' },
      { src: 'images/residential/apt-bathroom.jpg',  alt: 'Bathroom — teal walls, ornate mirror, brass fittings' }
    ]
  },
  {
    id: 'marseille-coastal',
    title: 'ZA06219',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2024,
    scope: 'Interior Design & FF&E',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-living.png',
    coverAlt: 'Light-filled living space — cream sofa, teal accent, warm layered lighting',
    narrative: [
      'A Vienna apartment reimagined for a couple, with a brief focused entirely on atmosphere: warmth, ease, and a sense of considered selection rather than decoration.',
      'We worked with the existing architecture and built a palette around what the light and setting demanded: warm neutrals, considered accent colour, and a small but carefully chosen collection of objects that reward closer attention.'
    ],
    images: [
      { src: 'images/residential/modern-apt-living.png',   alt: 'Living area — cream sofa, teal sideboard, warm lamp', wide: true },
      { src: 'images/residential/modern-apt-lounge.png',   alt: 'Lounge corner — art, sculpted furniture, pendants' },
      { src: 'images/residential/modern-apt-openplan.png', alt: 'Open plan — relaxed seating, afternoon light' }
    ]
  },
  {
    id: 'dubai-penthouse',
    title: 'ZA12483',
    category: 'Commercial',
    location: 'Qatar',
    year: 2023,
    scope: 'Commercial Interior Design, Brand Environment',
    status: 'Completed',
    coverImage: 'images/commercial/cigar-store-luxury.png',
    coverAlt: 'Luxury retail — dark lacquer cabinetry, brass accents, curated display counters',
    narrative: [
      'A luxury retail concept in Qatar designed for a premium cigar brand, built around the idea of considered scarcity — the feeling that every object in the space has been selected with absolute intention.',
      'The design uses dark lacquered cabinetry, bespoke brass fittings, and a lighting strategy that places each product in its own pool of warm light. The result is a retail environment that functions more like a private gallery than a shop floor.'
    ],
    images: [
      { src: 'images/commercial/cigar-store-luxury.png',  alt: 'Retail floor — dark lacquer, brass fittings, display counters', wide: true },
      { src: 'images/commercial/cigar-shop-shelves.png',  alt: 'Product wall — floor-to-ceiling walnut shelving, track lighting' },
      { src: 'images/commercial/la-casa-habano-kiosk.png', alt: 'Airport kiosk — La Casa del Habano brand environment' }
    ]
  }
];

/* ── PROJECT FILTER (projects.html) ──────────────────────── */
(function initFilter() {
  const chips = document.querySelectorAll('.filter-chip');
  if (!chips.length) return;

  const cards    = document.querySelectorAll('.project-card[data-category]');
  const noResult = document.getElementById('noResults');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => {
        c.classList.remove('active');
        c.removeAttribute('aria-pressed');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');

      const filter = chip.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (noResult) {
        noResult.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
})();

/* ── PROJECT DETAIL PAGE ─────────────────────────────────── */
(function initProjectDetail() {
  const titleEl = document.getElementById('projectTitle');
  if (!titleEl) return;

  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id');
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    titleEl.textContent = 'Project not found.';
    return;
  }

  document.title = `${project.title} — Zahra Interior Architecture`;
  const metaDesc = document.getElementById('metaDesc');
  if (metaDesc) metaDesc.setAttribute('content', `${project.title} · ${project.location} · ${project.year} — Zahra Interior Architecture`);

  const cover = document.getElementById('projectCover');
  if (cover) { cover.src = project.coverImage; cover.alt = project.coverAlt; }

  const catEl = document.getElementById('projectCategory');
  if (catEl) catEl.textContent = project.category;
  titleEl.textContent = project.title;

  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setEl('projectLocation', project.location);
  setEl('projectYear',     project.year);
  setEl('projectScope',    project.scope);
  setEl('projectStatus',   project.status);

  const narrativeEl = document.getElementById('projectNarrative');
  if (narrativeEl && project.narrative) {
    narrativeEl.innerHTML = project.narrative.map((p) => `<p>${p}</p>`).join('');
  }

  const galleryEl = document.getElementById('projectGallery');
  if (galleryEl && project.images) {
    galleryEl.innerHTML = project.images
      .map((img) => `<img src="${img.src}" alt="${img.alt}" loading="lazy"${img.wide ? ' class="wide"' : ''}>`)
      .join('');
  }

  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const prev = PROJECTS[currentIndex - 1];
  const next = PROJECTS[currentIndex + 1];

  const prevLink  = document.getElementById('prevProject');
  const nextLink  = document.getElementById('nextProject');

  if (prevLink && prev) { prevLink.href = `project-detail.html?id=${prev.id}`; document.getElementById('prevProjectTitle').textContent = prev.title; }
  else if (prevLink) prevLink.style.visibility = 'hidden';

  if (nextLink && next) { nextLink.href = `project-detail.html?id=${next.id}`; document.getElementById('nextProjectTitle').textContent = next.title; }
  else if (nextLink) nextLink.style.visibility = 'hidden';
})();
