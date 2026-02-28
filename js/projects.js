/* ============================================================
   ZAHRA INTERIOR ARCHITECTURE — Projects Data & Logic
   ============================================================ */

/* ── PROJECT DATA ─────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 'vienna-altbau',
    title: 'Altbau Apartment Refresh',
    category: 'Residential',
    location: 'Vienna, Austria',
    year: 2024,
    scope: 'Full Interior Design & Renovation',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2a9ce0d4e?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Vienna Altbau apartment — warm plasterwork, period cornices, bespoke oak cabinetry',
    narrative: [
      'This third-floor apartment in Vienna's 4th district came to the studio with a familiar problem: a beautiful late-19th-century shell that had been subdivided and modernised in ways that worked against its proportions. Our task was to restore its spatial logic — reconnecting the reception rooms, reinstating original ceiling heights where possible, and introducing a material palette that felt at once contemporary and true to the building.',
      'The tonal language was built around warm limewash plaster, pale oak, and aged brass — materials chosen for their ability to absorb and reflect the particular light that comes off Vienna's Ringstrasse buildings in the late afternoon. The client's collection of Central European modernist ceramics gave us a reference point for colour and weight throughout.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1586023492125-27b2a9ce0d4e?w=1400&q=80&auto=format&fit=crop', alt: 'Main living space — limewash walls, oak floors, original cornice detail', wide: true },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop', alt: 'Reading alcove with bespoke built-in joinery' },
      { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80&auto=format&fit=crop', alt: 'Kitchen — honed stone surfaces, aged brass fittings' },
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop', alt: 'Master bedroom — linen drapery, soft warm palette' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop', alt: 'Detail — ceramics collection integrated into shelving' },
      { src: 'https://images.unsplash.com/photo-1616046229478-9901369be34c?w=900&q=80&auto=format&fit=crop', alt: 'Bathroom — terrazzo floor, curved plaster walls' }
    ]
  },
  {
    id: 'london-townhouse',
    title: 'Warm Minimal Townhouse',
    category: 'Residential',
    location: 'London, United Kingdom',
    year: 2023,
    scope: 'Full Interior Design, FF&E',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'London townhouse living room — natural oak, linen upholstery, layered warm tones',
    narrative: [
      'A Victorian terraced house in Islington, stripped back and rebuilt for a young family who wanted their home to feel calm without being cold. The brief was specific: warmth, but not rustic. Minimal, but not austere. A house that works hard — for children, for entertaining, for everyday life — without any of that effort being visible.',
      'Natural oak runs throughout the ground floor, continuing into a new rear extension that opens onto a south-facing garden. Upholstery is confined to a warm sandy linen; the only pattern in the house comes from the kitchen's handmade tile splashback, chosen by the client's eldest daughter during a visit to a Portuguese workshop.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1400&q=80&auto=format&fit=crop', alt: 'Open plan ground floor — oak, linen, south light', wide: true },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop', alt: 'Kitchen extension — handmade tiles, long dining table' },
      { src: 'https://images.unsplash.com/photo-1586023492125-27b2a9ce0d4e?w=900&q=80&auto=format&fit=crop', alt: 'Living room detail — layered textiles, reading lamp' },
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop', alt: 'Master bedroom — simple geometry, warm tones' },
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80&auto=format&fit=crop', alt: 'Hallway — original Victorian tiles restored' }
    ]
  },
  {
    id: 'beirut-retail',
    title: 'Boutique Retail Corner',
    category: 'Commercial',
    location: 'Beirut, Lebanon',
    year: 2022,
    scope: 'Commercial Interior Design',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Boutique retail interior in Beirut — warm brass accents, considered object display',
    narrative: [
      'A 120 m² retail unit in Saifi Village, designed for a Lebanese brand of handmade leather goods and home objects. The space needed to function as both shop and gallery — displaying product without feeling commercial, creating a destination rather than a transaction point.',
      'The design is built around a series of oak display plinths and wall-mounted brass rail systems that can be reconfigured seasonally. A single raw concrete ceiling bridges old and new, referencing Beirut's layered architectural history without sentimentality. Lighting was designed to be gallery-standard, warm but precise.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80&auto=format&fit=crop', alt: 'Main retail floor — oak plinths, brass rail system', wide: true },
      { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&auto=format&fit=crop', alt: 'Detail — product display on oak pedestal' },
      { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80&auto=format&fit=crop', alt: 'Window display — seasonal installation' },
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop', alt: 'Back room — archive and workshop space' }
    ]
  },
  {
    id: 'zurich-retreat',
    title: 'Lakeside Family Retreat',
    category: 'Residential',
    location: 'Zurich, Switzerland',
    year: 2024,
    scope: 'Full Interior Design, Renovation & Landscaping Liaison',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Lakeside retreat near Zurich — panoramic glazing, understated material palette',
    narrative: [
      'A 1970s lakeside house on the Zürichsee, substantially reconfigured for a family of five. The original structure was well-positioned but poorly resolved — a series of low, dark rooms that missed the view they were built for. Working with the client's architect, we opened the plan entirely, rebuilt the interior envelope, and designed the interiors around a single idea: maximum connection to the lake and the changing quality of Swiss alpine light.',
      'Materials were chosen for their ability to feel quiet and recede. Raw concrete, untreated oak, undyed wool — a palette that asks nothing of the eye and leaves all attention to the water outside.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80&auto=format&fit=crop', alt: 'Main living space — panoramic lake view, concrete and oak', wide: true },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop', alt: 'Kitchen — long worktop, view to garden' },
      { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80&auto=format&fit=crop', alt: 'Children's room — simple bunk, natural light' },
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop', alt: 'Study — library wall, lake glimpse' },
      { src: 'https://images.unsplash.com/photo-1616046229478-9901369be34c?w=900&q=80&auto=format&fit=crop', alt: 'Terrace — connection between inside and water' }
    ]
  },
  {
    id: 'paris-penthouse',
    title: 'Studio Penthouse',
    category: 'Residential',
    location: 'Paris, France',
    year: 2023,
    scope: 'Interior Design & Bespoke Furniture',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Parisian penthouse — layered textures, Haussmann bones, restrained contemporary palette',
    narrative: [
      'A 7th arrondissement duplex penthouse for a writer and art collector, brought to us in near-original Haussmann condition. The client wanted nothing superfluous — a home that supported work and contemplation above all else, with just enough space for books, objects, and light.',
      'We preserved every original element worth preserving: the herringbone oak parquet, the cast iron radiator covers, the curved plasterwork. The contemporary elements — a long walnut desk, bespoke storage running the full width of the library wall — were designed to feel as though they had always been there.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1400&q=80&auto=format&fit=crop', alt: 'Main living room — herringbone parquet, arched windows, plaster walls', wide: true },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop', alt: 'Library wall — full-height shelving, rolling ladder' },
      { src: 'https://images.unsplash.com/photo-1586023492125-27b2a9ce0d4e?w=900&q=80&auto=format&fit=crop', alt: 'Dining area — circular marble table, Haussmann cornices' },
      { src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80&auto=format&fit=crop', alt: 'Rooftop terrace — zinc planters, Paris skyline' }
    ]
  },
  {
    id: 'milan-showroom',
    title: 'Curated Design Showroom',
    category: 'Commercial',
    location: 'Milan, Italy',
    year: 2022,
    scope: 'Commercial Interior Design, Brand Environment',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Design showroom in Milan — minimal backdrop for curated furniture and object display',
    narrative: [
      'A Brera-district showroom for an Italian furniture brand expanding into the European design market. The brief was a controlled environment that would make the furniture speak — backgrounds that had their own character without competing. The challenge was creating a space that would read beautifully in press photography but also feel hospitable and calm in person.',
      'We worked with a palette of raw plaster, antique mirror, and polished concrete — surfaces that respond to light differently across the day and create the sense of a private apartment rather than a commercial showroom. The layout is deliberately non-retail, with furniture arranged as it would be lived with, not displayed.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80&auto=format&fit=crop', alt: 'Showroom main space — raw plaster, editorial display', wide: true },
      { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80&auto=format&fit=crop', alt: 'Object vignette — considered grouping on stone plinth' },
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop', alt: 'Consultation room — soft seating, antique mirror' }
    ]
  },
  {
    id: 'lisbon-villa',
    title: 'Heritage Villa',
    category: 'Residential',
    location: 'Lisbon, Portugal',
    year: 2023,
    scope: 'Interior Design, Conservation Advisory',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Heritage villa in Lisbon — azulejo tiles, contemporary intervention, warm layering',
    narrative: [
      'A 19th-century villa in Belém, Lisbon, requiring sympathetic renovation and a new interior language that respected the original architecture without rendering the house museum-like. The client — a collector of contemporary Portuguese art — needed something more alive than a restoration.',
      'We worked with the original azulejo panels, iron balustrades, and shuttered windows as the fixed backdrop, introducing contemporary furniture and lighting in conversation with these elements rather than in opposition. The art collection became the connective tissue: each room is designed around a specific artwork, allowing the collection to structure the spatial experience.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80&auto=format&fit=crop', alt: 'Main salon — azulejo feature wall, contemporary seating', wide: true },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop', alt: 'Entrance hall — original iron staircase, new terrazzo floor' },
      { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80&auto=format&fit=crop', alt: 'Garden room — arched windows, views to Tagus' },
      { src: 'https://images.unsplash.com/photo-1586023492125-27b2a9ce0d4e?w=900&q=80&auto=format&fit=crop', alt: 'Library — floor to ceiling books, single reading chair' }
    ]
  },
  {
    id: 'marseille-coastal',
    title: 'Coastal Edit',
    category: 'Styling',
    location: 'Marseille, France',
    year: 2024,
    scope: 'Interior Styling & FF&E Refresh',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1616046229478-9901369be34c?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Coastal apartment in Marseille — linen, rattan, and sunbleached tones',
    narrative: [
      'A seaside apartment in the 7th arrondissement of Marseille, owned by a Paris-based couple as a summer base. The brief was a complete restyling without structural intervention — reimagining the space entirely through object selection, textiles, lighting, and art.',
      'We worked with the existing architecture — a 1960s block with generous balconies and direct sea views — and built a palette around what the light and setting demanded: raw linen, sun-faded terracotta, woven rattan, and a small but carefully considered collection of Mediterranean ceramics.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1616046229478-9901369be34c?w=1400&q=80&auto=format&fit=crop', alt: 'Living area — linen sofas, rattan, sea light', wide: true },
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop', alt: 'Dining corner — woven pendants, terracotta tiles' },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop', alt: 'Balcony — linen cushions, ceramic plant pots' }
    ]
  },
  {
    id: 'dubai-penthouse',
    title: 'Skyline Penthouse',
    category: 'Residential',
    location: 'Dubai, UAE',
    year: 2023,
    scope: 'Full Interior Design & Art Advisory',
    status: 'Completed',
    coverImage: 'https://images.unsplash.com/photo-1560185127-6a8d6ea47eab?w=1600&q=85&auto=format&fit=crop',
    coverAlt: 'Dubai penthouse — sculptural forms, curated art, floor-to-ceiling city views',
    narrative: [
      'A full-floor penthouse in Downtown Dubai, designed for a client who travels extensively and wanted a home that felt simultaneously global and deeply personal. The collection of art and objects — gathered over fifteen years across Tokyo, Milan, and New York — was the starting point for everything.',
      'The design creates a sequence of moods across the 750 m² floor plate: an entry that is dramatic and vertical, a living zone that opens entirely to the skyline, and a more contained, intimate series of private rooms that feel as private and still as anywhere else in the world at that altitude.'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1560185127-6a8d6ea47eab?w=1400&q=80&auto=format&fit=crop', alt: 'Main living space — double height, skyline view', wide: true },
      { src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80&auto=format&fit=crop', alt: 'Dining room — round table, art installation' },
      { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80&auto=format&fit=crop', alt: 'Primary suite — warm tones, city dawn view' },
      { src: 'https://images.unsplash.com/photo-1586023492125-27b2a9ce0d4e?w=900&q=80&auto=format&fit=crop', alt: 'Library — curved shelving, rare book collection' }
    ]
  }
];

/* ── PROJECT FILTER (projects.html) ──────────────────────── */
(function initFilter() {
  const chips = document.querySelectorAll('.filter-chip');
  if (!chips.length) return; // Not on projects page

  const cards    = document.querySelectorAll('.project-card[data-category]');
  const noResult = document.getElementById('noResults');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      // Update active chip
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
  const titleEl    = document.getElementById('projectTitle');
  if (!titleEl) return; // Not on project detail page

  // Parse the project ID from the URL query string
  const params    = new URLSearchParams(window.location.search);
  const id        = params.get('id');
  const project   = PROJECTS.find((p) => p.id === id);

  if (!project) {
    titleEl.textContent = 'Project not found.';
    return;
  }

  // ── Page meta
  document.title = `${project.title} — Zahra Interior Architecture`;
  const metaDesc = document.getElementById('metaDesc');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${project.title} · ${project.location} · ${project.year} — Zahra Interior Architecture`);
  }

  // ── Cover image
  const cover = document.getElementById('projectCover');
  if (cover) {
    cover.src = project.coverImage;
    cover.alt = project.coverAlt;
  }

  // ── Header
  const catEl = document.getElementById('projectCategory');
  if (catEl) catEl.textContent = project.category;
  titleEl.textContent = project.title;

  // ── Overview
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setEl('projectLocation', project.location);
  setEl('projectYear', project.year);
  setEl('projectScope', project.scope);
  setEl('projectStatus', project.status);

  // ── Narrative
  const narrativeEl = document.getElementById('projectNarrative');
  if (narrativeEl && project.narrative) {
    narrativeEl.innerHTML = project.narrative
      .map((para) => `<p>${para}</p>`)
      .join('');
  }

  // ── Gallery
  const galleryEl = document.getElementById('projectGallery');
  if (galleryEl && project.images) {
    galleryEl.innerHTML = project.images
      .map((img) => `
        <img
          src="${img.src}"
          alt="${img.alt}"
          loading="lazy"
          ${img.wide ? 'class="wide"' : ''}
        >
      `)
      .join('');
  }

  // ── Project navigation (prev / next)
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const prevProject  = PROJECTS[currentIndex - 1];
  const nextProject  = PROJECTS[currentIndex + 1];

  const prevLink  = document.getElementById('prevProject');
  const nextLink  = document.getElementById('nextProject');
  const prevTitle = document.getElementById('prevProjectTitle');
  const nextTitle = document.getElementById('nextProjectTitle');

  if (prevLink && prevProject) {
    prevLink.href = `project-detail.html?id=${prevProject.id}`;
    if (prevTitle) prevTitle.textContent = prevProject.title;
  } else if (prevLink) {
    prevLink.style.visibility = 'hidden';
  }

  if (nextLink && nextProject) {
    nextLink.href = `project-detail.html?id=${nextProject.id}`;
    if (nextTitle) nextTitle.textContent = nextProject.title;
  } else if (nextLink) {
    nextLink.style.visibility = 'hidden';
  }
})();
