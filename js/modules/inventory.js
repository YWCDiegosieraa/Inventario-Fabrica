// MÓDULO DE INVENTARIO
// Consolida materiales normales + las 10 referencias de melamina.
window.InventoryModule = {
  state: { query: '', category: 'Todos', source: 'Todos' },

  render(state) {
    const items = [
      ...state.materials.map(m => ({
        ...m,
        source: 'material',
        displayType: 'Material',
        referenceLabel: m.reference || 'Sin referencia'
      })),
      ...state.melamines.map(m => ({
        id: m.id,
        code: m.id,
        name: 'Melamina',
        category: 'Melamina',
        unit: m.unit || 'Unidad',
        quantity: Number(m.quantity) || 0,
        minimum: Number(m.minimum) || 0,
        reference: m.reference,
        referenceLabel: `${m.reference}${m.color ? ` · ${m.color}` : ''}`,
        note: 'Referencia independiente de melamina.',
        source: 'melamine',
        displayType: 'Melamina'
      }))
    ];

    const categories = ['Todos', ...new Set(items.map(m => m.category))];
    const q = this.state.query.trim().toLowerCase();
    const filtered = items.filter(item => {
      const categoryOk = this.state.category === 'Todos' || item.category === this.state.category;
      const sourceOk = this.state.source === 'Todos' || item.source === this.state.source;
      const haystack = [
        item.code, item.name, item.category, item.reference,
        item.color, item.unit, item.note
      ].join(' ').toLowerCase();
      return categoryOk && sourceOk && haystack.includes(q);
    });

    const materialCount = state.materials.length;
    const melamineCount = state.melamines.length;

    return `<section class="page-head">
      <div><span class="eyebrow">MÓDULO 1</span><h1>Inventario general</h1><p>Vista central de todos los materiales y referencias registradas.</p></div>
      <button class="btn btn-primary" data-action="open-add" type="button">＋ Agregar material</button>
    </section>

    <div class="inventory-summary">
      <div class="summary-tile"><span>MATERIALES</span><strong>${materialCount}</strong><small>registros generales</small></div>
      <div class="summary-tile"><span>MELAMINAS</span><strong>${melamineCount}</strong><small>referencias independientes</small></div>
      <div class="summary-tile"><span>TOTAL</span><strong>${items.length}</strong><small>existencias administradas</small></div>
    </div>

    <div class="toolbar">
      <label class="search"><span>⌕</span><input id="inventory-search" value="${escapeHtml(this.state.query)}" placeholder="Buscar código, material, unidad o referencia..." autocomplete="off"></label>
      <div class="filter-pills">
        ${categories.map(category => `<button type="button" class="pill ${category === this.state.category ? 'active' : ''}" data-filter-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join('')}
      </div>
      <div class="filter-pills">
        ${['Todos','material','melamine'].map(source => {
          const label = source === 'Todos' ? 'Todos' : source === 'material' ? 'Materiales' : 'Melaminas';
          return `<button type="button" class="pill ${source === this.state.source ? 'active' : ''}" data-filter-source="${source}">${label}</button>`;
        }).join('')}
      </div>
    </div>

    <section class="section-card">
      <div class="section-title">
        <div><span class="eyebrow">EXISTENCIAS</span><h2>${filtered.length} registros visibles</h2></div>
        <button class="btn btn-outline" data-action="export-csv" type="button">Exportar CSV</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>TIPO</th><th>CÓDIGO / SKU</th><th>MATERIAL</th><th>REFERENCIA</th><th>U/M</th><th>STOCK</th><th>MÍNIMO</th><th>ESTADO</th><th class="actions-col">ACCIONES</th></tr></thead>
        <tbody>
          ${filtered.length ? filtered.map(renderRow).join('') : `<tr><td colspan="9" class="empty-cell">No hay registros que coincidan con la búsqueda o los filtros.</td></tr>`}
        </tbody>
      </table></div>
    </section>`;

    function renderRow(m) {
      const quantity = Number(m.quantity) || 0;
      const minimum = Number(m.minimum) || 0;
      const critical = quantity <= minimum;
      const warning = quantity <= minimum * 1.5;
      const statusClass = critical ? 'crítico' : warning ? 'advertencia' : 'óptimo';
      const statusText = critical ? 'Crítico' : warning ? 'Advertencia' : 'Óptimo';

      const actions = m.source === 'melamine'
        ? `<button class="btn btn-sm" title="Ajustar referencia de melamina" type="button" data-action="open-melamine" data-id="${escapeHtml(m.id)}">Ajustar</button>`
        : `<button class="btn btn-sm" title="Editar material" type="button" data-action="edit-material" data-id="${escapeHtml(m.id)}">Editar</button>
           <button class="btn btn-sm btn-delete" title="Eliminar material" type="button" data-action="delete-material" data-id="${escapeHtml(m.id)}">Eliminar</button>`;

      return `<tr>
        <td><span class="source-badge ${m.source === 'melamine' ? 'melamine' : ''}">${escapeHtml(m.displayType)}</span></td>
        <td><code>${escapeHtml(m.code)}</code></td>
        <td><strong>${escapeHtml(m.name)}</strong></td>
        <td><small>${escapeHtml(m.referenceLabel)}</small></td>
        <td>${escapeHtml(m.unit)}</td>
        <td class="numeric">${quantity}</td>
        <td class="numeric">${minimum}</td>
        <td><span class="status ${statusClass}">${statusText}</span></td>
        <td><div class="row-actions">${actions}</div></td>
      </tr>`;
    }

    function escapeHtml(value = '') {
      return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
    }
  }
};
