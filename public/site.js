async function fetchSiteData() {
  const res = await fetch('/api/site-data');
  if (!res.ok) throw new Error('Failed to load site data');
  return res.json();
}

function createDishCard(item) {
  return `
    <article class="dish-card">
      <img src="${item.image}" alt="${item.name}">
      <div class="dish-body">
        <div class="dish-top">
          <h3>${item.name}</h3>
          <span>${item.price} L</span>
        </div>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

function applyText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function openMenuModal(item) {
  const modal = document.getElementById('menuItemModal');
  if (!modal) return;

  document.getElementById('modalItemName').textContent = item.name || '';
  document.getElementById('modalItemPrice').textContent = `${item.price} L`;
  document.getElementById('modalItemIngredients').textContent = item.ingredients || 'Nuk jane shtuar ende perberesit.';
  document.getElementById('modalItemDescription').textContent = item.description || 'Nuk ka pershkrim.';
  const img = document.getElementById('modalItemImage');
  img.src = item.image || '';
  img.alt = item.name || 'Menu item';

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenuModal() {
  const modal = document.getElementById('menuItemModal');
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderMenuCategories(siteData) {
  const container = document.getElementById('menuCategoriesContainer');
  if (!container) return;

  container.innerHTML = (siteData.menuCategories || []).map((category, index) => `
    <div class="menu-category-block ${index === 0 ? 'open' : ''}">
      <div class="menu-category-header" data-category-toggle>
        <div>
          <h3>${category.name}</h3>
          <div class="menu-category-meta">${(category.items || []).length} artikuj</div>
        </div>
        <div class="menu-category-toggle">+</div>
      </div>
      <div class="menu-category-items">
        ${(category.items || []).map(item => `
          <div class="menu-line-item" data-menu-item='${JSON.stringify(item).replace(/'/g, "&#39;")}'>
            <div class="menu-line-left">
              <div class="menu-line-name">${item.name}</div>
              <div class="menu-line-hint">Kliko per foto, perberesit dhe detaje</div>
            </div>
            <div class="menu-line-price">${item.price} L</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-category-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });

  container.querySelectorAll('[data-menu-item]').forEach(node => {
    node.addEventListener('click', () => {
      const raw = node.getAttribute('data-menu-item').replace(/&#39;/g, "'");
      openMenuModal(JSON.parse(raw));
    });
  });
}

function applySiteData(siteData) {
  [
    ['brandTitle', siteData.brandTitle],
    ['brandSub', siteData.brandSub],
    ['heroBadge', siteData.heroBadge],
    ['heroTitle', siteData.heroTitle],
    ['heroDescription', siteData.heroDescription],
    ['aboutTag', siteData.aboutTag],
    ['aboutTitle', siteData.aboutTitle],
    ['aboutLead', siteData.aboutLead],
    ['aboutDescription', siteData.aboutDescription],
    ['contactAddress', siteData.contactAddress],
    ['contactPhone', siteData.contactPhone],
    ['contactHours', siteData.contactHours],
    ['contactInstagram', siteData.contactInstagram],
    ['contactFacebook', siteData.contactFacebook],
    ['contactWhatsapp', siteData.whatsappNumber],
    ['menuPageTitle', siteData.menuPageTitle],
    ['menuPageDescription', siteData.menuPageDescription]
  ].forEach(([id, value]) => applyText(id, value));

  const heroImage = document.getElementById('heroImage');
  if (heroImage) heroImage.src = siteData.heroImage;

  const mapBtn = document.getElementById('heroMapBtn');
  if (mapBtn) mapBtn.href = siteData.mapLink;

  const mapLinkEl = document.getElementById('mapLinkEl');
  if (mapLinkEl) mapLinkEl.href = siteData.mapLink;

  const instagramLinkEl = document.getElementById('instagramLinkEl');
  if (instagramLinkEl) instagramLinkEl.href = siteData.instagramLink;

  const facebookLinkEl = document.getElementById('facebookLinkEl');
  if (facebookLinkEl) facebookLinkEl.href = siteData.facebookLink;

  const whatsappLinkEl = document.getElementById('whatsappLinkEl');
  if (whatsappLinkEl) {
    const clean = String(siteData.whatsappNumber || '').replace(/\D/g, '');
    const full = clean.startsWith('355') ? clean : `355${clean.replace(/^0/, '')}`;
    whatsappLinkEl.href = `https://wa.me/${full}`;
  }

  const featuredGrid = document.getElementById('featuredGrid');
  if (featuredGrid) {
    featuredGrid.innerHTML = (siteData.featuredDishes || []).map(createDishCard).join('');
  }

  const storyImages = document.getElementById('storyImages');
  if (storyImages) {
    storyImages.innerHTML = (siteData.storyImages || []).map(src => `<img src="${src}" alt="Romeo Grill">`).join('');
  }

  renderMenuCategories(siteData);
}

function initMenuToggle() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (!menuToggle || !navLinks) return;
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('show'));
  });
}

function initMenuModal() {
  document.getElementById('menuModalClose')?.addEventListener('click', closeMenuModal);
  document.getElementById('menuModalCloseBtn')?.addEventListener('click', closeMenuModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenuModal();
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const siteData = await fetchSiteData();
    applySiteData(siteData);
    initMenuToggle();
    initMenuModal();
  } catch (err) {
    console.error(err);
  }
});
