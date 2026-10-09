(function () {
  'use strict';

  const app = document.getElementById('app');
  const toastRoot = document.getElementById('toast-root');
  const state = CarpiStorage.load();

  state.session = null;

  let currentRoute = 'dashboard';
  let modalType = null;
  let editingId = null;
  let selectedMelamineId = null;
  let pendingDeleteId = null;

  // Importante: algunos módulos usan `this.state`.
  // Los envolvemos en funciones para conservar el contexto del módulo al navegar.
  const routeTemplates = {
    dashboard: state => DashboardModule.render(state),
    inventario: state => InventoryModule.render(state),
    melaminas: state => MelamineModule.render(state),
    movimientos: state => MovementsModule.render(state),
    auditoria: state => AuditModule.render(state)
  };

  window.CarpiApp = {
    state,
    navigate: routeTo,
    closeModal,
    openModal
  };

  function userCanEdit() {
    return CarpiAuth.canEdit(state.session);
  }

  function userCanDelete() {
    return CarpiAuth.canDelete(state.session);
  }

  function save() {
    CarpiStorage.save(state);
  }

  function escapeHtml(value = '') {
    return String(value).replace(/[&<>'"]/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[char]));
  }

  function toast(message, type = 'ok') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = message;
    toastRoot.appendChild(el);
    window.setTimeout(() => el.remove(), 3200);
  }

  function csvDownload(filename, rows) {
    const csv = rows.map(row => row.map(value =>
      `"${String(value ?? '').replace(/"/g, '""')}"`
    ).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 500);
  }

  function loginView() {
    app.innerHTML = `
      <div class="login-shell">
        <div class="login-card">
          <img src="assets/logo.svg?v=3" alt="CarpinStock" class="login-logo">
          <span class="eyebrow">CARPINSTOCK PRO · V3</span>
          <h1>Control de Inventario</h1>
          <p>Acceso para personal autorizado de bodega y administración.</p>
          <form id="login-form">
            <label>Usuario
              <input name="username" autocomplete="username" required placeholder="Ej. bodega">
            </label>
            <label>Contraseña
              <input name="password" type="password" autocomplete="current-password" required placeholder="••••••••">
            </label>
            <button class="btn btn-primary btn-block" type="submit">Ingresar al sistema</button>
          </form>
          <div style="text-align: center; margin-top: 1rem;">
            <a href="#" data-action="toggle-register" style="color: var(--color-primary); font-size: 0.875rem;">Crear cuenta nueva</a>
          </div>
          <div class="demo-credentials">
            <strong>Usuarios de demostración</strong>
            <small>admin / admin123 · bodega / bodega123 · operario / operario123</small>
          </div>
        </div>
      </div>`;
  }

  function registerView() {
    app.innerHTML = `
      <div class="login-shell">
        <div class="login-card">
          <img src="assets/logo.svg?v=3" alt="CarpinStock" class="login-logo">
          <span class="eyebrow">NUEVO USUARIO</span>
          <h1>Registro en el sistema</h1>
          <p>Crea tu cuenta para acceder al sistema de inventario.</p>
          <form id="register-form">
            <label>Nombre completo
              <input name="name" required placeholder="Ej. Juan Pérez">
            </label>
            <label>Nombre de usuario
              <input name="username" autocomplete="username" required placeholder="Ej. jperez">
            </label>
            <label>Rol
              <select name="role" required>
                <option value="Operario">Operario (Consulta básica y mermas)</option>
                <option value="Supervisor">Supervisor (Control de entradas/salidas)</option>
                <option value="Administrador">Administrador (Control total)</option>
              </select>
            </label>
            <label>Contraseña
              <input name="password" type="password" autocomplete="new-password" required placeholder="••••••••">
            </label>
            <button class="btn btn-primary btn-block" type="submit">Registrar usuario</button>
          </form>
          <div style="text-align: center; margin-top: 1rem;">
            <a href="#" data-action="toggle-login" style="color: var(--color-text-mut); font-size: 0.875rem;">Volver al inicio de sesión</a>
          </div>
        </div>
      </div>`;
  }

  function shellView() {
    app.innerHTML = `
      <div class="app-shell">
        <aside class="sidebar">
          <div class="brand">
            <img src="assets/logo.svg?v=3" alt="">
            <div><strong>CarpinStock Pro</strong><small>v4.0 · INVENTARIO</small></div>
          </div>
          <div class="site-card">
            <span>Sede de operación</span>
            <strong>Planta Central · Muebles</strong>
          </div>
          <nav aria-label="Navegación principal">
            <small class="nav-title">NAVEGACIÓN TALLER</small>
            ${navItem('dashboard', '▦', 'Dashboard')}
            ${navItem('inventario', '▤', 'Inventario')}
            ${navItem('melaminas', '◫', 'Matriz de Melaminas')}
            ${navItem('movimientos', '⇄', 'Terminal de Movimientos')}
            ${navItem('auditoria', '✓', 'Auditoría y Trazabilidad')}
          </nav>
          <div class="sidebar-bottom"><span class="live-dot"></span> Plataforma Industrial · Local</div>
        </aside>

        <main class="main">
          <header class="topbar">
            <div class="mobile-brand"><img src="assets/logo.svg?v=3" alt=""><strong>CarpinStock Pro</strong></div>
            <div class="top-actions">
              <span class="connection"><i></i> Conectado · Local</span>
              <button class="icon-btn" data-action="help" title="Ayuda" type="button">?</button>
              <div class="user-chip">
                <span class="avatar">${escapeHtml((state.session.name || 'US').slice(0, 2).toUpperCase())}</span>
                <div><strong>${escapeHtml(state.session.name)}</strong><small>${escapeHtml(state.session.role)}</small></div>
                <button class="btn-logout" data-action="logout" type="button">Salir</button>
              </div>
            </div>
          </header>
          <div id="content" aria-live="polite"></div>
        </main>

        <nav class="bottom-nav" aria-label="Navegación móvil">
          ${navItem('dashboard', '▦', 'Inicio')}
          ${navItem('inventario', '▤', 'Inventario')}
          ${navItem('melaminas', '◫', 'Melaminas')}
          ${navItem('movimientos', '⇄', 'Movimientos')}
          ${navItem('auditoria', '✓', 'Auditoría')}
        </nav>
      </div>`;
  }

  function navItem(route, icon, label) {
    return `<button class="nav-item ${currentRoute === route ? 'active' : ''}" data-route="${route}" type="button">
      <span>${icon}</span><small>${label}</small>
    </button>`;
  }

  function render() {
    if (!state.session) {
      closeModal(false);
      loginView();
      return;
    }

    shellView();
    renderCurrentPage();
  }

  function renderCurrentPage() {
    const content = document.getElementById('content');
    if (!content) return;
    const template = routeTemplates[currentRoute] || routeTemplates.dashboard;
    content.innerHTML = template(state);
  }

  function replaceCurrentPageOnly() {
    if (!state.session) return;
    renderCurrentPage();
  }

  function closeModal(clearSelection = true) {
    modalType = null;
    editingId = null;
    pendingDeleteId = null;
    if (clearSelection) selectedMelamineId = null;
    document.getElementById('modal-root')?.remove();
    document.body.classList.remove('modal-open');
  }

  function openModal(type, id = null) {
    if (document.getElementById('modal-root')) {
      closeModal(false);
    }

    modalType = type;
    editingId = type === 'material' ? id : null;
    selectedMelamineId = type === 'melamine' ? id : selectedMelamineId;
    pendingDeleteId = type === 'delete' ? id : null;

    const root = document.createElement('div');
    root.id = 'modal-root';
    root.setAttribute('data-modal-root', 'true');
    root.innerHTML = getModalHtml();
    document.body.appendChild(root);
    document.body.classList.add('modal-open');

    const firstField = root.querySelector('input:not([disabled]), select, textarea, button[data-action="close-modal"]');
    if (firstField) window.requestAnimationFrame(() => firstField.focus());
  }

  function getModalHtml() {
    if (modalType === 'material') return materialModalHtml();
    if (modalType === 'movement') return movementModalHtml();
    if (modalType === 'melamine') return melamineModalHtml();
    if (modalType === 'delete') return deleteModalHtml();
    if (modalType === 'help') return helpModalHtml();
    return '';
  }

  function materialModalHtml() {
    const material = state.materials.find(item => item.id === editingId) || {
      name: '', code: '', category: 'Otro', unit: 'Unidad', quantity: 0,
      minimum: 0, reference: '', note: ''
    };
    const categories = ['Fórmica & RH', 'Aglomerado', 'Herrajes & Patas', 'Químicos', 'Cantos', 'Tornillería', 'Otro'];
    const units = ['Unidad', 'Lámina', 'Galón', 'Metro', 'Kilo'];

    return `<div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="material-modal-title">
        <div class="modal-head">
          <div><span class="eyebrow">HU001</span><h2 id="material-modal-title">${editingId ? 'Editar material' : 'Registrar nuevo material'}</h2></div>
          <button class="icon-btn modal-close" data-action="close-modal" title="Cerrar" type="button">×</button>
        </div>
        <form id="material-form" class="form-grid" novalidate>
          <label>Nombre del material<input name="name" required value="${escapeHtml(material.name)}" placeholder="Ej. RH"></label>
          <label>Código / SKU<input name="code" required value="${escapeHtml(material.code)}" placeholder="Ej. MAT-RH-002"></label>
          <label>Categoría<select name="category">${categories.map(c => `<option value="${escapeHtml(c)}" ${material.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}</select></label>
          <label>Unidad de medida<select name="unit">${units.map(u => `<option value="${escapeHtml(u)}" ${material.unit === u ? 'selected' : ''}>${escapeHtml(u)}</option>`).join('')}</select></label>
          <label>Referencia / color<input name="reference" value="${escapeHtml(material.reference || '')}" placeholder="Cuando aplique"></label>
          <label>Cantidad inicial<input name="quantity" type="number" step="0.01" min="0" required value="${Number(material.quantity) || 0}"></label>
          <label>Stock mínimo<input name="minimum" type="number" step="0.01" min="0" required value="${Number(material.minimum) || 0}"></label>
          <label class="full">Observación<textarea name="note" rows="3" placeholder="Información adicional">${escapeHtml(material.note || '')}</textarea></label>
          <div class="form-hint full">Reglas: Patas = 1 unidad equivale a 4 patas. Herrajes = 1 unidad equivale a una pareja. Melamina se administra mediante 10 referencias independientes.</div>
          <div class="modal-actions full">
            <button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button>
            <button type="submit" class="btn btn-primary">${editingId ? 'Guardar cambios' : 'Registrar material'}</button>
          </div>
        </form>
      </section>
    </div>`;
  }

  function movementModalHtml() {
    const materials = [
      ...state.materials.map(m => ({ code: m.code, name: m.name, unit: m.unit })),
      ...state.melamines.map(m => ({ code: m.id, name: `Melamina · ${m.reference}`, unit: m.unit }))
    ];

    return `<div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="movement-modal-title">
        <div class="modal-head"><div><span class="eyebrow">MÓDULO 3</span><h2 id="movement-modal-title">Registrar movimiento</h2></div><button class="icon-btn modal-close" data-action="close-modal" type="button">×</button></div>
        <form id="movement-form" class="form-grid" novalidate>
          <label>Tipo<select name="type"><option>Entrada</option><option>Salida</option><option>Merma</option></select></label>
          <label>Material<select name="code">${materials.map(m => `<option value="${escapeHtml(m.code)}">${escapeHtml(m.code)} · ${escapeHtml(m.name)}</option>`).join('')}</select></label>
          <label>Cantidad<input name="quantity" type="number" min="0.01" step="0.01" required placeholder="0"></label>
          <label>Proyecto / orden de trabajo<input name="project" placeholder="Ej. Cocina A-14"></label>
          <label class="full">Justificación / detalle<textarea name="detail" rows="3" placeholder="Motivo del movimiento"></textarea></label>
          <div class="modal-actions full"><button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button><button type="submit" class="btn btn-primary">Registrar movimiento</button></div>
        </form>
      </section>
    </div>`;
  }

  function melamineModalHtml() {
    const m = state.melamines.find(item => item.id === selectedMelamineId);
    if (!m) return '';

    return `<div class="modal-backdrop" role="presentation">
      <section class="modal small" role="dialog" aria-modal="true" aria-labelledby="melamine-modal-title">
        <div class="modal-head"><div><span class="eyebrow">${escapeHtml(m.id)}</span><h2 id="melamine-modal-title">${escapeHtml(m.reference)}</h2></div><button class="icon-btn modal-close" data-action="close-modal" type="button">×</button></div>
        <form id="melamine-form" class="form-grid" novalidate>
          <label>Referencia<input value="${escapeHtml(m.reference)}" disabled></label>
          <label>Color / descripción<input name="color" value="${escapeHtml(m.color)}"></label>
          <label>Cantidad
            <div class="number-stepper">
              <button type="button" class="stepper-btn" data-action="melamine-qty" data-direction="-1" aria-label="Disminuir una unidad">−</button>
              <input id="melamine-quantity" name="quantity" type="number" min="0" step="1" inputmode="numeric" value="${Math.max(0, Math.round(Number(m.quantity) || 0))}">
              <button type="button" class="stepper-btn" data-action="melamine-qty" data-direction="1" aria-label="Aumentar una unidad">+</button>
            </div>
          </label>
          <label>Mínimo<input name="minimum" type="number" min="0" step="1" value="${Math.max(0, Math.round(Number(m.minimum) || 0))}"></label>
          <div class="form-hint full">Cada una de las 10 referencias mantiene existencias independientes. Los botones + y − cambian exactamente 1 unidad.</div>
          <div class="modal-actions full"><button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button><button type="submit" class="btn btn-primary">Guardar referencia</button></div>
        </form>
      </section>
    </div>`;
  }

  function deleteModalHtml() {
    const m = state.materials.find(item => item.id === pendingDeleteId);
    if (!m) return '';

    return `<div class="modal-backdrop" role="presentation">
      <section class="modal small" role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
        <div class="modal-head"><div><span class="eyebrow">CONFIRMACIÓN</span><h2 id="delete-modal-title">Eliminar material</h2></div><button class="icon-btn modal-close" data-action="close-modal" type="button">×</button></div>
        <div class="confirm-box"><strong>${escapeHtml(m.name)}</strong><p>${escapeHtml(m.code)}</p><p>El registro desaparecerá del catálogo actual. Los movimientos históricos se conservarán en Auditoría.</p></div>
        <div class="modal-actions"><button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button><button type="button" class="btn btn-danger" data-action="confirm-delete">Sí, eliminar</button></div>
      </section>
    </div>`;
  }

  function helpModalHtml() {
    return `<div class="modal-backdrop" role="presentation">
      <section class="modal small" role="dialog" aria-modal="true" aria-labelledby="help-title">
        <div class="modal-head"><div><span class="eyebrow">AYUDA</span><h2 id="help-title">Uso rápido</h2></div><button class="icon-btn modal-close" data-action="close-modal" type="button">×</button></div>
        <div class="help-grid">
          <div><strong>Agregar material</strong><p>El formulario puede cancelarse con X, Cancelar o ESC. Nada se guarda al cancelar.</p></div>
          <div><strong>Editar</strong><p>En Inventario encontrarás Editar en cada registro.</p></div>
          <div><strong>Eliminar</strong><p>Administrador y Supervisor pueden eliminar con confirmación.</p></div>
          <div><strong>Melamina</strong><p>Las 10 referencias tienen cantidades separadas y +/− cambian una unidad.</p></div>
        </div>
        <div class="modal-actions"><button type="button" class="btn btn-primary" data-action="close-modal">Entendido</button></div>
      </section>
    </div>`;
  }

  function routeTo(route) {
    if (!routeTemplates[route]) return;

    // Regla deliberada: una ventana abierta jamás se cierra por navegar.
    // El usuario debe cerrarla con X, Cancelar o guardar.
    if (modalType) {
      toast('Cierra primero la ventana abierta con X o Cancelar.', 'error');
      return;
    }

    currentRoute = route;
    render();
  }

  function adjustMelamineQuantity(direction) {
    const input = document.getElementById('melamine-quantity');
    if (!input) return;
    const current = Math.max(0, Math.round(Number(input.value) || 0));
    const next = direction > 0 ? current + 1 : Math.max(0, current - 1);
    input.value = String(next);
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function deleteMaterial(id) {
    if (!userCanDelete()) {
      toast('Solo el administrador o el supervisor pueden eliminar materiales.', 'error');
      return;
    }
    if (!state.materials.some(m => m.id === id)) {
      toast('No se encontró el material.', 'error');
      return;
    }
    openModal('delete', id);
  }

  function persistAudit(action, detail) {
    state.audit.unshift({
      id: Date.now() + Math.random(),
      date: new Date().toISOString(),
      action,
      detail,
      user: state.session?.name || 'Sistema'
    });
  }

  function handleAction(actionButton) {
    const action = actionButton.dataset.action;

    if (action === 'close-modal') {
      closeModal();
      return;
    }

    if (action === 'logout') {
      state.session = null;
      closeModal();
      render();
      return;
    }

    if (action === 'toggle-register') {
      registerView();
      return;
    }

    if (action === 'toggle-login') {
      loginView();
      return;
    }

    if (action === 'help') {
      openModal('help');
      return;
    }

    if (action === 'open-add') {
      if (!userCanEdit()) return toast('Tu usuario no tiene permisos para registrar materiales.', 'error');
      openModal('material');
      return;
    }

    if (action === 'edit-material') {
      if (!userCanEdit()) return toast('No tienes permiso para modificar el inventario.', 'error');
      const id = actionButton.dataset.id;
      if (!state.materials.some(m => m.id === id)) return toast('Material no encontrado.', 'error');
      openModal('material', id);
      return;
    }

    if (action === 'delete-material') {
      deleteMaterial(actionButton.dataset.id);
      return;
    }

    if (action === 'confirm-delete') {
      if (!userCanDelete()) return toast('No tienes permiso para eliminar.', 'error');
      const material = state.materials.find(m => m.id === pendingDeleteId);
      if (!material) {
        closeModal();
        return;
      }
      state.materials = state.materials.filter(m => m.id !== pendingDeleteId);
      persistAudit('ELIMINACIÓN', `Eliminación de ${material.name} (${material.code})`);
      save();
      closeModal();
      render();
      toast('Material eliminado correctamente.');
      return;
    }

    if (action === 'open-movement') {
      if (!userCanEdit()) return toast('Tu usuario no tiene permisos para registrar movimientos.', 'error');
      openModal('movement');
      return;
    }

    if (action === 'open-melamine') {
      if (!userCanEdit()) return toast('No tienes permiso para modificar la matriz.', 'error');
      openModal('melamine', actionButton.dataset.id);
      return;
    }

    if (action === 'melamine-qty') {
      adjustMelamineQuantity(Number(actionButton.dataset.direction));
      return;
    }

    if (action === 'export-csv') {
      csvDownload('inventario-carpinstock.csv', [
        ['Tipo', 'Código', 'Material', 'Categoría', 'Unidad', 'Cantidad', 'Mínimo', 'Referencia'],
        ...state.materials.map(m => ['Material', m.code, m.name, m.category, m.unit, m.quantity, m.minimum, m.reference]),
        ...state.melamines.map(m => ['Melamina', m.id, 'Melamina', 'Melamina', m.unit, m.quantity, m.minimum, `${m.reference}${m.color ? ` · ${m.color}` : ''}`])
      ]);
      toast('CSV del inventario generado.');
      return;
    }

    if (action === 'export-audit') {
      csvDownload('auditoria-carpinstock.csv', [
        ['Fecha', 'Acción', 'Detalle', 'Usuario'],
        ...state.audit.map(a => [a.date, a.action, a.detail, a.user])
      ]);
      toast('Bitácora exportada.');
    }
  }

  document.addEventListener('click', event => {
    const modalRoot = document.getElementById('modal-root');

    // Cuando un modal existe, bloqueamos completamente el resto de la aplicación.
    // Solo los controles ubicados dentro del modal pueden responder.
    if (modalRoot) {
      const insideModal = event.target.closest('#modal-root .modal');
      if (!insideModal) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      const actionButton = event.target.closest('#modal-root [data-action]');
      if (actionButton) {
        event.preventDefault();
        event.stopPropagation();
        handleAction(actionButton);
      }
      return;
    }

    const route = event.target.closest('[data-route]');
    if (route) {
      event.preventDefault();
      routeTo(route.dataset.route);
      return;
    }

    const actionButton = event.target.closest('[data-action]');
    if (actionButton) {
      event.preventDefault();
      handleAction(actionButton);
    }
  }, true);

  document.addEventListener('input', event => {
    if (document.getElementById('modal-root')) return;

    if (event.target.id === 'inventory-search') {
      InventoryModule.state.query = event.target.value;
      replaceCurrentPageOnly();
      window.requestAnimationFrame(() => {
        const input = document.getElementById('inventory-search');
        if (!input) return;
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      });
    }
  });

  document.addEventListener('click', event => {
    if (document.getElementById('modal-root')) return;

    const filter = event.target.closest('[data-filter-category]');
    if (filter) {
      event.preventDefault();
      InventoryModule.state.category = filter.dataset.filterCategory;
      replaceCurrentPageOnly();
      return;
    }

    const sourceFilter = event.target.closest('[data-filter-source]');
    if (sourceFilter) {
      event.preventDefault();
      InventoryModule.state.source = sourceFilter.dataset.filterSource;
      replaceCurrentPageOnly();
      return;
    }

    const movementFilter = event.target.closest('[data-movement-filter]');
    if (movementFilter) {
      event.preventDefault();
      MovementsModule.state.type = movementFilter.dataset.movementFilter;
      replaceCurrentPageOnly();
    }
  });

  document.addEventListener('wheel', event => {
    if (event.target.id === 'melamine-quantity') event.preventDefault();
  }, { passive: false });

  document.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.target;

    if (form.id === 'login-form') {
      const fd = new FormData(form);
      const user = CarpiAuth.login(fd.get('username'), fd.get('password'), state.users);
      if (!user) return toast('Usuario o contraseña incorrectos.', 'error');
      state.session = { id: user.id, name: user.name, role: user.role };
      currentRoute = 'dashboard';
      render();
      toast(`Bienvenido, ${user.name}.`);
      return;
    }

    if (form.id === 'register-form') {
      const fd = new FormData(form);
      const payload = {
        name: fd.get('name'),
        username: fd.get('username'),
        role: fd.get('role'),
        password: fd.get('password')
      };
      
      try {
        const newUser = CarpiAuth.register(payload, state.users);
        CarpiStorage.save(state);
        
        // Auto-login after registration
        state.session = { id: newUser.id, name: newUser.name, role: newUser.role };
        currentRoute = 'dashboard';
        render();
        toast(`Cuenta creada exitosamente. Bienvenido, ${newUser.name}.`);
      } catch (err) {
        toast(err.message, 'error');
      }
      return;
    }

    if (!modalType) return;

    if (form.id === 'material-form') {
      if (!userCanEdit()) return toast('Sin permisos.', 'error');

      const fd = new FormData(form);
      const payload = {
        name: String(fd.get('name') || '').trim(),
        code: String(fd.get('code') || '').trim(),
        category: String(fd.get('category') || '').trim(),
        unit: String(fd.get('unit') || '').trim(),
        quantity: Number(fd.get('quantity')),
        minimum: Number(fd.get('minimum')),
        reference: String(fd.get('reference') || '').trim(),
        note: String(fd.get('note') || '').trim()
      };

      if (!payload.name || !payload.code) return toast('Completa nombre y código.', 'error');
      if (!Number.isFinite(payload.quantity) || payload.quantity < 0) return toast('Cantidad inicial no válida.', 'error');
      if (!Number.isFinite(payload.minimum) || payload.minimum < 0) return toast('Stock mínimo no válido.', 'error');

      const duplicated = state.materials.some(m =>
        m.code.toLowerCase() === payload.code.toLowerCase() && m.id !== editingId
      );
      if (duplicated) return toast('Ese código / SKU ya existe.', 'error');

      if (editingId) {
        const index = state.materials.findIndex(m => m.id === editingId);
        if (index < 0) return toast('No se encontró el material.', 'error');
        const previous = state.materials[index];
        state.materials[index] = { ...previous, ...payload };
        persistAudit('EDICIÓN', `Actualización de ${payload.name} (${payload.code})`);
        toast('Material actualizado correctamente.');
      } else {
        const id = `MAT-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 90 + 10)}`;
        state.materials.unshift({ id, ...payload });
        persistAudit('ALTA', `Registro de ${payload.name} (${payload.code})`);
        toast('Material registrado correctamente.');
      }

      save();
      closeModal();
      render();
      return;
    }

    if (form.id === 'movement-form') {
      if (!userCanEdit()) return toast('Sin permisos.', 'error');

      const fd = new FormData(form);
      const code = String(fd.get('code') || '');
      const type = String(fd.get('type') || '');
      const qty = Number(fd.get('quantity'));
      const source = [...state.materials, ...state.melamines].find(item => item.code === code || item.id === code);

      if (!source || !Number.isFinite(qty) || qty <= 0) return toast('Selecciona un material y una cantidad válida.', 'error');
      if ((type === 'Salida' || type === 'Merma') && Number(source.quantity) < qty) {
        return toast('La cantidad supera la existencia disponible.', 'error');
      }

      source.quantity = type === 'Entrada' ? Number(source.quantity) + qty : Number(source.quantity) - qty;
      const movement = {
        id: Date.now() + Math.random(),
        date: new Date().toISOString(),
        type,
        material: source.name || 'Melamina',
        code,
        quantity: qty,
        unit: source.unit,
        project: String(fd.get('project') || '').trim(),
        user: state.session.name
      };

      state.movements.unshift(movement);
      persistAudit(type.toUpperCase(), `${qty} ${source.unit} de ${movement.material} · ${movement.project || 'Sin proyecto'}`);
      save();
      closeModal();
      render();
      toast('Movimiento registrado y existencias actualizadas.');
      return;
    }

    if (form.id === 'melamine-form') {
      if (!userCanEdit()) return toast('Sin permisos.', 'error');

      const fd = new FormData(form);
      const m = state.melamines.find(item => item.id === selectedMelamineId);
      if (!m) return toast('Referencia no encontrada.', 'error');

      const quantityRaw = Number(fd.get('quantity'));
      const minimumRaw = Number(fd.get('minimum'));
      if (!Number.isFinite(quantityRaw) || quantityRaw < 0) return toast('Cantidad no válida.', 'error');
      if (!Number.isFinite(minimumRaw) || minimumRaw < 0) return toast('Mínimo no válido.', 'error');

      m.color = String(fd.get('color') || '').trim();
      m.quantity = Math.max(0, Math.round(quantityRaw));
      m.minimum = Math.max(0, Math.round(minimumRaw));
      persistAudit('EDICIÓN', `Actualización de ${m.id} · ${m.color}`);
      save();
      closeModal();
      render();
      toast('Referencia de melamina actualizada.');
    }
  });

  document.addEventListener('keydown', event => {
    if (!modalType) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal();
      return;
    }

    // Mantiene el foco dentro del modal y evita interacción accidental con el fondo.
    if (event.key !== 'Tab') return;
    const modal = document.querySelector('#modal-root .modal');
    if (!modal) return;
    const focusable = [...modal.querySelectorAll('button, input, select, textarea, [href]')]
      .filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Inicia mostrando la pantalla de acceso.
  render();
})();
