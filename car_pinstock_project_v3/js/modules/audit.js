window.AuditModule = {
  render(state) {
    return `<section class="page-head">
      <div><span class="eyebrow">MÓDULO 4</span><h1>Auditoría y trazabilidad</h1><p>Registro de altas, ediciones, movimientos y eliminaciones.</p></div>
      <button class="btn btn-outline" type="button" data-action="export-audit">Exportar bitácora</button>
    </section>
    <section class="section-card"><div class="section-title"><div><span class="eyebrow">HISTORIAL</span><h2>${state.audit.length} eventos registrados</h2></div></div>
      <div class="table-wrap"><table><thead><tr><th>FECHA</th><th>ACCIÓN</th><th>DETALLE</th><th>USUARIO</th></tr></thead><tbody>
      ${state.audit.map(a => `<tr><td>${new Date(a.date).toLocaleString('es-CO',{dateStyle:'short',timeStyle:'short'})}</td><td><span class="status ${String(a.action).toLowerCase().includes('elimin') ? 'crítico' : String(a.action).toLowerCase() === 'edición' ? 'advertencia' : 'óptimo'}">${escapeHtml(a.action)}</span></td><td>${escapeHtml(a.detail)}</td><td><strong>${escapeHtml(a.user)}</strong></td></tr>`).join('') || `<tr><td colspan="4" class="empty-cell">No existen eventos.</td></tr>`}
      </tbody></table></div>
    </section>`;
    function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  }
};
