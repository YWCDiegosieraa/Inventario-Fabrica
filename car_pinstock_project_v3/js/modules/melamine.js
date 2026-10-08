window.MelamineModule = {
  render(state) {
    const critical = state.melamines.filter(m => Number(m.quantity) <= Number(m.minimum)).length;
    return `<section class="page-head">
      <div><span class="eyebrow">MÓDULO 2</span><h1>Matriz de Melaminas</h1><p>10 referencias independientes, cada una con su código y cantidad propia.</p></div>
      <div class="summary-badge">${critical} bajo mínimo</div>
    </section>
    <div class="info-card"><strong>Regla del inventario:</strong> cada referencia de melamina mantiene su cantidad por separado; no se consolida en una sola existencia.</div>
    <section class="melamine-grid">${state.melamines.map(m => {
      const quantity = Math.max(0, Math.round(Number(m.quantity) || 0));
      const minimum = Math.max(0, Math.round(Number(m.minimum) || 0));
      const criticalFlag = quantity <= minimum;
      const warning = quantity <= minimum * 1.5;
      const cls = criticalFlag ? 'crítico' : warning ? 'advertencia' : 'óptimo';
      const label = criticalFlag ? 'Crítico' : warning ? 'Advertencia' : 'Óptimo';
      const pct = Math.min(100, Math.round((quantity / Math.max(minimum * 2, 1)) * 100));
      return `<article class="melamine-card ${criticalFlag ? 'critical' : ''}">
        <div class="mel-head"><code>${m.id}</code><span class="status ${cls}">${label}</span></div>
        <div class="swatch" style="background:${swatch(m.id)}"></div>
        <h3>${escapeHtml(m.reference)}</h3><p>${escapeHtml(m.color)}</p>
        <div class="stock-row"><span>Disponible</span><strong>${quantity} ${m.unit}</strong></div>
        <div class="progress"><i style="width:${pct}%"></i></div>
        <div class="stock-footer"><small>Mínimo: ${minimum}</small><button class="btn btn-sm" type="button" data-action="open-melamine" data-id="${m.id}">Ver / ajustar</button></div>
      </article>`;
    }).join('')}</section>`;

    function swatch(id) {
      const map = {'MEL-001':'#efe2c2','MEL-002':'#b48a61','MEL-003':'#8c6448','MEL-004':'#d4c3ae','MEL-005':'#6f5849','MEL-006':'#f4d3b2','MEL-007':'#d9d9d9','MEL-008':'#968c81','MEL-009':'#aab0a6','MEL-010':'#c4a37a'};
      return map[id] || '#cbd5e1';
    }
    function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  }
};
