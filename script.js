// Andrew Saba — portfolio
(() => {
  'use strict';

  const PROFILE = {
    name: 'Andrew Saba',
    role: 'Software Engineer',
    location: 'Cairo, Egypt',
    remote: true,
    email: 'andrew.adel.a@outlook.com',
    phone: '+(20) 114-100-4831',
    github: 'https://github.com/Andrew-A-A',
    linkedin: 'https://www.linkedin.com/in/andrew-adela/',
    summary: 'Software engineer with 1+ year of production experience building high-performance backend systems and enterprise-grade cloud applications. I re-engineer core processing pipelines, ship full-featured enterprise modules, and deliver mobile apps end-to-end.',
    taglines: {
      backend: 'Backend systems · Node.js · SAP CAP · PostgreSQL',
      mobile: 'Native Android · Kotlin / Java · 1-year client engagements',
      both: 'Backend systems & native Android — production-ready, end-to-end',
    },
  };

  const METRICS = [
    { value: '70%', label: 'execution time cut on payroll engine' },
    { value: '98%', label: 'accuracy on AI moderation model' },
    { value: '12mo', label: 'sustained Upwork engagement' },
    { value: '1+', label: 'years production experience' },
  ];

  const WORK = [
    {
      company: 'RAPTORS Tech',
      role: 'Cloud Developer',
      period: 'Feb 2025 — Present',
      location: 'On Site · Cairo',
      projects: [
        {
          name: 'Clearance Management Add-on (Tamayoz)',
          stack: ['SAP CAP', 'Node.js', 'PostgreSQL', 'SAPUI5'],
          bullets: [
            { label: 'Process Optimization', text: 'Developed a fully configurable enterprise application that reduced employee clearance process time by 70%, streamlining workflows from SuccessFactors data fetch to final issuance.' },
            { label: 'Backend Workflow Engine', text: 'Designed a modular approval system supporting parallel, sequential, and hybrid flows with management-level partitioning across multiple departments per level.' },
            { label: 'API Integration', text: 'Implemented robust OData services to handle secure, real-time data exchange with SAP SuccessFactors (Employee Central) for fetching and updating employee and clearance status records.' },
            { label: 'Frontend Customization', text: 'Enhanced enterprise adoption by enabling dynamic, client-specific theme configurations through a configurable SAPUI5 layer.' },
          ],
        },
        {
          name: 'Payroll Engine Add-on',
          stack: ['SAP CAP', 'React.js', 'PostgreSQL', 'Node.js'],
          bullets: [
            { label: 'Core Architecture Re-engineering', text: 'Transformed the core calculation engine from a legacy linear model to a high-performance recursive dependency graph, significantly reducing computational complexity and eliminating redundant database roundtrips through in-memory caching.' },
            { label: 'Dynamic Tax Engine', text: 'Built a fully configurable, time-dependent tax engine handling personal tax slabs and automatic annual reconciliation logic.' },
            { label: 'Off-Cycle Payroll Module', text: 'Implemented an end-to-end module for on-demand payment runs with granular filtering (Reason Codes, Payment Types) and automated PDF/Excel reporting.' },
          ],
        },
      ],
    },
  ];

  const PROJECTS = [
    {
      id: 'ifix',
      name: 'IFix',
      tag: 'Flutter · Service Marketplace',
      period: 'Client work',
      summary: 'Flutter app connecting clients with nearby maintenance technicians — multi-language, phone-based auth, location-aware technician discovery, and in-app rating.',
      stack: ['Flutter', 'Dart', 'Google Maps', 'Phone Auth', 'i18n (RTL)'],
      bullets: [
        'Built a multi-language onboarding flow (Arabic, English, Hindi, Filipino, Urdu, Bengali) with full RTL support and locale-aware UI.',
        'Implemented service-category-driven technician discovery: users pick the appliance type, then see nearby technicians on a live map with profile cards and ratings.',
        'Designed the technician profile screen with verification status, ratings, direct call, and one-tap WhatsApp location sharing for fast handoff.',
      ],
      metric: { value: '6+', label: 'languages w/ RTL support' },
      images: [
        'assets/ifix-1-welcome.png',
        'assets/ifix-2-language.png',
        'assets/ifix-3-login.png',
        'assets/ifix-4-services.png',
        'assets/ifix-5-map.png',
        'assets/ifix-6-technician.png',
      ],
    },
    {
      id: 'binge-better',
      name: 'Binge Better',
      tag: 'Freelance · Android',
      period: 'Nov 2023 — Nov 2024',
      summary: 'Native Android app for screen-time and content control, delivered across a sustained one-year Upwork engagement.',
      stack: ['Android SDK', 'Java', 'Usage Stats API'],
      bullets: [
        "Built robust usage control features using native Android APIs — device-based restrictions and schedule-based locking mechanisms.",
        "Used Android usage statistics APIs to gather and process real-time screen-time data, powering the app's core restriction engine.",
        'Maintained codebase compatibility proactively across multiple major Android version updates, ensuring zero regression in production.',
      ],
      metric: { value: '12mo', label: 'continuous client delivery' },
      images: [
        'assets/binge-1-home.png',
        'assets/binge-2-blocklist.png',
        'assets/binge-3-conditions.png',
        'assets/binge-4-deactivation.png',
        'assets/binge-5-blocked.png',
        'assets/binge-6-settings.png',
      ],
    },
    {
      id: 'content-guard',
      name: 'Content Guard',
      tag: 'AI Moderation · Capstone',
      period: 'Oct 2023 — Jul 2024',
      summary: 'Full-stack AI content moderation system: classification model + Flask API + Chrome extension that blurs flagged content live as users browse.',
      stack: ['Python', 'Flask', 'JavaScript', 'Chrome Extensions API'],
      bullets: [
        'Led development of a content classification model achieving 98% accuracy on the test set; curated and merged large datasets to maximize generalization.',
        'Built a Flask REST API for real-time inference and a Chrome extension that automatically blurs or blocks flagged content — zero website-side changes.',
        'Designed data curation and preprocessing pipeline to merge, deduplicate, and balance training data at scale.',
      ],
      metric: { value: '98%', label: 'test-set accuracy' },
      video: 'assets/content-guard-demo.mp4',
    },
    {
      id: 'location-reminder',
      name: 'Location Reminder',
      tag: 'Android · Geofencing',
      period: 'Aug 2022 — Sep 2022',
      summary: 'Location-based task manager that triggers local notifications when users enter or exit defined geographic areas.',
      stack: ['Kotlin', 'MVVM', 'Room', 'Google Maps API'],
      bullets: [
        'Developed geo-fencing logic using the Android Geofencing API for precise enter/exit triggers.',
        'Integrated Google Maps API and Android location services with efficient geofence radius tuning for minimal battery drain.',
        'Built entirely in Kotlin following MVVM architecture with Room persistence and LiveData — clean, testable, and maintainable.',
      ],
      metric: { value: 'Kotlin', label: 'MVVM + Room + LiveData' },
      customVisual: 'geofence',
    },
  ];

  const SKILLS = [
    { group: 'Languages', items: ['JavaScript', 'Dart', 'Kotlin', 'Java','Python'] },
    { group: 'Backend / APIs', items: ['Node.js', 'SAP CAP (CDS)', 'Flask', 'REST APIs', 'OData Services'] },
    { group: 'Databases', items: ['PostgreSQL', 'In-memory Caching', 'Query Optimization'] },
    { group: 'Frontend', items: ['React.js', 'SAPUI5', 'HTML', 'CSS'] },
    { group: 'Mobile', items: ['Android Native', 'Flutter'] },
    { group: 'Tools', items: ['Git', 'SAP SuccessFactors', 'PDF/Excel Reporting', 'Chrome Extensions API'] },
  ];

  const EDUCATION = [
    { degree: "Bachelor's in Computer Science", school: 'Ain Shams University', period: '2020 — 2024' },
    { degree: 'Nanodegree — Advanced Android Kotlin Development', school: 'Udacity', period: 'Aug 2022 — Oct 2022' },
  ];

  const LANGUAGES = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional proficiency' },
  ];

  const ACCENT_PRESETS = {
    green:   { c: 'oklch(0.82 0.16 155)', name: 'Terminal Green' },
    amber:   { c: 'oklch(0.82 0.16 75)',  name: 'Amber' },
    cyan:    { c: 'oklch(0.82 0.16 220)', name: 'Cyan' },
    magenta: { c: 'oklch(0.78 0.18 340)', name: 'Magenta' },
    white:   { c: 'oklch(0.95 0.01 240)', name: 'Mono' },
  };

  // ── tiny DOM builder ────────────────────────────────────────────────────────
  function el(tag, attrs, ...children) {
    const node = tag.includes(':') ? document.createElementNS('http://www.w3.org/2000/svg', tag.split(':')[1]) : document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === 'class') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'style' && typeof v === 'object') Object.assign(node.style, v);
        else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
        else if (k === 'hidden') { if (v) node.hidden = true; }
        else node.setAttribute(k, v);
      }
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    }
    return node;
  }
  // SVG element helper
  function svgEl(tag, attrs, ...children) {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if (attrs) for (const [k, v] of Object.entries(attrs)) { if (v != null && v !== false) node.setAttribute(k, v); }
    for (const c of children.flat()) { if (c != null && c !== false) node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); }
    return node;
  }

  // ── state ───────────────────────────────────────────────────────────────────
  const state = { audience: 'both', accent: 'green' };

  function applyAccent(key) {
    const preset = ACCENT_PRESETS[key] || ACCENT_PRESETS.green;
    document.documentElement.style.setProperty('--accent', preset.c);
    document.documentElement.style.setProperty('--accent-dim', preset.c.replace(')', ' / 0.15)'));
  }

  // ── nav ─────────────────────────────────────────────────────────────────────
  function buildNav() {
    return el('nav', { class: 'nav' },
      el('div', { class: 'nav-inner' },
        el('a', { href: '#top', class: 'nav-brand' },
          el('span', { class: 'nav-brand-dot' }),
          el('span', null, 'andrew.saba'),
          el('span', { class: 'nav-brand-suffix' }, '::swe'),
        ),
        el('div', { class: 'nav-links' },
          el('a', { href: '#about' }, el('span', { class: 'num' }, '01'), 'about'),
          el('a', { href: '#work' }, el('span', { class: 'num' }, '02'), 'experience'),
          el('a', { href: '#projects' }, el('span', { class: 'num' }, '03'), 'projects'),
          el('a', { href: '#skills' }, el('span', { class: 'num' }, '04'), 'stack'),
        ),
        el('a', { class: 'nav-cta', href: `mailto:${PROFILE.email}` }, '$ contact'),
      ),
    );
  }

  // ── hero ────────────────────────────────────────────────────────────────────
  const FOCUS = {
    mobile: {
      headline: ['Native Android,', 'shipped for clients.'],
      sub: 'I build production-ready Android apps end-to-end — Kotlin, Java, Flutter — and have sustained, year-long delivery on Upwork to prove it.',
    },
    backend: {
      headline: ['Backend systems', 'that get faster.'],
      sub: 'I re-engineer core processing pipelines and ship enterprise modules in live payroll and HR workflows. Node.js, SAP CAP, PostgreSQL.',
    },
    both: {
      headline: ['Backend that scales.', 'Mobile that ships.'],
      sub: 'Software engineer focused on high-performance backend systems and mobile development — production experience across enterprise cloud and freelance mobile.',
    },
  };

  let typeIntervalId = null;

  function buildHero() {
    const section = el('section', { id: 'top', class: 'hero' });
    section.appendChild(el('div', { class: 'container' },
      el('div', { class: 'hero-inner' },
        el('div', { class: 'hero-left' }, ...buildHeroLeft()),
        el('div', { class: 'hero-right' }, ...buildHeroRight()),
      ),
    ));
    return section;
  }

  function buildHeroLeft() {
    const focus = FOCUS[state.audience];
    const headlineEl = el('h1', { class: 'hero-headline' },
      ...focus.headline.map((line, i) =>
        el('div', { class: 'line-clip' },
          el('span', { class: 'line', style: { animationDelay: `${i * 80}ms` } }, line),
        ),
      ),
    );

    return [
      el('div', { class: 'section-label' },
        el('span', { class: 'accent' }, '~/'),
        'portfolio · v1.0',
      ),
      headlineEl,
      el('p', { class: 'hero-sub' }, focus.sub),
      el('div', { class: 'hero-cta-row' },
        el('a', { class: 'btn primary', href: `mailto:${PROFILE.email}` },
          el('span', null, '$ contact --email'),
          el('span', { class: 'arrow' }, '→'),
        ),
        el('a', { class: 'btn', href: '#work' }, el('span', null, 'view work')),
      ),
      el('div', { class: 'hero-social-row' },
        el('a', { class: 'hero-social', href: PROFILE.github, target: '_blank', rel: 'noopener' },
          el('span', { class: 'hero-social-key' }, 'github'),
          el('span', { class: 'hero-social-sep' }, '/'),
          el('span', { class: 'hero-social-handle' }, 'Andrew-A-A'),
          el('span', { class: 'hero-social-arrow' }, '↗'),
        ),
        el('a', { class: 'hero-social', href: PROFILE.linkedin, target: '_blank', rel: 'noopener' },
          el('span', { class: 'hero-social-key' }, 'linkedin'),
          el('span', { class: 'hero-social-sep' }, '/'),
          el('span', { class: 'hero-social-handle' }, 'andrew-adela'),
          el('span', { class: 'hero-social-arrow' }, '↗'),
        ),
      ),
      el('div', { class: 'hero-meta-row' },
        el('span', { class: 'hero-meta' },
          el('span', { style: { color: 'var(--accent)' } }, '●'),
          ' Available for freelance',
        ),
        el('span', { class: 'hero-meta' }, `${PROFILE.location} · Open to remote`),
      ),
    ];
  }

  function buildHeroRight() {
    const cmdLine = el('div', null,
      el('span', { class: 'prompt' }, 'andrew@cairo'),
      el('span', { class: 'comment' }, ' ~ '),
      el('span', { class: 'cmd' }, '$ '),
      el('span', { class: 'typed' }, ''),
      el('span', { class: 'cursor' }),
    );
    const outBlock = el('div', { class: 'out-block', style: { marginTop: '12px', display: 'none' } });

    const terminal = el('div', { class: 'terminal hero-terminal' },
      el('div', { class: 'terminal-bar' },
        el('span', { class: 'dot', style: { background: '#ff5f57' } }),
        el('span', { class: 'dot', style: { background: '#febc2e' } }),
        el('span', { class: 'dot', style: { background: '#28c840' } }),
        el('span', { class: 'title' }, '~ — andrew@portfolio'),
      ),
      el('div', { class: 'terminal-body' }, cmdLine, outBlock),
    );

    const metricGrid = el('div', { class: 'metric-grid' },
      ...METRICS.map(m => el('div', { class: 'metric-card' },
        el('div', { class: 'metric-val' }, m.value),
        el('div', { class: 'metric-label' }, m.label),
      )),
    );

    return [terminal, metricGrid];
  }

  function startHeroTyping() {
    if (typeIntervalId) clearInterval(typeIntervalId);
    const fullCmd = `whoami --as ${state.audience}`;
    const typedNode = document.querySelector('.hero-terminal .typed');
    const outBlock = document.querySelector('.hero-terminal .out-block');
    if (!typedNode || !outBlock) return;
    typedNode.textContent = '';
    outBlock.style.display = 'none';
    outBlock.innerHTML = '';
    let i = 0;
    typeIntervalId = setInterval(() => {
      i += 1;
      typedNode.textContent = fullCmd.slice(0, i);
      if (i >= fullCmd.length) {
        clearInterval(typeIntervalId);
        renderHeroOutput(outBlock);
      }
    }, 45);
  }

  function renderHeroOutput(outBlock) {
    const out = (k, v) => el('div', { class: 'out-row' },
      el('span', { class: 'out-key' }, k.padEnd(7, ' ')),
      el('span', { class: 'out-sep' }, '::'),
      typeof v === 'string'
        ? el('span', { class: 'out-val' }, v)
        : el('span', { class: 'out-val' }, v),
    );
    outBlock.appendChild(out('name', PROFILE.name));
    outBlock.appendChild(out('role', PROFILE.role));
    outBlock.appendChild(out('based', `${PROFILE.location} (open to remote)`));
    outBlock.appendChild(out('exp', '1+ yrs production · 1 yr freelance'));
    outBlock.appendChild(out('stack', 'Node.js · SAP CAP · PostgreSQL · Android (Kotlin/Java)'));
    outBlock.appendChild(out('status', el('span', { style: { color: 'var(--accent)' } }, 'available — open to projects')));
    outBlock.appendChild(el('div', { style: { marginTop: '8px' } },
      el('span', { class: 'prompt' }, 'andrew@cairo'),
      el('span', { class: 'comment' }, ' ~ '),
      el('span', { class: 'cmd' }, '$ '),
      el('span', { class: 'cursor' }),
    ));
    outBlock.style.display = 'block';
  }

  function refreshHeroForAudience() {
    const left = document.querySelector('.hero-left');
    if (!left) return;
    left.innerHTML = '';
    buildHeroLeft().forEach(c => left.appendChild(c));
    startHeroTyping();
  }

  // ── about ───────────────────────────────────────────────────────────────────
  function buildAbout() {
    const fact = (k, v, mono) => el('div', { class: 'fact-row' },
      el('span', { class: 'fact-k' }, k),
      el('span', { class: `fact-v${mono ? ' mono' : ''}` }, v),
    );
    return el('section', { id: 'about', class: 'section' },
      el('div', { class: 'container' },
        el('div', { class: 'section-label' }, el('span', { class: 'accent' }, '01'), ' // about'),
        el('h2', { class: 'section-title' }, "A summary, in plain text."),
        el('div', { class: 'about-grid' },
          el('div', { class: 'about-bio-col' },
            el('p', { class: 'bio-lead' }, PROFILE.summary),
            el('p', { class: 'bio-extra' },
              "I work primarily on the JVM and Node.js stacks. My production work has been heavy on re-engineering legacy systems for performance and scaling them into multi-tenant enterprise modules. Outside of that, I spent a year shipping native Android features for a single Upwork client — the experience that taught me the most about long-term maintenance and zero-regression delivery.",
            ),
            el('div', { class: 'fact-grid' },
              fact('Based', PROFILE.location),
              fact('Remote', 'Yes'),
              fact('Email', PROFILE.email, true),
              fact('Phone', PROFILE.phone, true),
            ),
          ),
          el('aside', { class: 'about-edu-col' },
            el('div', { class: 'subhead' }, el('span', { class: 'accent' }, '~/'), 'education'),
            el('div', { class: 'edu-list' },
              ...EDUCATION.map(e => el('div', { class: 'edu-row' },
                el('div', { class: 'edu-degree' }, e.degree),
                el('div', { class: 'edu-school' }, e.school),
                el('div', { class: 'edu-period' }, e.period),
              )),
            ),
            el('div', { class: 'subhead', style: { marginTop: '32px' } }, el('span', { class: 'accent' }, '~/'), 'languages'),
            el('div', { class: 'edu-list' },
              ...LANGUAGES.map(l => el('div', { class: 'lang-row' },
                el('span', { class: 'lang-name' }, l.name),
                el('span', { class: 'lang-dots' }, '·'.repeat(40)),
                el('span', { class: 'lang-level' }, l.level),
              )),
            ),
          ),
        ),
      ),
    );
  }

  // ── work ────────────────────────────────────────────────────────────────────
  function buildWork() {
    return el('section', { id: 'work', class: 'section' },
      el('div', { class: 'container' },
        el('div', { class: 'section-label' }, el('span', { class: 'accent' }, '02'), ' // experience'),
        el('h2', { class: 'section-title' }, 'Production work, where it shipped.'),
        ...WORK.map(w => el('div', { class: 'job' },
          el('div', { class: 'job-head' },
            el('div', null,
              el('div', { class: 'job-role' }, w.role),
              el('div', { class: 'job-company' }, w.company),
            ),
            el('div', { class: 'job-meta' },
              el('span', { class: 'job-period' }, w.period),
              el('span', { class: 'job-location' }, w.location),
            ),
          ),
          el('div', { class: 'project-list' },
            ...w.projects.map((p, j) => buildWorkProject(p, j === 0)),
          ),
        )),
      ),
    );
  }

  function buildWorkProject(project, openInitially) {
    const body = el('div', { class: 'project-body', hidden: !openInitially },
      el('ul', { class: 'work-bullets' },
        ...project.bullets.map(b => el('li', { class: 'work-bullet' },
          el('span', { class: 'work-bullet-label' }, b.label),
          el('span', { class: 'work-bullet-text' }, b.text),
        )),
      ),
    );

    const block = el('div', { class: `project-block${openInitially ? ' open' : ''}` });
    const head = el('button', {
      class: 'project-head',
      'aria-expanded': openInitially ? 'true' : 'false',
      onclick: () => {
        const isOpen = !body.hidden;
        body.hidden = isOpen;
        block.classList.toggle('open', !isOpen);
        head.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      },
    },
      el('div', { class: 'project-head-left' },
        el('span', { class: 'chevron' }, '▸'),
        el('span', { class: 'project-name' }, project.name),
      ),
      el('div', { class: 'stack-inline' },
        ...project.stack.map(s => el('span', { class: 'chip' }, s)),
      ),
    );
    block.appendChild(head);
    block.appendChild(body);
    return block;
  }

  // ── projects ────────────────────────────────────────────────────────────────
  function buildProjects() {
    return el('section', { id: 'projects', class: 'section' },
      el('div', { class: 'container' },
        el('div', { class: 'section-label' }, el('span', { class: 'accent' }, '03'), ' // selected projects'),
        el('h2', { class: 'section-title' }, "Things I've built end-to-end."),
        el('div', { class: 'projects-grid' },
          ...PROJECTS.map((p, i) => buildProjectCard(p, i)),
        ),
      ),
    );
  }

  function buildProjectCard(project, index) {
    const hasMedia = (project.images && project.images.length) || project.video || project.customVisual;
    const card = el('article', { class: 'proj-card' },
      el('div', { class: 'proj-card-main' },
        el('div', { class: 'proj-head' },
          el('div', { class: 'proj-tag-row' },
            el('span', { class: 'proj-index' }, String(index + 1).padStart(2, '0')),
            el('span', { class: 'proj-tag' }, project.tag),
            el('span', { class: 'proj-period' }, project.period),
          ),
          el('div', { class: 'proj-name' }, project.name),
        ),
        el('div', { class: 'proj-body' },
          el('p', { class: 'proj-summary' }, project.summary),
          el('ul', { class: 'proj-bullets' },
            ...project.bullets.map(b => el('li', { class: 'proj-bullet' },
              el('span', { class: 'proj-bullet-mark' }, '—'),
              el('span', null, b),
            )),
          ),
        ),
        el('div', { class: 'proj-foot' },
          el('div', { class: 'proj-stack-row' },
            ...project.stack.map(s => el('span', { class: 'chip' }, s)),
          ),
          el('div', { class: 'proj-metric' },
            el('div', { class: 'proj-metric-val' }, project.metric.value),
            el('div', { class: 'proj-metric-label' }, project.metric.label),
          ),
        ),
      ),
    );

    if (hasMedia) {
      const galleryCol = el('div', { class: 'proj-gallery-col' });
      if (project.customVisual === 'geofence') galleryCol.appendChild(buildGeofence());
      else if (project.video) galleryCol.appendChild(buildLaptop(project));
      else galleryCol.appendChild(buildPhoneGallery(project));
      card.appendChild(galleryCol);
    }

    return card;
  }

  // ── phone gallery ───────────────────────────────────────────────────────────
  function buildPhoneGallery(project) {
    const wrap = el('div', { class: 'phone-wrap' });
    const screen = el('div', { class: 'phone-screen' });
    const imgs = project.images.map((src, i) =>
      el('img', { class: `phone-img${i === 0 ? ' active' : ''}`, src, alt: `${project.name} screen ${i + 1}` }),
    );
    imgs.forEach(img => screen.appendChild(img));

    const phone = el('div', { class: 'phone' },
      el('div', { class: 'phone-notch' }),
      screen,
    );
    wrap.appendChild(phone);

    const meta = el('div', { class: 'gallery-meta' },
      el('span', { class: 'mono current' }, '01'),
      el('span', { class: 'sep' }, '/'),
      el('span', { class: 'mono total' }, String(project.images.length).padStart(2, '0')),
    );

    const thumbs = el('div', { class: 'phone-thumbs' });
    project.images.forEach((src, i) => {
      const btn = el('button', {
        class: `phone-thumb${i === 0 ? ' active' : ''}`,
        'aria-label': `Show screen ${i + 1}`,
        onclick: () => setActive(i),
      }, el('img', { src, alt: '' }));
      thumbs.appendChild(btn);
    });

    function setActive(idx) {
      imgs.forEach((img, i) => img.classList.toggle('active', i === idx));
      thumbs.querySelectorAll('.phone-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
      meta.querySelector('.current').textContent = String(idx + 1).padStart(2, '0');
    }

    wrap.appendChild(thumbs);
    wrap.appendChild(meta);
    return wrap;
  }

  // ── laptop frame ────────────────────────────────────────────────────────────
  function buildLaptop(project) {
    const screen = el('div', { class: 'laptop-screen' });
    const caption = el('span', { class: 'mono', style: { color: 'var(--fg-3)' } }, '// chrome extension · animated preview');

    if (project.video) {
      const vid = document.createElement('video');
      vid.src = project.video;
      vid.autoplay = true;
      vid.loop = true;
      vid.muted = true;
      vid.playsInline = true;
      screen.appendChild(vid);
      caption.textContent = '// chrome extension · live demo';
    } else {
      // Default placeholder
      screen.appendChild(buildScanPlaceholder(project.name));
    }

    return el('div', { class: 'laptop-wrap' },
      el('div', { class: 'laptop' },
        el('div', { class: 'laptop-lid' },
          el('div', { class: 'laptop-bezel' },
            el('div', { class: 'laptop-cam' }),
            screen,
          ),
        ),
        el('div', { class: 'laptop-base-shelf' }),
        el('div', { class: 'laptop-base' },
          el('div', { class: 'laptop-notch' }),
        ),
      ),
      el('div', { class: 'laptop-caption' }, caption),
    );
  }

  function buildScanPlaceholder(name) {
    return el('div', { class: 'scan-wrap' },
      el('div', { class: 'scan-tabs' },
        el('span', { class: 'scan-dot' }),
        el('span', { class: 'scan-dot' }),
        el('span', { class: 'scan-dot' }),
        el('span', { class: 'scan-url' }, 'https://news.example.com/article'),
      ),
      el('div', { class: 'scan-page' },
        el('div', { class: 'scan-headline' }),
        el('div', { class: 'scan-line', style: { width: '90%' } }),
        el('div', { class: 'scan-line', style: { width: '78%' } }),
        el('div', { class: 'scan-flagged' }, el('span', { class: 'scan-flagged-tag' }, '● BLOCKED')),
        el('div', { class: 'scan-line', style: { width: '85%' } }),
        el('div', { class: 'scan-line', style: { width: '72%' } }),
        el('div', { class: 'scan-flagged' }, el('span', { class: 'scan-flagged-tag' }, '● BLOCKED')),
        el('div', { class: 'scan-line', style: { width: '60%' } }),
        el('div', { class: 'scan-bar' }),
      ),
      el('div', { class: 'scan-label' },
        el('span', { class: 'accent' }, '●'),
        ` ${name} — real-time scan`,
      ),
    );
  }

  // ── geofence animation ──────────────────────────────────────────────────────
  function buildGeofence() {
    const wrap = el('div', { class: 'phone-wrap' });
    const frame = document.createElement('div');
    frame.className = 'phone';
    frame.style.cssText = 'overflow: hidden; display: flex; flex-direction: column; padding: 0;';

    // Status bar + app bar
    const statusBar = el('div', { style: { height: '22px', padding: '0 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'oklch(0.18 0.013 240)', flexShrink: '0' } },
      el('span', { style: { fontSize: '9px', color: 'var(--fg)', fontWeight: '600' } }, '3:54'),
      el('div', { style: { display: 'flex', gap: '4px' } },
        el('span', { style: { fontSize: '7px', color: 'var(--fg)' } }, '●'),
        el('span', { style: { fontSize: '7px', color: 'var(--fg)' } }, '▲'),
        el('span', { style: { fontSize: '7px', color: 'var(--fg)' } }, '▮'),
      ),
    );
    const appBar = el('div', { style: { height: '36px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '8px', background: 'oklch(0.18 0.013 240)', borderBottom: '1px solid oklch(0.22 0.013 240)', flexShrink: '0' } },
      el('span', { style: { color: 'var(--fg)', fontSize: '16px', lineHeight: '1' } }, '‹'),
      el('span', { style: { color: 'var(--fg)', fontSize: '12px', fontWeight: '600' } }, 'Location Reminders'),
    );

    const mapWrap = document.createElement('div');
    mapWrap.style.cssText = 'flex: 1; position: relative; overflow: hidden;';

    const FENCE = { cx: 260, cy: 280, r: 70 };
    const path = [
      { x: 60, y: 80 }, { x: 110, y: 130 }, { x: 150, y: 200 }, { x: 180, y: 260 },
      { x: 220, y: 285 }, { x: 260, y: 280 }, { x: 300, y: 310 }, { x: 340, y: 380 },
      { x: 320, y: 450 },
    ];
    function pointAt(progress) {
      const segs = path.length - 1;
      const f = progress * segs;
      const i = Math.min(Math.floor(f), segs - 1);
      const local = f - i;
      const a = path[i], b = path[i + 1];
      return { x: a.x + (b.x - a.x) * local, y: a.y + (b.y - a.y) * local };
    }

    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 400 500');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.style.cssText = 'width: 100%; height: 100%; display: block;';

    svg.innerHTML = `
      <defs>
        <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.25 0.012 240)" stroke-width="0.5" />
        </pattern>
        <radialGradient id="fenceGrad" cx="50%" cy="50%">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.0" />
          <stop offset="60%" stop-color="var(--accent)" stop-opacity="0.06" />
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.18" />
        </radialGradient>
        <filter id="dotGlow"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>
      <rect width="400" height="500" fill="oklch(0.18 0.013 240)" />
      <rect width="400" height="500" fill="url(#mapGrid)" />
      <path d="M 0 120 Q 100 100 200 140 T 400 130" stroke="oklch(0.30 0.014 240)" stroke-width="6" fill="none" />
      <path d="M 0 320 Q 150 290 280 340 T 400 320" stroke="oklch(0.30 0.014 240)" stroke-width="6" fill="none" />
      <path d="M 90 0 Q 100 200 160 350 T 200 500" stroke="oklch(0.30 0.014 240)" stroke-width="5" fill="none" />
      <path d="M 320 0 Q 290 150 340 280 T 360 500" stroke="oklch(0.30 0.014 240)" stroke-width="5" fill="none" />
      <rect x="20" y="200" width="60" height="80" rx="4" fill="oklch(0.22 0.04 155)" opacity="0.4" />
      <rect x="280" y="160" width="100" height="60" rx="4" fill="oklch(0.22 0.018 240)" opacity="0.6" />
      <g class="pulse-rings"></g>
      <circle cx="${FENCE.cx}" cy="${FENCE.cy}" r="${FENCE.r}" fill="url(#fenceGrad)" />
      <circle cx="${FENCE.cx}" cy="${FENCE.cy}" r="${FENCE.r}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 4" opacity="0.7" />
      <text x="${FENCE.cx}" y="${FENCE.cy - FENCE.r - 8}" text-anchor="middle" fill="var(--accent)" font-size="11" font-family="var(--mono)" font-weight="600" letter-spacing="0.05em">GEOFENCE · 50m</text>
      <g transform="translate(${FENCE.cx}, ${FENCE.cy})">
        <circle r="14" fill="var(--accent)" opacity="0.2" />
        <circle r="8" fill="var(--accent)" />
        <circle r="3" fill="oklch(0.10 0.012 240)" />
      </g>
      <text x="${FENCE.cx}" y="${FENCE.cy + FENCE.r + 18}" text-anchor="middle" fill="var(--fg)" font-size="11" font-weight="600">Go to store</text>
      <text x="${FENCE.cx}" y="${FENCE.cy + FENCE.r + 32}" text-anchor="middle" fill="var(--fg-3)" font-size="9">Pick up groceries</text>
      <path class="trail" fill="none" stroke="oklch(0.65 0.18 240)" stroke-width="2" stroke-dasharray="3 3" opacity="0.7" />
      <circle class="dot-glow" r="14" fill="oklch(0.65 0.18 240)" opacity="0.3" filter="url(#dotGlow)" />
      <circle class="dot-bg" r="7" fill="oklch(0.10 0.012 240)" />
      <circle class="dot" r="5" fill="oklch(0.65 0.18 240)" />
      <g class="badge" transform="translate(14, 460)">
        <rect width="120" height="26" rx="13" fill="oklch(0.10 0.012 240 / 0.85)" stroke="oklch(0.30 0.014 240)" stroke-width="1" />
        <circle cx="14" cy="13" r="4" fill="oklch(0.65 0.18 240)" class="badge-dot" />
        <text x="26" y="17" fill="var(--fg)" font-size="10" font-family="var(--mono)" font-weight="500" class="badge-label">TRACKING</text>
      </g>
    `;

    mapWrap.appendChild(svg);

    const notif = el('div', {
      style: {
        position: 'absolute', top: '8px', left: '8px', right: '8px',
        background: 'oklch(0.16 0.012 240 / 0.96)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--line-2)',
        borderRadius: '10px', padding: '8px 10px',
        display: 'flex', gap: '8px',
        transition: 'transform 400ms cubic-bezier(0.2, 0.9, 0.3, 1.2), opacity 300ms',
        boxShadow: '0 8px 16px oklch(0 0 0 / 0.4)',
        transform: 'translateY(-130%)', opacity: '0',
      },
    },
      el('div', { style: { width: '28px', height: '28px', background: 'var(--accent-dim)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' } },
        (() => {
          const icon = document.createElementNS(NS, 'svg');
          icon.setAttribute('width', '18'); icon.setAttribute('height', '18'); icon.setAttribute('viewBox', '0 0 24 24'); icon.setAttribute('fill', 'none');
          icon.innerHTML = '<path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" stroke="var(--accent)" stroke-width="2" /><circle cx="12" cy="9" r="2.5" fill="var(--accent)" />';
          return icon;
        })(),
      ),
      el('div', { style: { minWidth: '0', flex: '1' } },
        el('div', { style: { display: 'flex', gap: '4px', fontSize: '8px', color: 'var(--fg-2)' } },
          el('span', null, 'Location Reminders'),
          el('span', { style: { color: 'var(--fg-3)' } }, '· now'),
        ),
        el('div', { style: { fontSize: '11px', fontWeight: '700', color: 'var(--fg)', marginTop: '1px' } }, 'Go to store'),
        el('div', { style: { fontSize: '9px', color: 'var(--fg-2)', marginTop: '1px', lineHeight: '1.3' } }, "You've arrived. Don't forget the groceries."),
      ),
    );
    mapWrap.appendChild(notif);

    const bottomBar = el('div', {
      style: { height: '48px', background: 'oklch(0.10 0.005 240)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 12px', flexShrink: '0' },
    },
      el('div', { style: { width: '36px', height: '36px', background: 'var(--accent)', color: 'oklch(0.10 0.012 240)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: '600', boxShadow: '0 4px 12px oklch(0.65 0.16 155 / 0.4)' } }, '+'),
    );

    frame.appendChild(statusBar);
    frame.appendChild(appBar);
    frame.appendChild(mapWrap);
    frame.appendChild(bottomBar);

    wrap.appendChild(frame);
    wrap.appendChild(el('div', { class: 'laptop-caption' },
      el('span', { class: 'mono', style: { color: 'var(--fg-3)' } }, '// geofence enter/exit triggers · ~50m radius'),
    ));

    // Animation loop
    const trail = svg.querySelector('.trail');
    const dotGlow = svg.querySelector('.dot-glow');
    const dotBg = svg.querySelector('.dot-bg');
    const dot = svg.querySelector('.dot');
    const pulseRings = svg.querySelector('.pulse-rings');
    const badge = svg.querySelector('.badge rect');
    const badgeDot = svg.querySelector('.badge-dot');
    const badgeLabel = svg.querySelector('.badge-label');

    let start;
    const DURATION = 7000;
    const NOTIF_AT = 0.62;

    function frameLoop(ts) {
      if (!start) start = ts;
      const elapsed = (ts - start) % DURATION;
      const t = elapsed / DURATION;
      const showNotif = t > NOTIF_AT && t < NOTIF_AT + 0.30;

      // dot
      const p = pointAt(t);
      dotGlow.setAttribute('cx', p.x); dotGlow.setAttribute('cy', p.y);
      dotBg.setAttribute('cx', p.x); dotBg.setAttribute('cy', p.y);
      dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y);

      // trail
      const SAMPLES = 40;
      let trailD = '';
      for (let i = 0; i <= SAMPLES; i++) {
        const tp = pointAt((i / SAMPLES) * t);
        trailD += `${i === 0 ? 'M' : 'L'} ${tp.x.toFixed(1)} ${tp.y.toFixed(1)} `;
      }
      trail.setAttribute('d', trailD);

      // pulse rings
      let ringsHTML = '';
      [0, 0.33, 0.66].forEach(offset => {
        const phase = (t + offset) % 1;
        const scale = 1 + phase * 0.6;
        const opacity = (1 - phase) * 0.5;
        ringsHTML += `<circle cx="${FENCE.cx}" cy="${FENCE.cy}" r="${FENCE.r * scale}" fill="none" stroke="var(--accent)" stroke-width="1.5" opacity="${opacity}" />`;
      });
      pulseRings.innerHTML = ringsHTML;

      // notif
      notif.style.transform = showNotif ? 'translateY(0)' : 'translateY(-130%)';
      notif.style.opacity = showNotif ? '1' : '0';

      // in-fence
      const dist = Math.hypot(p.x - FENCE.cx, p.y - FENCE.cy);
      const inside = dist < FENCE.r;
      badge.setAttribute('stroke', inside ? 'var(--accent)' : 'oklch(0.30 0.014 240)');
      badgeDot.setAttribute('fill', inside ? 'var(--accent)' : 'oklch(0.65 0.18 240)');
      badgeDot.setAttribute('opacity', inside ? String(0.6 + 0.4 * Math.sin(elapsed / 80)) : '1');
      badgeLabel.textContent = inside ? 'IN FENCE' : 'TRACKING';

      requestAnimationFrame(frameLoop);
    }
    requestAnimationFrame(frameLoop);

    return wrap;
  }

  // ── skills ──────────────────────────────────────────────────────────────────
  function buildSkills() {
    return el('section', { id: 'skills', class: 'section' },
      el('div', { class: 'container' },
        el('div', { class: 'section-label' }, el('span', { class: 'accent' }, '04'), ' // stack'),
        el('h2', { class: 'section-title' }, 'What I work with.'),
        el('div', { class: 'skills-grid' },
          ...SKILLS.map((g, i) => el('div', { class: 'skills-group' },
            el('div', { class: 'skills-group-head' },
              el('span', { class: 'num' }, String(i + 1).padStart(2, '0')),
              el('span', null, g.group),
            ),
            el('div', { class: 'skills-chips' },
              ...g.items.map(s => el('span', { class: 'chip' }, s)),
            ),
          )),
        ),
      ),
    );
  }

  // ── contact ─────────────────────────────────────────────────────────────────
  function buildContact() {
    let copied = false;
    const copyBtnLabel = () => copied ? '✓ copied' : 'copy email';

    const copyBtnIcon = el('button', { class: 'copy-btn' }, '⎘');
    const copyBtnText = el('button', { class: 'btn' }, el('span', null, 'copy email'));

    const onCopy = (e) => {
      if (e) e.preventDefault();
      try { navigator.clipboard.writeText(PROFILE.email); } catch {}
      copied = true;
      copyBtnIcon.textContent = '✓';
      copyBtnText.querySelector('span').textContent = '✓ copied';
      setTimeout(() => {
        copied = false;
        copyBtnIcon.textContent = '⎘';
        copyBtnText.querySelector('span').textContent = 'copy email';
      }, 1800);
    };
    copyBtnIcon.addEventListener('click', onCopy);
    copyBtnText.addEventListener('click', onCopy);

    const field = (k, v, opts = {}) => {
      const row = el('div', { class: 'contact-row' },
        el('span', { class: 'contact-k' }, k.padEnd(8, ' ')),
        el('span', { class: 'contact-sep' }, '::'),
      );
      if (opts.href) row.appendChild(el('a', { href: opts.href, target: '_blank', rel: 'noopener', class: 'contact-link' }, v));
      else if (opts.status) row.appendChild(el('span', { class: 'contact-v status' }, `● ${v}`));
      else row.appendChild(el('span', { class: 'contact-v' }, v));
      if (opts.copyable) row.appendChild(copyBtnIcon);
      return row;
    };

    return el('section', { id: 'contact', class: 'contact' },
      el('div', { class: 'container' },
        el('div', { class: 'section-label' }, el('span', { class: 'accent' }, '05'), ' // contact'),
        el('div', { class: 'contact-wrap' },
          el('h2', { class: 'contact-headline' },
            'Have a ',
            el('span', { class: 'accent' }, 'project'),
            '?',
            el('br'),
            "Let's talk.",
          ),
          el('p', { class: 'contact-sub' },
            'Open to freelance mobile work and longer engineering contracts. Email is the fastest way to reach me — I reply within a day.',
          ),
          el('div', { class: 'terminal contact-terminal' },
            el('div', { class: 'terminal-bar' },
              el('span', { class: 'dot', style: { background: '#ff5f57' } }),
              el('span', { class: 'dot', style: { background: '#febc2e' } }),
              el('span', { class: 'dot', style: { background: '#28c840' } }),
              el('span', { class: 'title' }, '~ — send-message'),
            ),
            el('div', { class: 'terminal-body', style: { padding: '24px' } },
              el('div', { style: { marginBottom: '16px' } },
                el('span', { class: 'prompt' }, 'andrew@cairo'),
                el('span', { class: 'comment' }, ' ~ '),
                el('span', { class: 'cmd' }, '$ cat contact.txt'),
              ),
              el('div', { class: 'contact-fields' },
                field('email', PROFILE.email, { copyable: true }),
                field('phone', PROFILE.phone),
                field('github', PROFILE.github.replace('https://', ''), { href: PROFILE.github }),
                field('linkedin', PROFILE.linkedin.replace('https://www.', ''), { href: PROFILE.linkedin }),
                field('status', 'available — open to projects', { status: true }),
              ),
              el('div', { class: 'contact-actions' },
                el('a', { class: 'btn primary', href: `mailto:${PROFILE.email}?subject=Project%20inquiry` },
                  el('span', null, '$ compose --email'),
                  el('span', { class: 'arrow' }, '→'),
                ),
                copyBtnText,
              ),
            ),
          ),
        ),
      ),
      el('footer', { class: 'footer' },
        el('div', { class: 'container footer-inner' },
          el('span', null, `© 2026 ${PROFILE.name}`),
          el('span', null, 'built with html, css & a terminal mindset'),
        ),
      ),
    );
  }

  // ── boot ────────────────────────────────────────────────────────────────────
  function boot() {
    applyAccent(state.accent);
    const app = document.getElementById('app');
    app.appendChild(buildNav());
    app.appendChild(buildHero());
    app.appendChild(buildAbout());
    app.appendChild(buildWork());
    app.appendChild(buildProjects());
    app.appendChild(buildSkills());
    app.appendChild(buildContact());
    startHeroTyping();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
