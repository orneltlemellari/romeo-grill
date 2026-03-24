
const defaultSiteData = {
  brandTitle: "Romeo Grill",
  brandSub: "Korce, Albania",
  heroBadge: "Fast Food • Grill • Gjiro",
  heroTitle: "Romeo Grill",
  heroDescription: "Grill, gjiro dhe pjata te nxehta ne zemer te Korces. Menu e ndare qarte me cmime te hapura — zgjedh kategorine, kliko produktin dhe shiko perberesit e plote.",
  heroImage: "images/storefront.jpeg",
  aboutTag: "Menu e qarte, jo rremuje",
  aboutTitle: "Kategorite hapen thjesht, artikujt shihen qarte, detajet dalin me nje klikim.",
  aboutLead: "Tek Romeo Grill gjeni gjiro, pjata grilli dhe shtesa me cmime te dukshme. Zgjidhni kategorine, shikoni artikujt dhe klikoni produktin per te pare foton, perberesit dhe detajet e plota.",
  aboutDescription: "Jemi te hapur cdo dite 09:00 – 23:00. Mund te kontaktoni direkt ne WhatsApp ose telefon per informacion shtese. Lokacioni yne eshte lehtesisht i arritshem ne qender te Korces.",
  contactAddress: "Korce, Albania",
  contactPhone: "0696930010",
  contactHours: "09:00 - 23:00",
  contactInstagram: "@romeogrill2024",
  contactFacebook: "Romeo Grill",
  mapLink: "https://maps.app.goo.gl/T1pQtM8KqkLht8pB6",
  instagramLink: "https://www.instagram.com/romeogrill2024/",
  facebookLink: "https://www.facebook.com/romeo.grill.3/",
  whatsappNumber: "0696472338",
  hotelDiscountRules: [],
  menuPageTitle: "Menuja e Romeo Grill — Gjiro, Grill & Fast Food",
  menuPageDescription: "Zgjidhni kategorine, shikoni artikujt me cmimet e tyre dhe klikoni produktin per te pare foton, perberesit dhe detajet e plota.",
  storyImages: [
    "images/dish-4.jpeg",
    "images/dish-5.jpeg",
    "images/dish-6.jpeg",
    "images/dish-7.jpeg"
  ],
  featuredDishes: [
    {
      id: "gjiro-mish-pule",
      name: "Gjiro me Mish Pule",
      price: 450,
      description: "Nje nga zgjedhjet me te kerkuara, me strukture te qarte dhe perberes te dukshem.",
      image: "images/dish-1.jpeg"
    },
    {
      id: "gjiro-me-qofte",
      name: "Gjiro me Qofte",
      price: 450,
      description: "Opsion klasik per klientet qe duan shije me te forte dhe kombinim te plote.",
      image: "images/dish-2.jpeg"
    },
    {
      id: "gjiro-mish-derri",
      name: "Gjiro me Mish Derri",
      price: 450,
      description: "Produkt baze i menuse qe duhet te gjendet shpejt dhe te shfaqe qarte perberesit.",
      image: "images/dish-8.jpeg"
    }
  ],
  menuCategories: [
    {
      name: "Gjiro",
      items: [
        {
          id: "gjiro-patate",
          name: "Gjiro me Patate",
          price: 350,
          description: "Zgjedhje e thjeshte dhe e shpejte.",
          ingredients: "Patate, salce kosi, domate, qepe, pite.",
          image: "images/dish-6.jpeg"
        },
        {
          id: "gjiro-me-qofte",
          name: "Gjiro me Qofte",
          price: 450,
          description: "Kombinim klasik me qofte dhe garnitura baze.",
          ingredients: "Qofte, patate, salce kosi, domate, qepe, pite.",
          image: "images/dish-2.jpeg"
        },
        {
          id: "gjiro-mish-pule",
          name: "Gjiro me Mish Pule",
          price: 450,
          description: "Produkt i qarte dhe i forte per menune kryesore.",
          ingredients: "Mish pule, patate, salce kosi, domate, qepe, pite.",
          image: "images/dish-1.jpeg"
        },
        {
          id: "gjiro-mish-derri",
          name: "Gjiro me Mish Derri",
          price: 450,
          description: "Variant klasik me mish derri dhe perberes baze.",
          ingredients: "Mish derri, patate, salce kosi, domate, qepe, pite.",
          image: "images/dish-3.jpeg"
        }
      ]
    },
    {
      name: "Pjata",
      items: [
        {
          id: "pjate-pule",
          name: "Pjate me Mish Pule",
          price: 650,
          description: "Pjate e plote per dreke ose darke.",
          ingredients: "Mish pule, patate, sallate, salce, buke ose pite.",
          image: "images/dish-4.jpeg"
        },
        {
          id: "pjate-qofte",
          name: "Pjate me Qofte",
          price: 650,
          description: "Pjate e bollshme me strukture te qarte.",
          ingredients: "Qofte, patate, sallate, salce, buke ose pite.",
          image: "images/dish-5.jpeg"
        },
        {
          id: "pjate-mix",
          name: "Pjate Mix",
          price: 750,
          description: "Opsion i kombinuar per klientet qe duan me shume.",
          ingredients: "Mish pule, qofte, patate, sallate, salce, buke ose pite.",
          image: "images/dish-7.jpeg"
        }
      ]
    },
    {
      name: "Shtesa",
      items: [
        {
          id: "pite-shtese",
          name: "Pite Shtese",
          price: 30,
          description: "Shtese per cdo produkt kryesor.",
          ingredients: "Pite.",
          image: "images/menu-1.jpeg"
        },
        {
          id: "patate-shtese",
          name: "Patate Shtese",
          price: 50,
          description: "Shtese e shpejte per gjiro ose pjate.",
          ingredients: "Patate te skuqura.",
          image: "images/menu-2.jpeg"
        },
        {
          id: "salce-shtese",
          name: "Salce Shtese",
          price: 30,
          description: "Shtese per shije dhe kombinim.",
          ingredients: "Salce sipas zgjedhjes.",
          image: "images/menu-3.jpeg"
        }
      ]
    },
    {
      name: "Pije",
      items: [
        {
          id: "uje",
          name: "Uje",
          price: 80,
          description: "Pije baze.",
          ingredients: "Uje.",
          image: "images/menu-4.jpeg"
        },
        {
          id: "coca-cola",
          name: "Coca-Cola",
          price: 150,
          description: "Pije freskuese.",
          ingredients: "Pije e gazuar.",
          image: "images/menu-5.jpeg"
        },
        {
          id: "fanta",
          name: "Fanta",
          price: 150,
          description: "Pije freskuese me gaz.",
          ingredients: "Pije e gazuar.",
          image: "images/menu-6.jpeg"
        }
      ]
    }
  ]
};


function byId(id) { return document.getElementById(id); }

function isNonEmptyString(value, min = 1, max = 255) {
  return typeof value === "string" && value.trim().length >= min && value.trim().length <= max;
}

function isSafeImagePath(value) {
  return typeof value === "string" && /^\/?(images|uploads)\/[a-zA-Z0-9._\-\/]+$/.test(value.trim());
}

function validateAdminFormData(data) {
  if (!isNonEmptyString(data.brandTitle, 2, 80)) return { ok: false, error: "Brand title eshte i pavlefshem." };
  if (!isSafeImagePath(data.heroImage)) return { ok: false, error: "Hero image path eshte i pavlefshem." };
  if (!isNonEmptyString(data.contactPhone, 6, 30)) return { ok: false, error: "Telefoni eshte i pavlefshem." };
  if (!isNonEmptyString(data.contactFacebook, 2, 120)) return { ok: false, error: "Facebook label eshte i pavlefshem." };
  if (!isNonEmptyString(data.mapLink, 10, 500)) return { ok: false, error: "Google Maps link eshte i pavlefshem." };
  if (!isNonEmptyString(data.instagramLink, 10, 500)) return { ok: false, error: "Instagram link eshte i pavlefshem." };
  if (!isNonEmptyString(data.facebookLink, 10, 500)) return { ok: false, error: "Facebook link eshte i pavlefshem." };
  if (!isNonEmptyString(data.whatsappNumber, 6, 20)) return { ok: false, error: "WhatsApp number eshte i pavlefshem." };

  const overlap = hasDiscountRuleOverlapClient(data.hotelDiscountRules);
  if (overlap.hasOverlap) {
    return { ok: false, error: `Ka overlap midis "${overlap.firstRuleId}" dhe "${overlap.secondRuleId}".` };
  }

  return { ok: true };
}


async function fetchMe() {
  const res = await fetch('/api/admin/me');
  return res.json();
}

async function fetchSiteData() {
  const res = await fetch('/api/admin/site-data');
  if (!res.ok) throw new Error('Failed to fetch site data');
  return res.json();
}



async function login(username, password) {
  const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return { ok: res.ok, data: await res.json() };
}

async function logout() {
  await fetch('/api/admin/logout', { method: 'POST' });
  location.href = '/admin';
}

async function saveSiteData(data) {
  const res = await fetch('/api/admin/site-data', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return { ok: res.ok, data: await res.json() };
}

async function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  const res = await fetch('/api/admin/upload-image', {
    method: 'POST',
    body: formData
  });

  return { ok: res.ok, data: await res.json() };
}



function fillBasicInputs(data) {
  byId('brandTitleInput').value = data.brandTitle || '';
  byId('brandSubInput').value = data.brandSub || '';
  byId('heroBadgeInput').value = data.heroBadge || '';
  byId('heroTitleInput').value = data.heroTitle || '';
  byId('heroDescriptionInput').value = data.heroDescription || '';
  byId('heroImageInput').value = data.heroImage || '';
  byId('addressInput').value = data.contactAddress || '';
  byId('phoneInput').value = data.contactPhone || '';
  byId('hoursInput').value = data.contactHours || '';
  byId('instagramInput').value = data.contactInstagram || '';
  byId('facebookInput').value = data.contactFacebook || '';
  byId('mapLinkInput').value = data.mapLink || '';
  byId('instagramLinkInput').value = data.instagramLink || '';
  byId('facebookLinkInput').value = data.facebookLink || '';
  byId('whatsappInput').value = data.whatsappNumber || '';
  byId('aboutTagInput').value = data.aboutTag || '';
  byId('aboutTitleInput').value = data.aboutTitle || '';
  byId('aboutLeadInput').value = data.aboutLead || '';
  byId('aboutDescriptionInput').value = data.aboutDescription || '';
  byId('menuPageTitleInput').value = data.menuPageTitle || '';
  byId('menuPageDescriptionInput').value = data.menuPageDescription || '';
  byId('storyImage1').value = data.storyImages?.[0] || '';
  byId('storyImage2').value = data.storyImages?.[1] || '';
  byId('storyImage3').value = data.storyImages?.[2] || '';
  byId('storyImage4').value = data.storyImages?.[3] || '';
}

function createFeaturedEditor(item, index) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-header">
      <h4>Pjate Kryesore ${index + 1}</h4>
      <button type="button" class="btn btn-secondary small-btn remove-featured">Hiq</button>
    </div>
    <div class="admin-grid two">
      <input class="featured-id" placeholder="ID" value="${item.id || ''}">
      <input class="featured-name" placeholder="Emri" value="${item.name || ''}">
      <input class="featured-price" type="number" placeholder="Cmimi" value="${item.price || 0}">
      <input class="featured-image" placeholder="Path i imazhit" value="${item.image || ''}">
      <textarea class="featured-description" rows="3" placeholder="Pershkrimi">${item.description || ''}</textarea>
    </div>
  `;
  div.querySelector('.remove-featured').addEventListener('click', () => { div.remove(); updatePreview(); });
  div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
  return div;
}

function createMenuItemEditor(item, itemIndex) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-header">
      <h4>Artikull ${itemIndex + 1}</h4>
      <button type="button" class="btn btn-secondary small-btn remove-item">Hiq</button>
    </div>
    <div class="admin-grid two">
      <input class="item-id" placeholder="ID" value="${item.id || ''}">
      <input class="item-name" placeholder="Emri" value="${item.name || ''}">
      <input class="item-price" type="number" placeholder="Cmimi" value="${item.price || 0}">
      <input class="item-image" placeholder="Path i imazhit" value="${item.image || ''}">
      <textarea class="item-description" rows="3" placeholder="Pershkrimi">${item.description || ''}</textarea>
      <textarea class="item-ingredients" rows="3" placeholder="Perberesit">${item.ingredients || ''}</textarea>
    </div>
  `;
  div.querySelector('.remove-item').addEventListener('click', () => { div.remove(); updatePreview(); });
  div.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));
  return div;
}

function createCategoryEditor(category, index) {
  const wrap = document.createElement('div');
  wrap.className = 'repeat-card menu-category-card';
  wrap.innerHTML = `
    <div class="repeat-header">
      <h4>Kategoria ${index + 1}</h4>
      <div class="inline-actions">
        <button type="button" class="btn btn-primary small-btn add-item">Shto Artikull</button>
        <button type="button" class="btn btn-secondary small-btn remove-category">Hiq Kategorine</button>
      </div>
    </div>
    <input class="category-name" placeholder="Emri i kategorise" value="${category.name || ''}">
    <div class="category-items-list"></div>
  `;
  const itemList = wrap.querySelector('.category-items-list');
  (category.items || []).forEach((item, itemIndex) => itemList.appendChild(createMenuItemEditor(item, itemIndex)));
  wrap.querySelector('.add-item').addEventListener('click', () => {
    itemList.appendChild(createMenuItemEditor({ id: '', name: '', price: 0, description: '', ingredients: '', image: '' }, itemList.children.length));
    updatePreview();
  });
  wrap.querySelector('.remove-category').addEventListener('click', () => { wrap.remove(); updatePreview(); });
  wrap.querySelector('.category-name').addEventListener('input', updatePreview);
  return wrap;
}


function createDiscountRuleEditor(rule, index) {
  const div = document.createElement('div');
  div.className = 'repeat-card';
  div.innerHTML = `
    <div class="repeat-header">
      <h4>Rregulli ${index + 1}</h4>
      <button type="button" class="btn btn-secondary small-btn remove-discount-rule">Hiq</button>
    </div>
    <div class="admin-grid two">
      <input class="discount-id" placeholder="ID" value="${rule.id || ''}">
      <input class="discount-label" placeholder="Emri i rregullit" value="${rule.label || ''}">
      <input class="discount-percent" type="number" min="0" max="100" placeholder="Ulje %" value="${rule.percent || 0}">
      <label class="muted">Aktive <input class="discount-active" type="checkbox" ${rule.active ? 'checked' : ''}></label>
      <input class="discount-start" type="date" value="${rule.startDate || ''}">
      <input class="discount-end" type="date" value="${rule.endDate || ''}">
    </div>
  `;
  div.querySelector('.remove-discount-rule').addEventListener('click', () => { div.remove(); updatePreview(); });
  div.querySelectorAll('input').forEach(el => el.addEventListener('input', updatePreview));
  div.querySelectorAll('input').forEach(el => el.addEventListener('change', updatePreview));
  return div;
}

function collectDiscountRules() {
  return [...document.querySelectorAll('#hotelDiscountRulesList .repeat-card')].map(card => ({
    id: card.querySelector('.discount-id').value.trim(),
    label: card.querySelector('.discount-label').value.trim(),
    percent: Number(card.querySelector('.discount-percent').value || 0),
    startDate: card.querySelector('.discount-start').value,
    endDate: card.querySelector('.discount-end').value,
    active: card.querySelector('.discount-active').checked
  })).filter(rule => rule.label && rule.startDate && rule.endDate);
}

function renderAdminForm(data) {
  fillBasicInputs(data);
  const featuredAdminList = byId('featuredAdminList');
  const menuAdminList = byId('menuAdminList');
  const hotelDiscountRulesList = byId('hotelDiscountRulesList');
  featuredAdminList.innerHTML = '';
  menuAdminList.innerHTML = '';
  hotelDiscountRulesList.innerHTML = '';
  (data.featuredDishes || []).forEach((item, index) => featuredAdminList.appendChild(createFeaturedEditor(item, index)));
  (data.menuCategories || []).forEach((category, index) => menuAdminList.appendChild(createCategoryEditor(category, index)));
  (data.hotelDiscountRules || []).forEach((rule, index) => hotelDiscountRulesList.appendChild(createDiscountRuleEditor(rule, index)));
  updatePreview();
}

function collectFeatured() {
  return [...document.querySelectorAll('#featuredAdminList .repeat-card')].map(card => ({
    id: card.querySelector('.featured-id').value.trim(),
    name: card.querySelector('.featured-name').value.trim(),
    price: Number(card.querySelector('.featured-price').value || 0),
    image: card.querySelector('.featured-image').value.trim(),
    description: card.querySelector('.featured-description').value.trim()
  })).filter(item => item.name);
}

function collectMenuCategories() {
  return [...document.querySelectorAll('#menuAdminList .menu-category-card')].map(categoryCard => ({
    name: categoryCard.querySelector('.category-name').value.trim(),
    items: [...categoryCard.querySelectorAll('.category-items-list > .repeat-card')].map(itemCard => ({
      id: itemCard.querySelector('.item-id').value.trim(),
      name: itemCard.querySelector('.item-name').value.trim(),
      price: Number(itemCard.querySelector('.item-price').value || 0),
      image: itemCard.querySelector('.item-image').value.trim(),
      description: itemCard.querySelector('.item-description').value.trim(),
      ingredients: itemCard.querySelector('.item-ingredients').value.trim()
    })).filter(item => item.name)
  })).filter(category => category.name);
}

function collectAllData() {
  return {
    ...defaultSiteData,
    brandTitle: byId('brandTitleInput').value.trim(),
    brandSub: byId('brandSubInput').value.trim(),
    heroBadge: byId('heroBadgeInput').value.trim(),
    heroTitle: byId('heroTitleInput').value.trim(),
    heroDescription: byId('heroDescriptionInput').value.trim(),
    heroImage: byId('heroImageInput').value.trim(),
    contactAddress: byId('addressInput').value.trim(),
    contactPhone: byId('phoneInput').value.trim(),
    contactHours: byId('hoursInput').value.trim(),
    contactInstagram: byId('instagramInput').value.trim(),
    contactFacebook: byId('facebookInput').value.trim(),
    mapLink: byId('mapLinkInput').value.trim(),
    instagramLink: byId('instagramLinkInput').value.trim(),
    facebookLink: byId('facebookLinkInput').value.trim(),
    whatsappNumber: byId('whatsappInput').value.trim(),
    aboutTag: byId('aboutTagInput').value.trim(),
    aboutTitle: byId('aboutTitleInput').value.trim(),
    aboutLead: byId('aboutLeadInput').value.trim(),
    aboutDescription: byId('aboutDescriptionInput').value.trim(),
    menuPageTitle: byId('menuPageTitleInput').value.trim(),
    menuPageDescription: byId('menuPageDescriptionInput').value.trim(),
    hotelDiscountRules: collectDiscountRules(),
    storyImages: [
      byId('storyImage1').value.trim(),
      byId('storyImage2').value.trim(),
      byId('storyImage3').value.trim(),
      byId('storyImage4').value.trim()
    ].filter(Boolean),
    featuredDishes: collectFeatured(),
    menuCategories: collectMenuCategories()
  };
}


function hasDiscountRuleOverlapClient(rules) {
  const normalized = (Array.isArray(rules) ? rules : [])
    .filter(rule => rule && rule.active && rule.startDate && rule.endDate)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));

  for (let i = 0; i < normalized.length - 1; i++) {
    if (normalized[i].endDate >= normalized[i + 1].startDate) {
      return {
        hasOverlap: true,
        firstRuleId: normalized[i].id || normalized[i].label || `rule-${i + 1}`,
        secondRuleId: normalized[i + 1].id || normalized[i + 1].label || `rule-${i + 2}`
      };
    }
  }

  return { hasOverlap: false };
}

function updatePreview() {
  const data = collectAllData();
  const overlap = hasDiscountRuleOverlapClient(data.hotelDiscountRules);
  const warning = overlap.hasOverlap
    ? `\n\nWARNING: Overlap detected between "${overlap.firstRuleId}" and "${overlap.secondRuleId}". Save will be blocked by backend.`
    : '';
  byId('adminJsonPreview').textContent = JSON.stringify(data, null, 2) + warning;
}





document.addEventListener('DOMContentLoaded', async () => {
  const body = document.body;

  if (body.dataset.page === 'login') {
    const auth = await fetchMe();
    if (auth.authenticated) {
      location.href = '/dashboard';
      return;
    }

    byId('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const result = await login(byId('username').value.trim(), byId('password').value);
      if (!result.ok) {
        byId('loginError').textContent = result.data.error || 'Login deshtoi.';
        return;
      }
      location.href = '/dashboard';
    });
    return;
  }

  if (body.dataset.page === 'dashboard') {
    const auth = await fetchMe();
    if (!auth.authenticated) {
      location.href = '/admin';
      return;
    }

    byId('adminWelcome').textContent = `Admin: ${auth.user.username}`;

    const data = await fetchSiteData();
    renderAdminForm(data);

    document.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', updatePreview));

    byId('addFeaturedBtn').addEventListener('click', () => {
      byId('featuredAdminList').appendChild(createFeaturedEditor({ id: '', name: '', price: 0, description: '', image: '' }, byId('featuredAdminList').children.length));
      updatePreview();
    });

    byId('addCategoryBtn').addEventListener('click', () => {
      byId('menuAdminList').appendChild(createCategoryEditor({ name: '', items: [] }, byId('menuAdminList').children.length));
      updatePreview();
    });

    byId('addDiscountRuleBtn').addEventListener('click', () => {
      byId('hotelDiscountRulesList').appendChild(createDiscountRuleEditor({ id: '', label: '', percent: 0, startDate: '', endDate: '', active: true }, byId('hotelDiscountRulesList').children.length));
      updatePreview();
    });

    byId('saveAllBtn').addEventListener('click', async () => {
      const data = collectAllData();
      const validation = validateAdminFormData(data);
      if (!validation.ok) {
        alert(validation.error);
        return;
      }

      const result = await saveSiteData(data);
      if (!result.ok) {
        alert(result.data.error || 'Ruajtja deshtoi.');
        return;
      }
      alert('U ruajt me sukses.');
      updatePreview();
    });

    byId('resetFormBtn').addEventListener('click', async () => {
      renderAdminForm(defaultSiteData);
    });

    byId('logoutBtn').addEventListener('click', logout);

    byId('uploadImageBtn').addEventListener('click', async () => {
      const file = byId('imageUploadInput').files?.[0];
      if (!file) {
        alert('Zgjidh nje imazh para upload-it.');
        return;
      }

      if (!/^image\/(jpeg|png|webp|gif)$/.test(file.type)) {
        alert('Lejohen vetem PNG, JPG, WEBP ose GIF.');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Imazhi eshte shume i madh. Maksimumi eshte 5MB.');
        return;
      }

      const result = await uploadImage(file);
      if (!result.ok) {
        alert(result.data.error || 'Upload deshtoi.');
        return;
      }

      byId('uploadedImagePath').value = result.data.path;
      alert('Imazhi u ngarkua me sukses. Ky upload punon edhe nga telefoni i pronarit. Kopjo path-in dhe perdore te artikulli ose seksioni qe do.');
    });
  }
});
