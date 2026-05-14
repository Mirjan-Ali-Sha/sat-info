// UI Elements
const els = {
  tabs: document.querySelectorAll('.nav-tab'),
  tabContents: document.querySelectorAll('.tab-content'),
  satGrid: document.getElementById('satGrid'),
  satFilters: document.getElementById('satFilters'),
  idxFilters: document.getElementById('idxFilters'),
  idxTableBody: document.getElementById('idxTableBody'),
  xrefHead: document.getElementById('xrefHead'),
  xrefBody: document.getElementById('xrefBody'),
  searchInput: document.getElementById('searchInput'),
  headerSearchInput: document.getElementById('headerSearchInput'),
  mobileMenuToggle: document.getElementById('mobileMenuToggle'),
  mainTabs: document.getElementById('mainTabs'),
  statSats: document.getElementById('stat-sats'),
  statIndices: document.getElementById('stat-indices'),
  themeToggle: document.getElementById('themeToggle'),
  themeIconDark: document.getElementById('themeIconDark'),
  themeIconLight: document.getElementById('themeIconLight'),
  
  // Modal
  modal: document.getElementById('indexModal'),
  modalClose: document.getElementById('modalClose'),
  modalTitle: document.getElementById('modalTitle'),
  modalName: document.getElementById('modalName'),
  modalDesc: document.getElementById('modalDesc'),
  modalCat: document.getElementById('modalCat'),
  modalFormula: document.getElementById('modalFormula'),
  modalApps: document.getElementById('modalApps'),
  modalRef: document.getElementById('modalRef'),
  modalRangeWrap: document.getElementById('modalRangeWrap'),
  modalRangeBar: document.getElementById('modalRangeBar'),
  modalRangeLabels: document.getElementById('modalRangeLabels'),
  modalRange: document.getElementById('modalRange'),
  modalSatCalcs: document.getElementById('modalSatCalcs'),
  modalSatCalcSection: document.getElementById('modalSatCalcSection'),
  modalIdbLink: document.getElementById('modalIdbLink'),
};

// State
let state = {
  activeSatFilter: 'all',
  activeIdxFilter: 'all',
  searchQuery: '',
};

// Map colors for categories
const catColors = {
  'msi': 'var(--cat-msi)',
  'sar': 'var(--cat-sar)',
  'hyperspectral': 'var(--cat-hyper)',
  'moderate': 'var(--cat-moderate)',
  'commercial': 'var(--cat-commercial)',
  'legacy': 'var(--cat-legacy)'
};

const bandColors = {
  'Coastal': '#4338ca', 'Blue': '#3b82f6', 'Green': '#22c55e', 
  'Yellow': '#eab308', 'Red': '#ef4444', 'RedEdge': '#b91c1c', 
  'NIR': '#991b1b', 'NIR-N': '#7f1d1d', 'SWIR': '#d97706',
  'SWIR1': '#d97706', 'SWIR2': '#b45309', 'TIR': '#be185d',
  'TIR1': '#be185d', 'TIR2': '#9d174d', 'Pan': '#9ca3af',
  'VV Pol': '#06b6d4', 'VH Pol': '#0891b2', 'HH Pol': '#0284c7', 'HV Pol': '#0369a1'
};

// Initialization
function init() {
  // Sync satellite indices dynamically from INDICES array
  SATELLITES.forEach(sat => {
    if (!sat.indices) sat.indices = [];
    INDICES.forEach(idx => {
      if (idx.sats && idx.sats[sat.id] && !sat.indices.includes(idx.id)) {
        sat.indices.push(idx.id);
      }
    });
  });

  els.statSats.textContent = SATELLITES.length;
  els.statIndices.textContent = INDICES.length;

  setupTheme();
  setupMobileMenu();
  setupTabs();
  setupSearch();
  setupModal();
  setupHashRouting();
  
  renderSatFilters();
  renderIdxFilters();
  
  renderSats();
  renderIndices();
  renderCrossReference();

  handleHash();
}

// Hash Routing
function setupHashRouting() {
  window.addEventListener('hashchange', handleHash);
}

function handleHash() {
  const hash = window.location.hash.substring(1);
  
  // Close modal by default when switching tabs via hash
  els.modal.classList.remove('active');
  
  if (!hash || hash === 'datasets') {
    if (!els.tabs[0].classList.contains('active')) els.tabs[0].click();
    return;
  }
  
  if (hash === 'indices') {
    if (!els.tabs[1].classList.contains('active')) els.tabs[1].click();
    return;
  }
  
  if (hash === 'cross-ref') {
    if (!els.tabs[2].classList.contains('active')) els.tabs[2].click();
    return;
  }
  
  if (hash.startsWith('index=')) {
    const id = hash.split('=')[1];
    openIndexModal(id, true);
  } else if (hash.startsWith('sat=')) {
    const id = hash.split('=')[1];
    const card = document.getElementById('sat-' + id);
    if (card && !card.classList.contains('expanded')) {
      els.tabs[0].click();
      card.classList.add('expanded');
      setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    }
  }
}

// Tabs
function setupTabs() {
  els.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      els.tabs.forEach(t => t.classList.remove('active'));
      els.tabContents.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      const targetId = tab.dataset.target;
      document.getElementById(targetId).classList.add('active');
      
      if (targetId === 'tab-satellites') history.replaceState(null, null, '#datasets');
      else if (targetId === 'tab-indices') history.replaceState(null, null, '#indices');
      else if (targetId === 'tab-xref') history.replaceState(null, null, '#cross-ref');

      // Clear search on tab switch
      state.searchQuery = '';
      if (els.searchInput) els.searchInput.value = '';
      if (els.headerSearchInput) els.headerSearchInput.value = '';
      renderSats();
      renderIndices();

      // Close mobile menu
      if(els.mainTabs) els.mainTabs.classList.remove('menu-open');
    });
  });
}

// Mobile Menu
function setupMobileMenu() {
  if (els.mobileMenuToggle) {
    els.mobileMenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      els.mainTabs.classList.toggle('menu-open');
    });

    // Close menu on outside click (use pointerdown for better mobile support)
    document.addEventListener('pointerdown', (e) => {
      if (els.mainTabs && els.mainTabs.classList.contains('menu-open')) {
        // If the click is NOT inside the menu AND NOT on the toggle button
        if (!els.mainTabs.contains(e.target) && !els.mobileMenuToggle.contains(e.target)) {
          els.mainTabs.classList.remove('menu-open');
        }
      }
    });

    // Close menu on scroll (listen on multiple targets just in case)
    const closeOnScroll = () => {
      if (els.mainTabs && els.mainTabs.classList.contains('menu-open')) {
        els.mainTabs.classList.remove('menu-open');
      }
    };
    window.addEventListener('scroll', closeOnScroll, { passive: true });
    document.addEventListener('touchmove', closeOnScroll, { passive: true });
  }
}

// Theme
function setupTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    document.documentElement.setAttribute('data-theme', 'light');
    els.themeIconDark.style.display = 'none';
    els.themeIconLight.style.display = 'block';
  }
  
  els.themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      els.themeIconDark.style.display = 'block';
      els.themeIconLight.style.display = 'none';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      els.themeIconDark.style.display = 'none';
      els.themeIconLight.style.display = 'block';
    }
  });
}

// Search
function setupSearch() {
  els.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    if(els.headerSearchInput) els.headerSearchInput.value = e.target.value;
    renderSats();
    renderIndices();
  });
  
  if (els.headerSearchInput) {
    els.headerSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      els.searchInput.value = e.target.value;
      renderSats();
      renderIndices();
    });
  }
}

// Filters
function renderSatFilters() {
  els.satFilters.innerHTML = SAT_CATEGORIES.map(cat => {
    let count;
    if (cat.id === 'all') count = SATELLITES.length;
    else if (cat.id === 'free' || cat.id === 'paid') count = SATELLITES.filter(s => s.pricing === cat.id).length;
    else count = SATELLITES.filter(s => s.category === cat.id).length;
    return `
      <button class="filter-chip ${state.activeSatFilter === cat.id ? 'active' : ''}" data-id="${cat.id}">
        ${cat.icon} ${cat.label} <span class="count">${count}</span>
      </button>
    `;
  }).join('');

  els.satFilters.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.activeSatFilter = chip.dataset.id;
      renderSatFilters();
      renderSats();
    });
  });
}

function renderIdxFilters() {
  els.idxFilters.innerHTML = INDEX_CATEGORIES.map(cat => {
    const count = cat.id === 'all' ? INDICES.length : INDICES.filter(i => i.cat === cat.id).length;
    return `
      <button class="filter-chip ${state.activeIdxFilter === cat.id ? 'active' : ''}" data-id="${cat.id}">
        ${cat.icon} ${cat.label} <span class="count">${count}</span>
      </button>
    `;
  }).join('');

  els.idxFilters.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.activeIdxFilter = chip.dataset.id;
      renderIdxFilters();
      renderIndices();
    });
  });
}

// Satellites
function renderSats() {
  let filtered = SATELLITES;
  
  if (state.activeSatFilter !== 'all') {
    if (state.activeSatFilter === 'free' || state.activeSatFilter === 'paid') {
      filtered = filtered.filter(s => s.pricing === state.activeSatFilter);
    } else {
      filtered = filtered.filter(s => s.category === state.activeSatFilter);
    }
  }
  
  if (state.searchQuery) {
    const q = state.searchQuery;
    filtered = filtered.filter(s => 
      s.name.toLowerCase().includes(q) || 
      s.operator.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.bands.some(b => b.name.toLowerCase().includes(q) || b.label.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    els.satGrid.innerHTML = `<div class="no-results">No satellites found matching your criteria.</div>`;
    return;
  }

  els.satGrid.innerHTML = filtered.map(sat => {
    const catLabel = SAT_CATEGORIES.find(c => c.id === sat.category)?.label || sat.category;
    const catColor = catColors[sat.category] || 'var(--accent-blue)';
    
    let stacHtml = '';
    if (sat.stac && sat.stac.length > 0) {
      stacHtml = `
        <div class="stac-section">
          <h4>STAC API Endpoints</h4>
          ${sat.stac.map(s => `
            <div class="stac-item">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="stac-item__provider">${s.p}</span>
                ${s.d ? `<a href="${s.d}" target="_blank" rel="noopener noreferrer" style="font-size: 0.75rem; color: var(--accent-blue); text-decoration: none; display:flex; align-items:center; gap:4px;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                  API Docs
                </a>` : ''}
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
                <span class="stac-item__url">${s.u}</span>
                <button class="stac-copy" data-url="${s.u}">Copy</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    let indicesHtml = '';
    if (sat.indices && sat.indices.length > 0) {
      indicesHtml = `
        <div class="stac-section" style="margin-bottom: 1rem;">
          <h4>Compatible Indices</h4>
          <div class="modal__tags">
            ${sat.indices.map(idxId => {
              const idx = INDICES.find(i => i.id === idxId);
              if (!idx) return '';
              return `<span class="modal__tag" style="cursor:pointer" onclick="event.stopPropagation(); openIndexModal('${idx.id}')" title="${idx.name}">${idx.abbr}</span>`;
            }).join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="sat-card" id="sat-${sat.id}" style="--cat-color: ${catColor}" onclick="toggleSatCard('${sat.id}')">
        <div class="sat-card__head">
          <div>
            <div class="sat-card__name">${sat.name}</div>
            <div class="sat-card__operator">${sat.operator} • Launched ${sat.launch}</div>
          </div>
        </div>
        
        <div class="sat-card__badges">
          <span class="badge badge--cat">${catLabel}</span>
          <span class="badge ${sat.status.includes('Active') ? 'badge--active' : 'badge--decom'}">${sat.status}</span>
          <span class="badge ${sat.pricing === 'free' ? 'badge--free' : 'badge--paid'}">${sat.pricing === 'free' ? 'Free + Open' : 'Commercial'}</span>
        </div>

        <div class="sat-card__specs">
          <div class="spec">
            <span class="spec__label">Resolution</span>
            <span class="spec__value">${sat.spatial}</span>
          </div>
          <div class="spec">
            <span class="spec__label">Revisit</span>
            <span class="spec__value">${sat.temporal}</span>
          </div>
        </div>

        <div class="sat-card__expand">
          View full specs & bands <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>

        <div class="sat-detail" onclick="event.stopPropagation()">
          <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:1rem">${sat.desc}</p>
          
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:1rem">
             <div class="spec"><span class="spec__label">Orbit</span><span class="spec__value" style="font-size:0.8rem;font-weight:400">${sat.orbit}</span></div>
             <div class="spec"><span class="spec__label">Swath</span><span class="spec__value" style="font-size:0.8rem;font-weight:400">${sat.swath}</span></div>
          </div>

          ${sat.contact ? `
            <div style="margin-bottom: 1.5rem;">
              <a href="${sat.contact}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:6px; padding: 6px 12px; background: rgba(0, 212, 255, 0.05); color: var(--accent-blue); border: 1px solid var(--accent-blue); border-radius: 4px; font-size: 0.8rem; text-decoration: none; font-weight: 600;">
                <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                Contact Provider
              </a>
            </div>
          ` : ''}

          <table class="band-table">
            <thead>
              <tr><th>Band</th><th>Type</th><th>Wavelength</th><th>GSD</th></tr>
            </thead>
            <tbody>
              ${sat.bands.map(b => {
                const bCol = bandColors[b.label] || '#475569';
                return `
                <tr>
                  <td><strong>${b.name}</strong></td>
                  <td><span class="band-color" style="background:${bCol}"></span>${b.label}</td>
                  <td>${b.wl}</td>
                  <td>${b.gsd}</td>
                </tr>
              `}).join('')}
            </tbody>
          </table>
          
          ${indicesHtml}
          ${stacHtml}
        </div>
      </div>
    `;
  }).join('');

  // Setup STAC copy buttons
  document.querySelectorAll('.stac-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(btn.dataset.url);
      const old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = old, 2000);
    });
  });
}

window.toggleSatCard = function(id) {
  const card = document.getElementById('sat-' + id);
  if (!card) return;
  const isExpanded = card.classList.contains('expanded');
  
  if (isExpanded) {
    card.classList.remove('expanded');
    if (window.location.hash === '#sat=' + id) {
      window.location.hash = '';
    }
  } else {
    // Optionally close others
    // document.querySelectorAll('.sat-card.expanded').forEach(c => c.classList.remove('expanded'));
    card.classList.add('expanded');
    window.location.hash = 'sat=' + id;
  }
};

// Indices
function renderIndices() {
  let filtered = INDICES;
  
  if (state.activeIdxFilter !== 'all') {
    filtered = filtered.filter(i => i.cat === state.activeIdxFilter);
  }
  
  if (state.searchQuery) {
    const q = state.searchQuery;
    filtered = filtered.filter(i => 
      i.name.toLowerCase().includes(q) || 
      i.abbr.toLowerCase().includes(q) ||
      i.formula.toLowerCase().includes(q) ||
      (i.app && i.app.some(a => a.toLowerCase().includes(q)))
    );
  }

  if (filtered.length === 0) {
    els.idxTableBody.innerHTML = `<tr><td colspan="5" class="no-results">No indices found matching your criteria.</td></tr>`;
    return;
  }

  els.idxTableBody.innerHTML = filtered.map(idx => {
    const catObj = INDEX_CATEGORIES.find(c => c.id === idx.cat);
    const appText = idx.app ? idx.app.join(', ') : '-';
    
    return `
      <tr onclick="openIndexModal('${idx.id}')">
        <td class="idx-abbr">${idx.abbr}</td>
        <td class="idx-name">${idx.name}</td>
        <td><span class="idx-cat-badge ${idx.cat}">${catObj?.label || idx.cat}</span></td>
        <td>${appText}</td>
        <td class="idx-formula">${idx.formula}</td>
      </tr>
    `;
  }).join('');
}

// Modal
function setupModal() {
  const closeModal = () => {
    els.modal.classList.remove('active');
    if (window.location.hash.startsWith('#index=')) {
      window.location.hash = '';
    }
  };
  els.modalClose.addEventListener('click', closeModal);
  els.modal.addEventListener('click', (e) => {
    if (e.target === els.modal) closeModal();
  });
}

window.openIndexModal = function(id, skipHash = false) {
  const idx = INDICES.find(i => i.id === id);
  if (!idx) return;

  els.modalTitle.textContent = idx.abbr;
  els.modalName.textContent = idx.name;
  els.modalDesc.textContent = idx.desc || 'No description available.';
  
  const catObj = INDEX_CATEGORIES.find(c => c.id === idx.cat);
  els.modalCat.textContent = catObj?.label || idx.cat;
  els.modalCat.className = `idx-cat-badge ${idx.cat}`;
  
  els.modalFormula.textContent = idx.formula;
  
  els.modalApps.innerHTML = idx.app ? idx.app.map(a => `<span class="modal__tag">${a}</span>`).join('') : '-';
  els.modalRef.textContent = idx.ref || '-';
  els.modalRange.textContent = idx.range ? `Typical range: ${idx.range}` : '';

  if (idx.idb) {
    els.modalIdbLink.href = idx.idb;
    els.modalIdbLink.style.display = 'inline-flex';
  } else {
    els.modalIdbLink.style.display = 'none';
  }

  // Render range map visualizer
  if (idx.rangeMap && idx.rangeMap.length > 0) {
    els.modalRangeWrap.style.display = 'block';
    els.modalRangeBar.innerHTML = '';
    els.modalRangeLabels.innerHTML = '';
    
    idx.rangeMap.forEach(item => {
      const segment = document.createElement('div');
      segment.className = 'range-segment';
      segment.style.backgroundColor = item.color;
      els.modalRangeBar.appendChild(segment);
      
      const legendItem = document.createElement('div');
      legendItem.className = 'range-legend-item';
      legendItem.innerHTML = `<div class="range-color-box" style="background-color:${item.color}"></div>
                              <div><strong>${item.range}</strong> <span style="color:var(--text-muted);font-size:0.75rem">${item.label}</span></div>`;
      els.modalRangeLabels.appendChild(legendItem);
    });
  } else {
    els.modalRangeWrap.style.display = 'none';
  }

  if (idx.sats && Object.keys(idx.sats).length > 0) {
    els.modalSatCalcs.innerHTML = Object.entries(idx.sats).map(([satId, formula]) => {
      const sat = SATELLITES.find(s => s.id === satId);
      const satName = sat ? sat.name : satId;
      return `
        <li>
          <span class="sat-name">${satName}</span>
          <span class="sat-calc">${formula}</span>
        </li>
      `;
    }).join('');
    els.modalSatCalcSection.style.display = 'block';
  } else {
    els.modalSatCalcSection.style.display = 'none';
  }

  els.modal.classList.add('active');
  if (!skipHash) {
    window.location.hash = 'index=' + id;
  }
};

// Cross Reference
function renderCrossReference() {
  const categories = INDEX_CATEGORIES.filter(c => c.id !== 'all');
  
  // Header
  els.xrefHead.innerHTML = `
    <tr>
      <th>Satellite</th>
      ${categories.map(c => `<th>${c.label}</th>`).join('')}
    </tr>
  `;

  // Body
  els.xrefBody.innerHTML = SATELLITES.map(sat => {
    // For each category, see if the satellite has an index in that category
    const catChecks = categories.map(cat => {
      const satIndices = sat.indices || [];
      // Find indices that match both this satellite and this category
      const hasIndex = INDICES.some(idx => 
        idx.cat === cat.id && satIndices.includes(idx.id)
      );
      
      return `<td>${hasIndex ? '<span class="xref-check">●</span>' : '<span class="xref-none">-</span>'}</td>`;
    }).join('');

    return `
      <tr>
        <th>${sat.name}</th>
        ${catChecks}
      </tr>
    `;
  }).join('');
}

// Start
document.addEventListener('DOMContentLoaded', init);
