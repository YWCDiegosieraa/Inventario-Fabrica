// MÓDULO DE MOVIMIENTOS
window.MovementsModule = {
  state: { type: 'Todos' },

  render(state) {
    const list = this.state.type === 'Todos'
      ? state.movements
      : state.movements.filter(m => m.type === this.state.type);

    return `<section class="page-head">
      <div><span class="eyebrow">MÓDULO 3</span><h1>Terminal de movimientos</h1><p>Entradas, salidas a producción y mermas/ajustes que actualizan el inventario.</p></div>
      <div class="segmented">${['Todos','Entrada','Salida','Merma'].map(t => `<button type="button" class="pill ${t === this.state.type ? 'active' : ''}" data-movement-filter="${t}">${t}</button>`).join('')}</div>
    </section>

    <div class="movement-summary">
      <div class="summary-tile"><span>MOVIMIENTOS</span><strong>${state.movements.length}</strong><small>registrados en la bitácora</small></div>
      <div class="summary-tile"><span>ENTRADAS</span><strong>${state.movements.filter(m => m.type === 'Entrada').length}</strong><small>ingresos de material</small></div>
      <div class="summary-tile"><span>SALIDAS</span><strong>${state.movements.filter(m => m.type === 'Salida').length}</strong><small>consumos de producción</small></div>
      <div class="summary-tile"><span>MERMAS</span><strong>${state.movements.filter(m => m.type === 'Merma').length}</strong><small>ajustes registrados</small></div>
    </div>

    <section class="movement-grid">
      <article class="section-card action-card">
        <span class="eyebrow">NUEVO REGISTRO</span>
        <h2>Registrar movimiento</h2>
        <p>La operación modifica las existencias y genera una entrada de auditoría.</p>
        <button class="btn btn-primary" type="button" data-action="open-movement">Registrar movimiento</button>
      </article>
      <article class="section-card">
        <div class="section-title"><div><span class="eyebrow">BITÁCORA</span><h2>${list.length} movimientos visibles</h2></div></div>
        <div class="activity-list">
          ${list.map(m => `<div class="movement-line">
            <div><strong>${escapeHtml(m.type)} · ${escapeHtml(m.material)}</strong><small>${Number(m.quantity)} ${escapeHtml(m.unit)} · ${escapeHtml(m.code)} · ${escapeHtml(m.project || 'Sin proyecto')}</small></div>
            <div class="right-meta"><span>${escapeHtml(m.user)}</span><code>${new Date(m.date).toLocaleString('es-CO',{dateStyle:'short',timeStyle:'short'})}</code></div>
          </div>`).join('') || `<div class="empty-inline">No hay movimientos para este filtro.</div>`}
        </div>
      </article>
    </section>`;

    function escapeHtml(value='') {
      return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
    }
  }
};
