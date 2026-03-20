/* MERIDIAN SHARED JS v1.1 */
(function() {

  const NAV_LINKS = [
    { href: '../index.html', label: 'Home' },
    { href: '../briefs/day19.html', label: 'Day 19' },
    { href: '../deep_intel/financial-scan-day13.html', label: 'Markets' },
    { href: '../deep_intel/global-south-map.html', label: 'Regions' },
    { href: '../reports/index.html', label: 'Reports' }
  ];

  function buildHeader(activePage) {
    const links = NAV_LINKS.map(l =>
      `<a href="${l.href}"${l.href.includes(activePage || 'NONE') ? ' class="active"' : ''}>${l.label}</a>`
    ).join('');
    return `<header class="m-header">
      <div class="m-header-inner">
        <a href="../index.html" class="m-logo">Meridian <em>Brief</em></a>
        <div class="m-nav-rule"></div>
        <nav class="m-nav">${links}
          <a href="https://twitter.com/Meridiantoday_" target="_blank">@Meridiantoday_</a>
          <div class="m-nav-live"><div class="m-nav-live-dot"></div>Day 19 · Live</div>
        </nav>
        <a href="https://beehiiv.com" target="_blank" class="m-header-cta">Free Newsletter →</a>
      </div>
    </header>`;
  }

  function buildFooter() {
    return `<footer class="m-footer">
      <div class="m-footer-inner">
        <div>
          <div class="ft-brand">Meridian</div>
          <div class="ft-tag">Intelligence from the South. For the South.</div>
          <div class="ft-desc">Daily intelligence briefings on what global crises mean for the Caribbean, Africa, South Asia and the Global South. Tracking Operation Epic Fury from Day 1.</div>
        </div>
        <div>
          <div class="ft-col">Briefs</div>
          <div class="ft-links">
            <a href="../briefs/day19.html">Day 19 · March 19 · Latest</a>
            <a href="../briefs/day18.html">Day 18 · March 18</a>
            <a href="../briefs/day14.html">Day 14 · March 14</a>
            <a href="../briefs/day13.html">Day 13 · March 13</a>
            <a href="../briefs/day11.html">Day 11 · March 11</a>
            <a href="../briefs/day8.html">Day 8 · March 7</a>
          </div>
        </div>
        <div>
          <div class="ft-col">Intelligence</div>
          <div class="ft-links">
            <a href="../deep_intel/financial-scan-day13.html">Financial Scan · Day 13</a>
            <a href="../deep_intel/seven-threads.html">Deep Synthesis · 7 Threads</a>
            <a href="../deep_intel/global-south-map.html">Global South Impact Map</a>
            <a href="../deep_intel/war-synthesis.html">War Synthesis · 16 Slides</a>
            <a href="../reports/index.html">Special Reports</a>
            <a href="../index.html">Full Archive</a>
          </div>
        </div>
      </div>
      <div class="m-footer-bot">
        <div class="ft-copy">© 2026 Meridian Brief · @Meridiantoday_ · @meridian.today</div>
        <div class="ft-copy">Intelligence from the South. For the South.</div>
      </div>
    </footer>`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Inject header
    const headerEl = document.getElementById('m-header');
    if (headerEl) headerEl.outerHTML = buildHeader(headerEl.dataset.page);

    // Inject footer
    const footerEl = document.getElementById('m-footer');
    if (footerEl) footerEl.outerHTML = buildFooter();

    // Scroll progress bar
    const scrollBar = document.getElementById('scrollBar');
    if (scrollBar) {
      window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        scrollBar.style.width = ((window.scrollY / total) * 100) + '%';
      });
    }

    // Reading time
    const rtEl = document.getElementById('readingTime');
    const pageEl = document.querySelector('.page');
    if (rtEl && pageEl) {
      const words = pageEl.innerText.trim().split(/\s+/).length;
      rtEl.textContent = Math.ceil(words / 220) + ' min read';
    }

    // Active nav highlighting
    const path = window.location.pathname;
    document.querySelectorAll('.m-nav a').forEach(a => {
      if (a.href && path.endsWith(a.getAttribute('href').replace('../', ''))) {
        a.classList.add('active');
      }
    });
  });

  window.Meridian = { buildHeader, buildFooter };
})();
