
    // ──────────────────────────────────────────────────
    // DATA — Products with real prices from WhatsApp
    // ──────────────────────────────────────────────────
    const WA = '5581997932468';

    const DEFAULT_PRODUCTS = [
      { id: 1, name: 'Pijama Americano', cat: 'pijama', price: 55, unit: 'conjunto', desc: 'Conjunto calça e camiseta quentinho e estampado, ideal para noites confortáveis e femininas.', img: 'https://i.ibb.co/RGcjnfVb/Chat-GPT-Image-20-de-mai-de-2026-19-03-11.png', sizes: ['P', 'M', 'G', 'GG'], colors: ['Rosa', 'Azul', 'Lilás'], avail: 'encomenda', visible: 1 },
      { id: 2, name: 'Camisola de Renda', cat: 'lingerie', price: 60, unit: 'peça', desc: 'Camisola elegante com detalhes em renda delicada, perfeita para noites especiais e presentes.', img: 'https://i.ibb.co/KzDSsbgg/comprar-camisola-alcinha-alca-curta-renda-fofuxa-pijamas-promocao-online-microfibra-liganete-verao-3.webp', sizes: ['P', 'M', 'G', 'GG'], colors: ['Rosa', 'Branco', 'Preto', 'Vinho'], avail: 'encomenda', visible: 1 },
      { id: 3, name: 'Baby Doll', cat: 'lingerie', price: 55, unit: 'conjunto', desc: 'Conjunto baby doll curto e delicado, confortável e feminino para dias quentes.', img: 'https://i.ibb.co/5XsNwRP5/1-287.webp', sizes: ['P', 'M', 'G', 'GG'], colors: ['Rosa', 'Preto', 'Branco'], avail: 'encomenda', visible: 1 },
      { id: 4, name: 'Baby Doll Suede', cat: 'lingerie', price: 50, unit: 'conjunto', desc: 'Baby doll em tecido suede macio e sofisticado, leve e com toque aveludado.', img: 'https://i.ibb.co/G6t8mTr/269654.webp', sizes: ['P', 'M', 'G', 'GG'], colors: ['Rosa', 'Nude', 'Vinho', 'Preto'], avail: 'encomenda', visible: 1 },
      { id: 5, name: 'Conjunto Infantil Americano', cat: 'pijama', price: 50, unit: 'conjunto', desc: 'Conjunto pijama infantil estampado, macio e confortável para as crianças.', img: 'https://i.ibb.co/27mrMBbG/D-NQ-NP-2-X-651009-MLB107258180904-032026-F.webp', sizes: ['2', '4', '6', '8', '10', '12'], colors: ['Rosa', 'Azul', 'Verde'], avail: 'encomenda', visible: 1 },
      { id: 6, name: 'Macaquito Suede', cat: 'lingerie', price: 40, unit: 'peça', desc: 'Macaquito feminino em suede aveludado, estiloso e confortável para o dia a dia.', img: 'https://i.ibb.co/B54FzdrC/2e428ff9-e115-4a2c-8234-b904279ce876.jpg', sizes: ['P', 'M', 'G', 'GG'], colors: ['Nude', 'Rosa', 'Preto', 'Bordô'], avail: 'encomenda', visible: 1 },
      { id: 7, name: 'Lingerie Renda Bordada', cat: 'lingerie', price: 60, unit: 'conjunto', desc: 'Conjunto lingerie com renda bordada de alta qualidade, sofisticado e delicado.', img: 'https://i.ibb.co/s9ft0GTk/19.jpg', sizes: ['P', 'M', 'G', 'GG'], colors: ['Preto', 'Vinho', 'Rosa', 'Nude'], avail: 'encomenda', visible: 1 },
      { id: 8, name: 'Lingerie de Renda', cat: 'lingerie', price: 50, unit: 'conjunto', desc: 'Conjunto lingerie em renda delicada, confortável e feminina para o dia a dia.', img: 'https://i.ibb.co/b5v6q7hp/ycsyx43xtwc7oozldkr0g-output-00001-974f70a9deab058bb017490624502312-1024-1024.webp', sizes: ['P', 'M', 'G', 'GG'], colors: ['Preto', 'Rosa', 'Branco', 'Vermelho'], avail: 'encomenda', visible: 1 },
      { id: 9, name: 'Calcinha Semi Fio', cat: 'calcinha', price: 5, unit: 'unidade', desc: 'Calcinha semi fio em renda delicada. Vendida por unidade — compre quantas quiser!', img: 'https://i.ibb.co/8gYmGvTH/D-NQ-NP-733921-MLB111343142601-052026-O-suti-renda-tule-calsinha-fio-dental-lingerie-feminina-sex.webp', sizes: ['P', 'M', 'G', 'GG'], colors: ['Preto', 'Rosa', 'Branco', 'Vinho', 'Bege'], avail: 'disponivel', visible: 1 },
      { id: 10, name: 'Calcinha Normal', cat: 'calcinha', price: 6, unit: 'unidade', desc: 'Calcinha básica confortável em renda. Vendida por unidade.', img: 'https://i.ibb.co/PGCqkzzR/shopping.webp', sizes: ['P', 'M', 'G', 'GG'], colors: ['Preto', 'Rosa', 'Branco', 'Bege', 'Azul'], avail: 'disponivel', visible: 1 },
      { id: 11, name: 'Sabonete Artesanal', cat: 'sabonete', price: 10, unit: 'unidade', desc: 'Sabonete decorativo artesanal de alta qualidade. Perfeito para usar ou presentear. Formatos variados.', img: 'https://i.ibb.co/ycjTYBvd/Whats-App-Image-2026-05-19-at-5-42-01-PM.jpg', sizes: [], colors: ['Rosa', 'Branco', 'Lilás', 'Pêssego'], avail: 'encomenda', visible: 1 },
      { id: 12, name: 'Sabonete Caseiro Artesanal', cat: 'sabonete', price: 10, unit: 'unidade', desc: 'Sabonete caseiro artesanal disponível em qualquer fragrância. Produção sob encomenda com materiais selecionados.', img: 'https://i.ibb.co/btcrJFJ/Whats-App-Image-2026-05-19-at-6-15-44-PM.jpg', sizes: [], colors: ['Qualquer fragrância'], avail: 'encomenda', visible: 1 },
    ];

    const SETTINGS_DEFAULT = { wa: WA, insta: '_encantofeminino_01', logo: '' };

    // ──────────────────────────────────────────────────
    // STATE
    // ──────────────────────────────────────────────────
    let products = JSON.parse(localStorage.getItem('ef_products') || 'null') || DEFAULT_PRODUCTS;
    let settings = JSON.parse(localStorage.getItem('ef_settings') || 'null') || SETTINGS_DEFAULT;

    // ──────────────────────────────────────────────────
    // WHATSAPP ICON SVG
    // ──────────────────────────────────────────────────
    const WA_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

    // ──────────────────────────────────────────────────
    // RENDER CATALOG
    // ──────────────────────────────────────────────────
    const catLabels = { pijama: 'Pijama', lingerie: 'Lingerie', calcinha: 'Calcinha', sabonete: 'Sabonete' };

    function waLink(name) {
      const msg = encodeURIComponent(`Olá! Vim pelo site e tenho interesse no produto: *${name}*`);
      return `https://wa.me/${settings.wa}?text=${msg}`;
    }

    function renderProducts(filter = 'todos') {
      const grid = document.getElementById('productsGrid');
      const visible = products.filter(p => p.visible && (filter === 'todos' || p.cat === filter));
      if (!visible.length) {
        grid.innerHTML = '<div class="no-products-msg">Nenhum produto nesta categoria ainda.</div>';
        return;
      }
      grid.innerHTML = visible.map(p => {
        const sizesHtml = p.sizes && p.sizes.length ? `<div class="meta-chip">📏 ${p.sizes.join(' · ')}</div>` : '';
        const colorsHtml = p.colors && p.colors.length ? `<div class="meta-chip">🎨 ${p.colors.join(', ')}</div>` : '';
        const badgeClass = p.avail === 'disponivel' ? 'badge-disponivel' : 'badge-encomenda';
        const badgeText = p.avail === 'disponivel' ? '✓ Disponível' : '⏱ Sob encomenda';
        const priceLabel = `R$ ${Number(p.price).toFixed(2).replace('.', ',')} <span>/ ${p.unit}</span>`;
        const imgStyle = p.img ? `src="${p.img}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"` : `src="" style="display:none"`;
        const fallback = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;background:linear-gradient(135deg,var(--blush-mid),var(--rose-pale));${p.img ? 'display:none' : ''}">
      ${p.cat === 'sabonete' ? '🧼' : p.cat === 'pijama' ? '🌙' : '🌸'}
    </div>`;
        return `
    <div class="product-card fade-in" data-cat="${p.cat}">
      <div class="prod-img-wrap">
        <img ${imgStyle} alt="${p.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover">
        ${fallback}
        <span class="prod-badge ${badgeClass}">${badgeText}</span>
      </div>
      <div class="prod-info">
        <div class="prod-cat-tag">${catLabels[p.cat] || p.cat}</div>
        <h3 class="prod-name">${p.name}</h3>
        <p class="prod-desc">${p.desc || ''}</p>
        <div class="prod-price">${priceLabel}</div>
        <div class="prod-meta">
          ${sizesHtml}${colorsHtml}
        </div>
        <a href="${waLink(p.name)}" target="_blank" rel="noopener noreferrer" class="prod-btn">
          ${WA_SVG} Solicitar pelo WhatsApp
        </a>
      </div>
    </div>`;
      }).join('');
      setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(el => observer.observe(el));
      }, 50);
    }

    // ──────────────────────────────────────────────────
    // FILTER
    // ──────────────────────────────────────────────────
    let currentFilter = 'todos';
    function filterCat(cat, btn) {
      currentFilter = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(cat);
    }

    /* ══════════════════════════════════════════════════
       IMPLEMENTAÇÃO FUTURA: PAINEL ADMIN
       Para reativar:
       1. Descomentar este bloco inteiro
       2. Remover o style="display:none" do botão
          admin-open-btn em index.html
       3. Garantir persistência real (ex: backend/DB)
          pois localStorage não sincroniza entre
          dispositivos/navegadores diferentes
    ══════════════════════════════════════════════════

    let editingChips = { size: [], color: [] };

    function saveData() {
      localStorage.setItem('ef_products', JSON.stringify(products));
      localStorage.setItem('ef_settings', JSON.stringify(settings));
    }

    function openAdmin() {
      document.getElementById('admin-panel').classList.add('open');
      renderAdminList();
      loadSettings();
    }
    function closeAdmin() {
      document.getElementById('admin-panel').classList.remove('open');
    }

    function switchAdminTab(tab, btn) {
      document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.admin-tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('admin-tab-' + tab).classList.add('active');
    }

    function renderAdminList() {
      const list = document.getElementById('adminProductsList');
      if (!products.length) { list.innerHTML = '<div class="no-products-msg">Nenhum produto cadastrado.</div>'; return; }
      list.innerHTML = products.map(p => `
    <div class="prod-admin-row">
      <div class="prod-admin-img" style="background:linear-gradient(135deg,var(--blush-mid),var(--rose-pale));display:flex;align-items:center;justify-content:center;font-size:1.3rem">
        ${p.img ? `<img src="${p.img}" style="width:100%;height:100%;object-fit:cover;border-radius:.5rem" onerror="this.style.display='none'">` : (p.cat === 'sabonete' ? '🧼' : p.cat === 'pijama' ? '🌙' : '🌸')}
      </div>
      <div class="prod-admin-info">
        <div class="prod-admin-name">${p.visible ? '' : '👁‍🗨 '} ${p.name}</div>
        <div class="prod-admin-cat">${catLabels[p.cat] || p.cat} · ${p.avail === 'disponivel' ? 'Disponível' : 'Sob encomenda'}</div>
      </div>
      <div class="prod-admin-price">R$ ${Number(p.price).toFixed(2).replace('.', ',')} / ${p.unit}</div>
      <div class="prod-admin-actions">
        <button class="btn-edit" onclick="editProduct(${p.id})">✏️ Editar</button>
        <button class="btn-del" onclick="deleteProduct(${p.id})">🗑 Excluir</button>
      </div>
    </div>
  `).join('');
    }

    function editProduct(id) {
      const p = products.find(x => x.id === id);
      if (!p) return;
      document.getElementById('formTitle').textContent = 'Editar Produto';
      document.getElementById('editingId').value = id;
      document.getElementById('f-name').value = p.name;
      document.getElementById('f-cat').value = p.cat;
      document.getElementById('f-price').value = p.price;
      document.getElementById('f-unit').value = p.unit;
      document.getElementById('f-desc').value = p.desc || '';
      document.getElementById('f-img').value = p.img || '';
      document.getElementById('f-avail').value = p.avail;
      document.getElementById('f-visible').value = p.visible ? '1' : '0';
      editingChips.size = [...(p.sizes || [])];
      editingChips.color = [...(p.colors || [])];
      renderChips('size'); renderChips('color');
      if (p.img) { const pr = document.getElementById('imgPreview'); pr.src = p.img; pr.style.display = 'block'; }
      switchAdminTab('add', document.querySelectorAll('.admin-tab')[1]);
    }

    function cancelForm() {
      resetForm();
      switchAdminTab('products', document.querySelectorAll('.admin-tab')[0]);
    }

    function resetForm() {
      document.getElementById('formTitle').textContent = 'Novo Produto';
      document.getElementById('editingId').value = '';
      ['f-name', 'f-price', 'f-desc', 'f-img'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('f-cat').value = 'pijama';
      document.getElementById('f-unit').value = 'peça';
      document.getElementById('f-avail').value = 'encomenda';
      document.getElementById('f-visible').value = '1';
      editingChips = { size: [], color: [] };
      renderChips('size'); renderChips('color');
      const pr = document.getElementById('imgPreview'); pr.src = ''; pr.style.display = 'none';
    }

    function saveProduct() {
      const name = document.getElementById('f-name').value.trim();
      const price = parseFloat(document.getElementById('f-price').value);
      if (!name) { toast('Por favor, informe o nome do produto.'); return; }
      if (isNaN(price) || price < 0) { toast('Por favor, informe um preço válido.'); return; }
      const editId = document.getElementById('editingId').value;
      const data = {
        name, price,
        cat: document.getElementById('f-cat').value,
        unit: document.getElementById('f-unit').value,
        desc: document.getElementById('f-desc').value.trim(),
        img: document.getElementById('f-img').value.trim(),
        avail: document.getElementById('f-avail').value,
        visible: document.getElementById('f-visible').value === '1' ? 1 : 0,
        sizes: [...editingChips.size],
        colors: [...editingChips.color],
      };
      if (editId) {
        const idx = products.findIndex(p => p.id == editId);
        if (idx >= 0) products[idx] = { ...products[idx], ...data };
        toast('✅ Produto atualizado!');
      } else {
        data.id = Date.now();
        products.push(data);
        toast('✅ Produto adicionado!');
      }
      saveData();
      resetForm();
      renderAdminList();
      renderProducts(currentFilter);
      switchAdminTab('products', document.querySelectorAll('.admin-tab')[0]);
    }

    function deleteProduct(id) {
      if (!confirm('Tem certeza que deseja excluir este produto?')) return;
      products = products.filter(p => p.id !== id);
      saveData();
      renderAdminList();
      renderProducts(currentFilter);
      toast('🗑 Produto excluído.');
    }

    function addChip(e, type) {
      if (e.key !== 'Enter' && e.key !== ',') return;
      e.preventDefault();
      const input = document.getElementById(type === 'size' ? 'sizeInput' : 'colorInput');
      const val = input.value.trim();
      if (val && !editingChips[type].includes(val)) {
        editingChips[type].push(val);
        renderChips(type);
      }
      input.value = '';
    }
    function removeChip(type, val) {
      editingChips[type] = editingChips[type].filter(v => v !== val);
      renderChips(type);
    }
    function renderChips(type) {
      const wrap = document.getElementById(type === 'size' ? 'sizesWrap' : 'colorsWrap');
      const inputId = type === 'size' ? 'sizeInput' : 'colorInput';
      const chips = editingChips[type].map(v =>
        `<span class="chip-tag">${v}<span class="remove" onclick="removeChip('${type}','${v}')">×</span></span>`
      ).join('');
      wrap.innerHTML = chips + `<input class="chip-input" id="${inputId}" placeholder="Digite e pressione Enter" onkeydown="addChip(event,'${type}')">`;
    }

    function previewImg(url) {
      const pr = document.getElementById('imgPreview');
      if (url) { pr.src = url; pr.style.display = 'block'; pr.onerror = () => { pr.style.display = 'none' }; }
      else pr.style.display = 'none';
    }

    function loadSettings() {
      document.getElementById('s-wa').value = settings.wa || '';
      document.getElementById('s-insta').value = settings.insta || '';
      document.getElementById('s-logo').value = settings.logo || '';
    }
    function saveSettings() {
      settings.wa = document.getElementById('s-wa').value.trim() || WA;
      settings.insta = document.getElementById('s-insta').value.trim();
      settings.logo = document.getElementById('s-logo').value.trim();
      saveData();
      if (settings.logo) {
        document.getElementById('heroLogoImg').src = settings.logo;
      }
      toast('✅ Configurações salvas!');
    }
    function previewLogo(url) {
      if (url) {
        document.getElementById('heroLogoImg').src = url;
      }
    }

    function toast(msg) {
      const t = document.getElementById('adminToast');
      t.textContent = msg; t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2800);
    }

    ══════════════════════════════════════════════════ */

    // ──────────────────────────────────────────────────
    // NAV / MOBILE
    // ──────────────────────────────────────────────────
    document.getElementById('hambBtn').onclick = () => document.getElementById('mobileMenu').classList.toggle('open');
    document.getElementById('menuClose').onclick = () => document.getElementById('mobileMenu').classList.remove('open');
    function closeMob() { document.getElementById('mobileMenu').classList.remove('open'); }

    document.getElementById('mobileMenu').addEventListener('click', function (e) {
      if (e.target === this) closeMob();
    });

    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
    });

    // ──────────────────────────────────────────────────
    // FAQ
    // ──────────────────────────────────────────────────
    function toggleFaq(btn) {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }

    // ──────────────────────────────────────────────────
    // SCROLL ANIMATION
    // ──────────────────────────────────────────────────
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: .1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ──────────────────────────────────────────────────
    // INIT
    // ──────────────────────────────────────────────────
    renderProducts('todos');
