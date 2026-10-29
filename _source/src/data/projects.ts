/**
 * ALL PROJECT CONTENT LIVES HERE.
 * To update a project: edit its entry below. To add one: copy an entry and give it a new slug.
 * Images are file names inside the portfolio image folder (see src/lib/images.ts).
 * Case-study sections (Problem / Role / Process / Solution / Outcomes) only render when
 * they have content, and the left mini-navigator updates automatically.
 */

export interface Img {
  file: string;
  caption?: string;
}

export type GalleryLayout =
  | "full" // one large image per row
  | "grid" // responsive grid, landscape crop
  | "grid-tall" // responsive grid, portrait crop (for long page screenshots)
  | "masonry" // natural ratios, 2 columns
  | "carousel" // horizontal swipe / arrows
  | "split"; // alternating image + caption rows

export interface Gallery {
  title: string;
  note?: string;
  layout: GalleryLayout;
  cols?: 2 | 3;
  video?: string; // YouTube embed id
  images: Img[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  type: string[];
  cover: string;
  intro: string;
  links?: { label: string; url: string }[];
  /** "In 60 seconds" summary – one short line each */
  summary: {
    role?: string;
    problem?: string;
    process?: string;
    solution?: string;
    outcome?: string;
  };
  problem?: string[];
  role?: string[];
  process?: { text?: string[]; galleries: Gallery[] };
  solution?: { text?: string[]; galleries: Gallery[] };
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    slug: "root-direct",
    title: "Root Direct",
    category: "AI-assisted product prototype",
    tags: ["AI", "Product", "UI", "Web prototype"],
    year: "2026",
    client: "有種直送 Root Direct",
    type: ["Brand digital experience", "Website design & deployment", "AI-assisted design and coding"],
    cover: "root-hero.jpg",
    intro:
      "A farm-to-consumer delivery brand, taken from idea to a live website using AI-assisted design and coding workflows.",
    links: [
      { label: "Live website", url: "https://rootdirect-hk.onrender.com/" },
      { label: "Instagram", url: "https://www.instagram.com/rootdirect.hk/" },
      { label: "YouTube", url: "https://www.youtube.com/@RootDirect-hk" },
    ],
    summary: {
      role: "Developed the brand’s digital experience; designed and deployed the website.",
      problem: "Find an opportunity in farm-to-consumer delivery and simplify seasonal product discovery and ordering.",
      process: "AI-assisted design and coding workflows to accelerate prototyping and implementation.",
      solution: "A website combining product presentation, farm storytelling and ordering information.",
      outcome: "Live website with an admin interface for managing product and farm imagery.",
    },
    problem: [
      "Identify a business opportunity in the farm-to-consumer delivery market.",
      "Build a distinctive brand with a clear value proposition and market positioning.",
      "Simplify seasonal product discovery and ordering through an intuitive user experience.",
      "Integrate AI-assisted workflows across the design and development process.",
    ],
    role: [
      "Developed the brand’s digital experience, combining product presentation, farm storytelling and ordering information.",
      "Designed and deployed the website, including an admin interface for managing product and farm imagery.",
      "Applied AI-assisted design and coding workflows to accelerate prototyping and implementation.",
    ],
    process: {
      text: ["AI-assisted design and coding workflows were used across prototyping and implementation."],
      galleries: [
        {
          title: "AI-assisted workflow",
          layout: "split",
          video: "orOJpsuW3JI",
          images: [{ file: "root-01.jpg", caption: "AI-assisted workflow" }],
        },
      ],
    },
    solution: {
      galleries: [
        {
          title: "Website",
          layout: "grid-tall",
          cols: 2,
          images: [
            { file: "root-02.jpg", caption: "Homepage" },
            { file: "root-03.jpg", caption: "About" },
            { file: "root-04.jpg", caption: "Price listing" },
          ],
        },
      ],
    },
    outcomes: [
      "Designed and deployed the live Root Direct website.",
      "Delivered an admin interface for managing product and farm imagery.",
    ],
  },

  {
    slug: "onramp-cms",
    title: "OnRamp CMS Revamp",
    category: "Enterprise product · Healthcare",
    tags: ["UX", "UI", "Prototype", "Healthcare"],
    year: "2025–2026",
    client: "Hospital Authority",
    type: [
      "Digital product design: UI system, responsive web design, prototype & wireframes",
      "Specialised UX: user research & discovery, user journey mapping & flows",
    ],
    cover: "hat-ux-hero.jpg",
    intro:
      "Leading the redesign of OnRamp, a specialised healthcare CMS platform, to streamline complex clinical consultation workflows and enhance operational efficiency for medical administrators and healthcare professionals.",
    summary: {
      role: "Led UX/UI planning and end-to-end interface design.",
      problem: "Modernise a legacy CMS while preserving users’ existing workflows and familiarity.",
      process: "Research with healthcare professionals, journey mapping, wireframes and prototype, in step with IT.",
      solution: "A UI system aligning SHSOP branding with the MUI design system and technical constraints.",
      outcome: "UI system, responsive web design, wireframes and prototype for registration, appointment and consultation.",
    },
    problem: [
      "Modernise a legacy CMS while preserving users’ existing workflows and familiarity.",
      "Simplify complex healthcare information and workflows into a clearer interface.",
      "Align internal SHSOP branding with the MUI design system and technical constraints.",
    ],
    role: [
      "Led UX/UI planning and end-to-end interface design.",
      "Conducted research with healthcare professionals to understand real-world workflows and needs.",
      "Collaborated with IT to balance user needs, system constraints and implementation feasibility.",
      "Translated complex administrative requirements into practical, user-centered solutions.",
    ],
    process: {
      text: [
        "User research and discovery with healthcare professionals.",
        "User journey mapping and flows, then wireframes and a prototype.",
        "Ongoing collaboration with IT on constraints and feasibility.",
      ],
      galleries: [
        {
          title: "Project overview & foundations",
          layout: "split",
          images: [
            { file: "hat-ux-01.jpg", caption: "OnRamp CMS redesign — streamlining healthcare operations" },
            { file: "hat-ux-02.jpg", caption: "Project overview and objectives" },
            { file: "hat-ux-03-color.jpg", caption: "Typography and colour system" },
          ],
        },
      ],
    },
    solution: {
      galleries: [
        {
          title: "Registration, application and consultation",
          layout: "grid-tall",
          cols: 3,
          images: [
            { file: "hat-ux-04-regist.jpg", caption: "Registration" },
            { file: "hat-ux-05-appoint.jpg", caption: "Appointment" },
            { file: "hat-ux-06-consultation.jpg", caption: "Consultation" },
          ],
        },
      ],
    },
    outcomes: [
      "Delivered a responsive UI system, wireframes and prototype (2025–2026).",
      "Covered registration, appointment scheduling and clinical documentation flows.",
    ],
  },

  {
    slug: "training-design-system",
    title: "Training Design System & Templates",
    category: "Design system · Templates",
    tags: ["Design system", "Templates", "Print", "Mini-site"],
    year: "2019–2026",
    client: "Hospital Authority",
    type: ["Training design system", "Templates & visual guidelines", "Infographics, mini-sites & print"],
    cover: "hat-06.jpg",
    intro:
      "A training design system and set of templates that keep staff materials on-brand while remaining easy to maintain day to day.",
    summary: {
      role: "Developed the training design system, templates and visual guidelines.",
      problem: "Inconsistent materials, and guides that needed specialised software to update.",
      solution: "Unified Word and PPT templates, staff-editable guides and pre-built PPT animations.",
      outcome: "Templates, infographics, training kits, mini-sites and print materials for staff.",
    },
    problem: [
      "Standardised branding: unify MS Word and PPT templates for a consistent visual identity.",
      "Zero-entry maintenance: staff-editable guides requiring no specialised software.",
      "Streamlined production: cut tutorial creation time via pre-built PPT animations.",
    ],
    role: [
      "Developed the training design system, templates and visual guidelines.",
      "Created infographics, training kits, mini-sites and print materials.",
      "Aligned materials with the organisation’s branding while supporting practical day-to-day use by staff.",
    ],
    solution: {
      galleries: [
        {
          title: "Tutorial video template",
          note: "Simple click-to-animate for staff.",
          layout: "grid",
          cols: 2,
          video: "fquXY2MG_oA",
          images: [
            { file: "hat-03.jpg", caption: "Template slides" },
            { file: "hat-04.jpg", caption: "Template slides" },
          ],
        },
        {
          title: "User manual and PPT presentation",
          layout: "grid-tall",
          cols: 3,
          images: [{ file: "hat-10-tutorial.jpg", caption: "User manual and PPT presentation" }],
        },
        {
          title: "Minisite for tutorials",
          note: "Hosting user manuals and animated guides.",
          layout: "grid",
          cols: 2,
          images: [
            { file: "hat-w01.jpg", caption: "Tutorial mini-site" },
            { file: "hat-w02.jpg", caption: "Tutorial mini-site" },
          ],
        },
        {
          title: "Printed materials",
          layout: "full",
          images: [{ file: "hat-05.jpg", caption: "Printed materials" }],
        },
      ],
    },
    outcomes: [
      "A reusable training design system, templates and visual guidelines (2019–2026).",
      "Infographics, training kits, mini-sites and print materials aligned with organisational branding.",
    ],
  },

  {
    slug: "st-honore",
    title: "St. Honore — E-commerce Revamp",
    category: "E-commerce",
    tags: ["Research", "UX", "UI", "Responsive web", "App"],
    year: "Case study",
    client: "St. Honore",
    type: ["Responsive website: research, UX, UI", "App: research, UX, UI"],
    cover: "sh-hero.jpg",
    intro: "An e-commerce revamp across responsive web and app, from research and wireframes to UI.",
    links: [{ label: "Original website", url: "https://www.sthonore.com" }],
    summary: {
      role: "Research, UX and UI for the responsive website and the app.",
      process: "Research and UX, documented through wireframes.",
      solution: "Redesigned key pages: homepage, listing, filter, product details, cart, location, news and mobile.",
      outcome: "Wireframes plus UI designs for eight page types across web and mobile.",
    },
    role: ["Responsive website: research, UX, UI.", "App: research, UX, UI."],
    process: {
      text: ["Research and UX for both the responsive website and the app, documented through wireframes."],
      galleries: [
        {
          title: "Wireframes",
          layout: "full",
          images: [{ file: "sh-08-wf.jpg", caption: "Wireframes" }],
        },
      ],
    },
    solution: {
      galleries: [
        {
          title: "Website UI",
          note: "Swipe through the key pages, or tap any image to view it full size.",
          layout: "carousel",
          images: [
            { file: "sh-01-home-guest.jpg", caption: "Homepage" },
            { file: "sh-02-listing.jpg", caption: "Listing page" },
            { file: "sh-03-filter.jpg", caption: "Filter" },
            { file: "sh-04-product-details.jpg", caption: "Product details" },
            { file: "sh-05-cart.jpg", caption: "Shopping cart" },
            { file: "sh-06-store location.jpg", caption: "Location" },
            { file: "sh-07-news.jpg", caption: "News" },
          ],
        },
        {
          title: "Mobile",
          layout: "grid",
          cols: 2,
          images: [
            { file: "sh-m01.jpg", caption: "Mobile" },
            { file: "sh-m02.jpg", caption: "Mobile" },
          ],
        },
      ],
    },
    outcomes: ["Delivered wireframes and UI design for the responsive website and mobile experience."],
  },

  {
    slug: "watsons-water",
    title: "Watsons Water — E-shop Revamp",
    category: "E-commerce · Responsive web",
    tags: ["UX", "UI", "Responsive web", "Banners"],
    year: "Case study",
    client: "Watsons Water",
    type: ["Responsive website: UX, UI", "Banner design"],
    cover: "ww-hero.jpg",
    intro: "A responsive e-shop revamp for Watsons Water, covering UX, UI and banner design.",
    links: [{ label: "Website", url: "https://www.watsons-water.com" }],
    summary: {
      role: "UX and UI for the responsive website, plus banner design.",
      process: "Wireframes for the homepage and payment flow.",
      solution: "Responsive e-shop UI design.",
      outcome: "Wireframes, responsive UI designs and banners.",
    },
    role: ["Responsive website: UX, UI.", "Banner design."],
    process: {
      text: ["Wireframes for the homepage and payment flow."],
      galleries: [
        {
          title: "Wireframes",
          layout: "full",
          images: [{ file: "ww-wf-home-pay.jpg", caption: "Wireframes — homepage and payment" }],
        },
      ],
    },
    solution: {
      galleries: [
        {
          title: "UI design",
          layout: "grid",
          cols: 2,
          images: [
            { file: "ww-ecom-01.jpg", caption: "E-shop UI" },
            { file: "ww-ecom-02.jpg", caption: "E-shop UI" },
            { file: "ww-ecom-03.jpg", caption: "E-shop UI" },
            { file: "ww-ecom-04.jpg", caption: "E-shop UI" },
            { file: "ww-ecom-05.jpg", caption: "E-shop UI" },
            { file: "ww-ecom-7.jpg", caption: "E-shop UI" },
          ],
        },
      ],
    },
    outcomes: ["Delivered wireframes, responsive UI design and banner designs."],
  },

  {
    slug: "aeon-credit-app",
    title: "AEON Credit Service — App",
    category: "Mobile product",
    tags: ["UX", "UI", "Mobile app"],
    year: "Case study",
    client: "AEON Credit Service (Asia) Co., Ltd.",
    type: ["App UX / UI"],
    cover: "aeon-noshow-hero.jpg",
    intro: "UX and UI design for the AEON Credit Service mobile app.",
    summary: {
      role: "App UX and UI design.",
      process: "Wireframes for the app experience.",
      solution: "App UI design, including the loan application and login flows.",
      outcome: "Wireframes and app UI screens.",
    },
    role: ["App UX / UI."],
    process: {
      galleries: [
        {
          title: "Wireframes",
          layout: "full",
          images: [{ file: "aeon-noshow-wf.jpg", caption: "Wireframes" }],
        },
      ],
    },
    solution: {
      galleries: [
        {
          title: "UI design",
          layout: "masonry",
          images: [
            { file: "aeon-m01.jpg", caption: "App UI" },
            { file: "aeon-m02.jpg", caption: "App UI" },
            { file: "aeon-m03.jpg", caption: "App UI" },
            { file: "aeon-m04.jpg", caption: "App UI" },
          ],
        },
      ],
    },
    outcomes: ["Delivered wireframes and app UI design."],
  },

  {
    slug: "run-mudull-run",
    title: "Run Mudull Run",
    category: "Interactive product · Game",
    tags: ["UI", "Game", "Illustration"],
    year: "Case study",
    client: "Bliss Concept",
    type: ["Game concept & art direction", "Game interface design", "UAT testing"],
    cover: "md-hero.jpg",
    intro:
      "An engaging McMug game where users collect green seeds, invite Facebook friends for help, share treasures and unlock hidden stages through on-site check-ins — bridging online engagement with offline events.",
    summary: {
      role: "Game concepts and art direction; redrew brand assets for the game interface.",
      problem: "Align McMug and the game visuals with the brand, and keep one experience across 31 levels.",
      process: "Sketches, stage settings and extended UAT testing.",
      solution: "A cohesive game interface built from adapted brand assets.",
      outcome: "A game with 31 levels connecting online play with on-site check-ins.",
    },
    problem: [
      "Align the McMug character and game visuals with the brand identity.",
      "Adapt existing game assets into a cohesive, engaging game interface.",
      "Design and maintain a consistent experience across 31 levels.",
    ],
    role: [
      "Developed game concepts and art direction.",
      "Adapted and redrew brand assets for the game interface.",
      "Conducted extended UAT testing to ensure a consistent user experience.",
    ],
    process: {
      text: ["Concept sketches and stage settings, followed by extended UAT testing across the levels."],
      galleries: [
        {
          title: "Sketches",
          layout: "full",
          images: [{ file: "md-sketch.jpg", caption: "Sketches" }],
        },
        {
          title: "Stage setting",
          layout: "full",
          images: [
            { file: "md-stage2.jpg", caption: "Stage setting" },
            { file: "md-stage3.jpg", caption: "Stage setting" },
            { file: "md-stage1.jpg", caption: "Stage setting" },
          ],
        },
      ],
    },
    solution: {
      galleries: [
        {
          title: "Screenshots",
          layout: "carousel",
          video: "NwZcRtYFnp8",
          images: [
            { file: "md-slider1.jpg", caption: "Game screen" },
            { file: "md-slider2.jpg", caption: "Game screen" },
            { file: "md-slider3.jpg", caption: "Game screen" },
            { file: "md-map.jpg", caption: "Game map" },
            { file: "md-slider4.jpg", caption: "Game screen" },
            { file: "md-collection.jpg", caption: "Collection" },
            { file: "md-over.jpg", caption: "Game over" },
          ],
        },
      ],
    },
    outcomes: [
      "Delivered a game with 31 levels and a consistent experience throughout.",
      "Connected online engagement (seeds, friends, shared treasures) with offline events via on-site check-ins.",
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const pad = (n: number) => String(n).padStart(2, "0");
