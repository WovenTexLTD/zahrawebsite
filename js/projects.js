/* ============================================================
   ZAHRA INTERIOR ARCHITECTURE — Projects Data & Logic
   ============================================================ */

/* ── PROJECT DATA ─────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'vienna-altbau',
    title: 'ZA 001',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2024,
    scope: 'Full Interior Design & Renovation',
    status: 'Completed',
    coverImage: 'images/residential/apt-living-dining.jpg',
    coverAlt: 'Vienna Altbau apartment — open living and dining space with art-hung walls and warm chandelier',
    narrative: [
      'This third-floor apartment in Vienna\'s 4th district came to the studio with a familiar problem: a beautiful late-19th-century shell that had been subdivided and modernised in ways that worked against its proportions. Our task was to restore its spatial logic — reconnecting the reception rooms, reinstating original ceiling heights where possible, and introducing a material palette that felt at once contemporary and true to the building.',
      'The tonal language was built around warm plasterwork, pale oak, and aged brass — materials chosen for their ability to absorb and reflect the particular light that comes off Vienna\'s Ringstrasse buildings in the late afternoon. The client\'s collection of art gave us a reference point for colour and weight throughout.'
    ],
    images: [
      { src: 'images/residential/apt-living-dining.jpg', alt: 'Main living and dining space — art wall, modern chandelier, herringbone parquet', wide: true },
      { src: 'images/residential/apt-armchair.jpg',      alt: 'Sitting room — olive velvet armchair, large plant, herringbone floor' },
      { src: 'images/residential/apt-kitchen.jpg',       alt: 'Kitchen — dark island, walnut detail, marble fireplace beyond' },
      { src: 'images/residential/apt-bathroom.jpg',      alt: 'Bathroom — teal walls, subway tile, brass fixtures, ornate mirror' },
      { src: 'images/residential/apt-fireplace.jpg',     alt: 'Salon — ornate gold mirror over fireplace, warm wall sconces' }
    ]
  },
  {
    id: 'london-townhouse',
    title: 'ZA 002',
    category: 'Residential',
    location: 'London, United Kingdom',
    year: 2023,
    scope: 'Full Interior Design, FF&E',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-dining.png',
    coverAlt: 'Contemporary apartment — gold crescent pendant, round dining table, tall curtained windows',
    narrative: [
      'A Victorian terraced house in Islington, stripped back and rebuilt for a young family who wanted their home to feel calm without being cold. The brief was specific: warmth, but not rustic. Minimal, but not austere. A house that works hard — for children, for entertaining, for everyday life — without any of that effort being visible.',
      'Natural oak runs throughout the ground floor, continuing into a new rear extension that opens onto a south-facing garden. Upholstery is confined to a warm sandy linen; the only pattern in the house comes from the kitchen\'s handmade tile splashback, chosen by the client\'s eldest daughter during a visit to a Portuguese workshop.'
    ],
    images: [
      { src: 'images/residential/modern-apt-dining.png', alt: 'Dining room — gold crescent chandelier, round table, floor-length curtains', wide: true },
      { src: 'images/residential/modern-apt-living.png', alt: 'Living space connecting to dining — cream sofa, teal sideboard, warm lamp' },
      { src: 'images/residential/modern-apt-lounge.png', alt: 'Lounge — abstract art, sculpted sofa, globe pendant' },
      { src: 'images/residential/modern-apt-openplan.png', alt: 'Open plan living room — colourful artwork, garden doors, warm afternoon light' }
    ]
  },
  {
    id: 'beirut-retail',
    title: 'ZA 004',
    category: 'Commercial',
    location: 'Beirut, Lebanon',
    year: 2022,
    scope: 'Commercial Interior Design',
    status: 'Completed',
    coverImage: 'images/commercial/cigar-lounge.png',
    coverAlt: 'Boutique cigar lounge — leather seating, marble fireplace, walnut display shelves',
    narrative: [
      'A premium retail and lounge concept in Beirut, designed to serve both as a curated retail destination and a private members\' sitting room. The brief called for warmth and confidence — a space that felt as though it had been assembled gradually, over time, rather than installed all at once.',
      'The design is anchored by a walnut shelving system that wraps two walls floor-to-ceiling, a marble fireplace surround, and low leather seating arranged for conversation rather than transaction. Lighting is warm and directional, placing product in a flattering but unforced context.'
    ],
    images: [
      { src: 'images/commercial/cigar-lounge.png',        alt: 'Lounge — leather seating, marble fireplace, walnut display shelves', wide: true },
      { src: 'images/commercial/cigar-shop-shelves.png',  alt: 'Retail wall — floor-to-ceiling walnut shelving, track lighting' },
      { src: 'images/commercial/cigar-store-luxury.png',  alt: 'Luxury retail floor — dark lacquer, brass fittings, display counters' }
    ]
  },
  {
    id: 'zurich-retreat',
    title: 'ZA 003',
    category: 'Residential',
    location: 'Zurich, Switzerland',
    year: 2024,
    scope: 'Full Interior Design, Renovation & Landscaping Liaison',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-openplan.png',
    coverAlt: 'Open plan family living room — colourful artwork, garden terrace beyond, warm afternoon light',
    narrative: [
      'A lakeside house substantially reconfigured for a family of five. The original structure was well-positioned but poorly resolved — a series of low, dark rooms that missed the view they were built for. Working with the client\'s architect, we opened the plan entirely and designed the interiors around a single idea: maximum connection to the landscape and the changing quality of light.',
      'Materials were chosen for their ability to feel quiet and recede. Raw concrete, untreated oak, undyed wool — a palette that asks nothing of the eye and leaves all attention to the garden and water outside.'
    ],
    images: [
      { src: 'images/residential/modern-apt-openplan.png', alt: 'Main living space — open plan, artwork, garden doors', wide: true },
      { src: 'images/residential/modern-apt-living.png',   alt: 'Living zone — connected rooms, warm layered lighting' },
      { src: 'images/residential/modern-apt-lounge.png',   alt: 'Lounge corner — sculptural furniture, curated objects' }
    ]
  },
  {
    id: 'paris-penthouse',
    title: 'ZA 006',
    category: 'Residential',
    location: 'Paris, France',
    year: 2023,
    scope: 'Interior Design & Bespoke Furniture',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-lounge.png',
    coverAlt: 'Parisian apartment — abstract art, sculpted low sofa, globe pendant, herringbone parquet',
    narrative: [
      'A duplex penthouse for a writer and art collector, brought to us in near-original condition. The client wanted nothing superfluous — a home that supported work and contemplation above all else, with just enough space for books, objects, and light.',
      'We preserved every original element worth preserving: the herringbone oak parquet and curved plasterwork. The contemporary elements — a long walnut desk, bespoke storage running the full width of the library wall — were designed to feel as though they had always been there.'
    ],
    images: [
      { src: 'images/residential/modern-apt-lounge.png',  alt: 'Main room — abstract painting, sculpted sofa, globe pendant', wide: true },
      { src: 'images/residential/modern-apt-dining.png',  alt: 'Dining area — gold chandelier, round table, tall windows' },
      { src: 'images/residential/modern-apt-living.png',  alt: 'Living space — connected rooms, warm ambient light' }
    ]
  },
  {
    id: 'milan-showroom',
    title: 'ZA 005',
    category: 'Commercial',
    location: 'Milan, Italy',
    year: 2022,
    scope: 'Commercial Interior Design, Brand Environment',
    status: 'Completed',
    coverImage: 'images/commercial/inshades-store.png',
    coverAlt: 'Eyewear retail concept — curved white shell structure, full-height display, open atrium',
    narrative: [
      'A flagship retail concept designed to position the brand as an architectural destination within a major transit hub. The brief demanded visibility from a distance and intimacy on arrival — a difficult balance resolved through a curved white shell form that draws the eye and then encloses.',
      'Inside, display is organised as a continuous landscape rather than discrete shelving units. Product is at eye level throughout, and the structure itself acts as a light diffuser, softening the ambient brightness of the surrounding concourse into something more considered.'
    ],
    images: [
      { src: 'images/commercial/inshades-store.png',        alt: 'Retail shell — curved white structure, full-height display, open atrium', wide: true },
      { src: 'images/commercial/la-casa-habano-kiosk.png',  alt: 'Kiosk concept — premium retail pod, airport environment' }
    ]
  },
  {
    id: 'lisbon-villa',
    title: 'ZA 007',
    category: 'Residential',
    location: 'Lisbon, Portugal',
    year: 2023,
    scope: 'Interior Design, Conservation Advisory',
    status: 'Completed',
    coverImage: 'images/residential/apt-armchair.jpg',
    coverAlt: 'Sitting room — olive velvet armchair, tall plant, herringbone floor, period mouldings',
    narrative: [
      'A 19th-century villa requiring sympathetic renovation and a new interior language that respected the original architecture without rendering the house museum-like. The client — a collector of contemporary art — needed something more alive than a restoration.',
      'We worked with the original architectural features as the fixed backdrop, introducing contemporary furniture and lighting in conversation with these elements rather than in opposition. The art collection became the connective tissue: each room is designed around a specific artwork, allowing the collection to structure the spatial experience.'
    ],
    images: [
      { src: 'images/residential/apt-armchair.jpg',  alt: 'Sitting room — statement chair, large plant, herringbone parquet', wide: true },
      { src: 'images/residential/apt-kitchen.jpg',   alt: 'Kitchen — island, walnut cabinetry, open to reception' },
      { src: 'images/residential/apt-bathroom.jpg',  alt: 'Bathroom — teal walls, ornate mirror, brass fittings' }
    ]
  },
  {
    id: 'marseille-coastal',
    title: 'ZA 008',
    category: 'Styling',
    location: 'Marseille, France',
    year: 2024,
    scope: 'Interior Styling & FF&E Refresh',
    status: 'Completed',
    coverImage: 'images/residential/modern-apt-living.png',
    coverAlt: 'Light-filled living space — cream sofa, teal accent, warm layered lighting',
    narrative: [
      'A seaside apartment owned by a couple as a summer base. The brief was a complete restyling without structural intervention — reimagining the space entirely through object selection, textiles, lighting, and art.',
      'We worked with the existing architecture and built a palette around what the light and setting demanded: warm neutrals, considered accent colour, and a small but carefully chosen collection of objects that reward closer attention.'
    ],
    images: [
      { src: 'images/residential/modern-apt-living.png',   alt: 'Living area — cream sofa, teal sideboard, warm lamp', wide: true },
      { src: 'images/residential/modern-apt-lounge.png',   alt: 'Lounge corner — art, sculpted furniture, pendants' },
      { src: 'images/residential/modern-apt-openplan.png', alt: 'Open plan — garden view, relaxed seating' }
    ]
  },
  {
    id: 'dubai-penthouse',
    title: 'ZA 009',
    category: 'Residential',
    location: 'Dubai, UAE',
    year: 2023,
    scope: 'Full Interior Design & Art Advisory',
    status: 'Completed',
    coverImage: 'images/commercial/cigar-store-luxury.png',
    coverAlt: 'Luxury interior — dark lacquer, brass accents, curated display cases',
    narrative: [
      'A full-floor penthouse designed for a client who travels extensively and wanted a home that felt simultaneously global and deeply personal. The collection of art and objects — gathered over fifteen years across multiple cities — was the starting point for everything.',
      'The design creates a sequence of moods across the floor plate: an entry that is dramatic and vertical, a living zone that opens to the skyline, and a more contained, intimate series of private rooms that feel as still and considered as anywhere else in the world at that altitude.'
    ],
    images: [
      { src: 'images/commercial/cigar-store-luxury.png',  alt: 'Main space — dark lacquer, brass fittings, curated displays', wide: true },
      { src: 'images/commercial/cigar-lounge.png',        alt: 'Lounge — leather seating, fireplace, walnut shelving' },
      { src: 'images/commercial/la-casa-habano-kiosk.png', alt: 'Entry kiosk concept — premium brand environment' }
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
