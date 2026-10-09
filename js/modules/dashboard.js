window.DashboardModule = {
  render(state) {
    const materials = state.materials;
    const allItems = [...materials, ...state.melamines];
    const critical = allItems.filter(item => Number(item.quantity) <= Number(item.minimum)).length;
    const healthy = allItems.filter(item => Number(item.quantity) > Number(item.minimum) * 1.25).length;
    const health = allItems.length ? Math.round((healthy / allItems.length) * 100) : 0;

    return `<section class="page-head">
      <div><span class="eyebrow">LÍNEA 01 / CORTE Y ENSAMBLE</span><h1>Dashboard de inventario</h1><p>Control centralizado del inventario y trazabilidad de la fábrica.</p></div>
      <button class="btn btn-primary" data-action="open-add" type="button">＋ Registrar material (HU001)</button>
    </section>
    <div class="demo-banner"><strong>Modo demostración.</strong> Las cantidades iniciales son ejemplos y pueden editarse. Los cambios se guardan en este navegador.</div>
    <section class="metrics-grid">
      <article class="metric-card"><span>ACTIVOS</span><strong>${allItems.length}</strong><small>materiales + referencias de melamina</small></article>
      <article class="metric-card"><span>NIVEL GLOBAL</span><strong>${health}%</strong><small>existencias por encima del mínimo</small></article>
      <article class="metric-card metric-alert"><span>ALERTAS</span><strong>${critical}</strong><small>igual o por debajo del mínimo</small></article>
      <article class="metric-card"><span>MOVIMIENTOS</span><strong>${state.movements.length}</strong><small>registros en la bitácora</small></article>
    </section>
    <section class="section-card">
      <div class="section-title"><div><span class="eyebrow">MÓDULO 1</span><h2>Existencias físicas</h2></div><button class="btn btn-outline" data-route="inventario" type="button">Ver inventario completo</button></div>
      <div class="table-wrap"><table><thead><tr><th>SKU</th><th>MATERIAL</th><th>U/M</th><th>STOCK</th><th>MÍNIMO</th><th>ESTADO</th><th>ACCIONES</th></tr></thead><tbody>
        ${materials.slice(0, 8).map(row).join('') || `<tr><td colspan="7" class="empty-cell">No hay materiales registrados.</td></tr>`}
      </tbody></table></div>
    </section>
    <section class="two-column">
      <article class="section-card"><div class="section-title"><div><span class="eyebrow">MÓDULO 2</span><h2>Matriz de Melaminas</h2></div><button class="btn btn-outline" data-route="melaminas" type="button">Abrir matriz</button></div>
        <div class="mini-grid">${state.melamines.slice(0, 5).map(m => `<div class="melamine-mini"><code>${m.id}</code><strong>${m.color}</strong><span>${m.quantity} ${m.unit}</span></div>`).join('')}</div>
      </article>
      <article class="section-card"><div class="section-title"><div><span class="eyebrow">MÓDULO 3</span><h2>Últimos movimientos</h2></div><button class="btn btn-outline" data-route="movimientos" type="button">Abrir terminal</button></div>
        <div class="activity-list">${state.movements.slice(0, 5).map(m => `<div class="activity"><span class="status-dot ${String(m.type).toLowerCase()}"></span><div><strong>${m.type} · ${m.material}</strong><small>${m.quantity} ${m.unit} · ${m.project || 'Sin proyecto'}</small></div><code>${new Date(m.date).toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'})}</code></div>`).join('') || `<div class="empty-inline">No hay movimientos.</div>`}</div>
      </article>
    </section>`;

    function row(m) {
      const critical = Number(m.quantity) <= Number(m.minimum);
      const warning = Number(m.quantity) <= Number(m.minimum) * 1.5;
      const statusClass = critical ? 'crítico' : warning ? 'advertencia' : 'óptimo';
      const text = critical ? 'Crítico' : warning ? 'Advertencia' : 'Óptimo';
      return `<tr><td><code>${escapeHtml(m.code)}</code></td><td><strong>${escapeHtml(m.name)}</strong><br><small>${escapeHtml(m.reference || m.note || '')}</small></td><td>${escapeHtml(m.unit)}</td><td class="numeric">${m.quantity}</td><td class="numeric">${m.minimum}</td><td><span class="status ${statusClass}">${text}</span></td><td><div class="row-actions">
        <button class="btn btn-sm" title="Editar material" type="button" data-action="edit-material" data-id="${m.id}">Editar</button>
        <button class="btn btn-sm btn-delete" title="Eliminar material" type="button" data-action="delete-material" data-id="${m.id}">Eliminar</button>
      </div></td></tr>`;
    }
    function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  }
};
