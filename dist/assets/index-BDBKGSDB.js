var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r=t((()=>{window.CARPINSTOCK_INITIAL={users:[{id:1,username:`admin`,name:`Jefe de Empresa`,role:`Administrador`,password:`admin123`},{id:2,username:`bodega`,name:`Supervisor de Bodega`,role:`Supervisor`,password:`bodega123`},{id:3,username:`operario`,name:`Trabajador Autorizado`,role:`Operario`,password:`operario123`}],materials:[{id:`MAT-001`,code:`MAT-FOR-001`,name:`Fórmica`,category:`Fórmica & RH`,unit:`Unidad`,quantity:18,minimum:10,reference:``,note:`Material decorativo.`},{id:`MAT-002`,code:`MAT-RH-001`,name:`RH`,category:`Fórmica & RH`,unit:`Lámina`,quantity:34,minimum:15,reference:``,note:`Tablero resistente a humedad.`},{id:`MAT-003`,code:`MAT-AGL-001`,name:`Aglomerado`,category:`Aglomerado`,unit:`Unidad`,quantity:22,minimum:12,reference:``,note:`Tablero de partículas.`},{id:`MAT-004`,code:`MAT-PAT-001`,name:`Patas`,category:`Herrajes & Patas`,unit:`Unidad`,quantity:85,minimum:30,reference:``,note:`1 unidad = 4 patas.`},{id:`MAT-005`,code:`MAT-HER-001`,name:`Herrajes`,category:`Herrajes & Patas`,unit:`Unidad`,quantity:120,minimum:40,reference:``,note:`1 unidad = 1 pareja.`},{id:`MAT-006`,code:`MAT-PIN-001`,name:`Pintura`,category:`Químicos`,unit:`Galón`,quantity:6,minimum:5,reference:``,note:`Registrar por galón.`},{id:`MAT-007`,code:`MAT-FRM-001`,name:`Fórmicon`,category:`Fórmica & RH`,unit:`Unidad`,quantity:14,minimum:8,reference:``,note:`Enchapado compacto.`},{id:`MAT-008`,code:`MAT-CAN-001`,name:`Cantos`,category:`Cantos`,unit:`Metro`,quantity:420,minimum:150,reference:``,note:`Registrar longitud en metros.`},{id:`MAT-009`,code:`MAT-COL-001`,name:`Colbón rosado`,category:`Químicos`,unit:`Kilo`,quantity:4.5,minimum:10,reference:``,note:`Nivel crítico de demostración.`},{id:`MAT-010`,code:`MAT-BOX-001`,name:`Boxer`,category:`Químicos`,unit:`Kilo`,quantity:8,minimum:6,reference:``,note:`Adhesivo de contacto.`},{id:`MAT-011`,code:`MAT-TOR-001`,name:`Tornillos`,category:`Tornillería`,unit:`Unidad`,quantity:3200,minimum:800,reference:``,note:`Manejo inicial por unidad.`}],melamines:[{id:`MEL-001`,reference:`Referencia 01`,color:`Color 01`,quantity:18,minimum:8,unit:`Unidad`},{id:`MEL-002`,reference:`Referencia 02`,color:`Color 02`,quantity:22,minimum:8,unit:`Unidad`},{id:`MEL-003`,reference:`Referencia 03`,color:`Color 03`,quantity:3,minimum:10,unit:`Unidad`},{id:`MEL-004`,reference:`Referencia 04`,color:`Color 04`,quantity:14,minimum:8,unit:`Unidad`},{id:`MEL-005`,reference:`Referencia 05`,color:`Color 05`,quantity:10,minimum:8,unit:`Unidad`},{id:`MEL-006`,reference:`Referencia 06`,color:`Color 06`,quantity:25,minimum:10,unit:`Unidad`},{id:`MEL-007`,reference:`Referencia 07`,color:`Color 07`,quantity:8,minimum:8,unit:`Unidad`},{id:`MEL-008`,reference:`Referencia 08`,color:`Color 08`,quantity:12,minimum:8,unit:`Unidad`},{id:`MEL-009`,reference:`Referencia 09`,color:`Color 09`,quantity:6,minimum:8,unit:`Unidad`},{id:`MEL-010`,reference:`Referencia 10`,color:`Color 10`,quantity:16,minimum:8,unit:`Unidad`}],movements:[{id:1,date:`2026-10-05T09:15:00`,type:`Entrada`,material:`RH`,code:`MAT-RH-001`,quantity:12,unit:`Lámina`,project:`Recepción`,user:`Supervisor de Bodega`},{id:2,date:`2026-10-05T10:40:00`,type:`Salida`,material:`Colbón rosado`,code:`MAT-COL-001`,quantity:5.5,unit:`Kilo`,project:`Cocina Integral A-14`,user:`Supervisor de Bodega`},{id:3,date:`2026-10-05T11:20:00`,type:`Salida`,material:`Melamina`,code:`MEL-003`,quantity:4,unit:`Unidad`,project:`Closet Nogal`,user:`Jefe de Empresa`},{id:4,date:`2026-10-05T13:05:00`,type:`Merma`,material:`Cantos`,code:`MAT-CAN-001`,quantity:8,unit:`Metro`,project:`Módulo Baño B-03`,user:`Trabajador Autorizado`}],audit:[{id:1,date:`2026-10-05T13:05:00`,action:`MERMA`,detail:`Registro de 8 metros de cantos`,user:`Trabajador Autorizado`},{id:2,date:`2026-10-05T11:20:00`,action:`SALIDA`,detail:`4 unidades de MEL-003 para Closet Nogal`,user:`Jefe de Empresa`},{id:3,date:`2026-10-05T10:40:00`,action:`SALIDA`,detail:`5.5 kilos de Colbón rosado`,user:`Supervisor de Bodega`},{id:4,date:`2026-10-05T09:15:00`,action:`ENTRADA`,detail:`12 láminas de RH`,user:`Supervisor de Bodega`}]}})),i=t((()=>{(function(){let e=`carpinstock_state_v2`,t=[`carpinstock_state_v1`];function n(e){return JSON.parse(JSON.stringify(e))}function r(e){let t=n(window.CARPINSTOCK_INITIAL),r=e&&typeof e==`object`?e:{};return{users:Array.isArray(r.users)&&r.users.length?r.users:t.users,materials:Array.isArray(r.materials)?r.materials:t.materials,melamines:Array.isArray(r.melamines)?r.melamines:t.melamines,movements:Array.isArray(r.movements)?r.movements:t.movements,audit:Array.isArray(r.audit)?r.audit:t.audit,session:null}}window.CarpiStorage={key:e,load(){let n=[e,...t];for(let t of n){let n=localStorage.getItem(t);if(n)try{let i=r(JSON.parse(n));return t!==e&&localStorage.setItem(e,JSON.stringify(i)),i}catch{}}return r(null)},save(t){localStorage.setItem(e,JSON.stringify(r(t)))},reset(){return localStorage.removeItem(e),t.forEach(e=>localStorage.removeItem(e)),r(null)}}})()})),a=t((()=>{(function(){window.CarpiAuth={login(e,t,n){let r=String(e||``).trim().toLowerCase();return n.find(e=>String(e.username).toLowerCase()===r&&e.password===t)||null},canEdit(e){return!!(e&&[`Administrador`,`Supervisor`,`Operario`].includes(e.role))},canDelete(e){return!!(e&&[`Administrador`,`Supervisor`].includes(e.role))},canAdmin(e){return!!(e&&e.role===`Administrador`)}}})()})),o=t((()=>{window.DashboardModule={render(e){let t=e.materials,n=[...t,...e.melamines],r=n.filter(e=>Number(e.quantity)<=Number(e.minimum)).length,i=n.filter(e=>Number(e.quantity)>Number(e.minimum)*1.25).length,a=n.length?Math.round(i/n.length*100):0;return`<section class="page-head">
      <div><span class="eyebrow">LÍNEA 01 / CORTE Y ENSAMBLE</span><h1>Dashboard de inventario</h1><p>Control centralizado del inventario y trazabilidad de la fábrica.</p></div>
      <button class="btn btn-primary" data-action="open-add" type="button">＋ Registrar material (HU001)</button>
    </section>
    <div class="demo-banner"><strong>Modo demostración.</strong> Las cantidades iniciales son ejemplos y pueden editarse. Los cambios se guardan en este navegador.</div>
    <section class="metrics-grid">
      <article class="metric-card"><span>ACTIVOS</span><strong>${n.length}</strong><small>materiales + referencias de melamina</small></article>
      <article class="metric-card"><span>NIVEL GLOBAL</span><strong>${a}%</strong><small>existencias por encima del mínimo</small></article>
      <article class="metric-card metric-alert"><span>ALERTAS</span><strong>${r}</strong><small>igual o por debajo del mínimo</small></article>
      <article class="metric-card"><span>MOVIMIENTOS</span><strong>${e.movements.length}</strong><small>registros en la bitácora</small></article>
    </section>
    <section class="section-card">
      <div class="section-title"><div><span class="eyebrow">MÓDULO 1</span><h2>Existencias físicas</h2></div><button class="btn btn-outline" data-route="inventario" type="button">Ver inventario completo</button></div>
      <div class="table-wrap"><table><thead><tr><th>SKU</th><th>MATERIAL</th><th>U/M</th><th>STOCK</th><th>MÍNIMO</th><th>ESTADO</th><th>ACCIONES</th></tr></thead><tbody>
        ${t.slice(0,8).map(o).join(``)||`<tr><td colspan="7" class="empty-cell">No hay materiales registrados.</td></tr>`}
      </tbody></table></div>
    </section>
    <section class="two-column">
      <article class="section-card"><div class="section-title"><div><span class="eyebrow">MÓDULO 2</span><h2>Matriz de Melaminas</h2></div><button class="btn btn-outline" data-route="melaminas" type="button">Abrir matriz</button></div>
        <div class="mini-grid">${e.melamines.slice(0,5).map(e=>`<div class="melamine-mini"><code>${e.id}</code><strong>${e.color}</strong><span>${e.quantity} ${e.unit}</span></div>`).join(``)}</div>
      </article>
      <article class="section-card"><div class="section-title"><div><span class="eyebrow">MÓDULO 3</span><h2>Últimos movimientos</h2></div><button class="btn btn-outline" data-route="movimientos" type="button">Abrir terminal</button></div>
        <div class="activity-list">${e.movements.slice(0,5).map(e=>`<div class="activity"><span class="status-dot ${String(e.type).toLowerCase()}"></span><div><strong>${e.type} · ${e.material}</strong><small>${e.quantity} ${e.unit} · ${e.project||`Sin proyecto`}</small></div><code>${new Date(e.date).toLocaleTimeString(`es-CO`,{hour:`2-digit`,minute:`2-digit`})}</code></div>`).join(``)||`<div class="empty-inline">No hay movimientos.</div>`}</div>
      </article>
    </section>`;function o(e){let t=Number(e.quantity)<=Number(e.minimum),n=Number(e.quantity)<=Number(e.minimum)*1.5,r=t?`crítico`:n?`advertencia`:`óptimo`,i=t?`Crítico`:n?`Advertencia`:`Óptimo`;return`<tr><td><code>${s(e.code)}</code></td><td><strong>${s(e.name)}</strong><br><small>${s(e.reference||e.note||``)}</small></td><td>${s(e.unit)}</td><td class="numeric">${e.quantity}</td><td class="numeric">${e.minimum}</td><td><span class="status ${r}">${i}</span></td><td><div class="row-actions">
        <button class="btn btn-sm" title="Editar material" type="button" data-action="edit-material" data-id="${e.id}">Editar</button>
        <button class="btn btn-sm btn-delete" title="Eliminar material" type="button" data-action="delete-material" data-id="${e.id}">Eliminar</button>
      </div></td></tr>`}function s(e=``){return String(e).replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e])}}}})),s=t((()=>{window.InventoryModule={state:{query:``,category:`Todos`,source:`Todos`},render(e){let t=[...e.materials.map(e=>({...e,source:`material`,displayType:`Material`,referenceLabel:e.reference||`Sin referencia`})),...e.melamines.map(e=>({id:e.id,code:e.id,name:`Melamina`,category:`Melamina`,unit:e.unit||`Unidad`,quantity:Number(e.quantity)||0,minimum:Number(e.minimum)||0,reference:e.reference,referenceLabel:`${e.reference}${e.color?` · ${e.color}`:``}`,note:`Referencia independiente de melamina.`,source:`melamine`,displayType:`Melamina`}))],n=[`Todos`,...new Set(t.map(e=>e.category))],r=this.state.query.trim().toLowerCase(),i=t.filter(e=>{let t=this.state.category===`Todos`||e.category===this.state.category,n=this.state.source===`Todos`||e.source===this.state.source,i=[e.code,e.name,e.category,e.reference,e.color,e.unit,e.note].join(` `).toLowerCase();return t&&n&&i.includes(r)});return`<section class="page-head">
      <div><span class="eyebrow">MÓDULO 1</span><h1>Inventario general</h1><p>Vista central de todos los materiales y referencias registradas.</p></div>
      <button class="btn btn-primary" data-action="open-add" type="button">＋ Agregar material</button>
    </section>

    <div class="inventory-summary">
      <div class="summary-tile"><span>MATERIALES</span><strong>${e.materials.length}</strong><small>registros generales</small></div>
      <div class="summary-tile"><span>MELAMINAS</span><strong>${e.melamines.length}</strong><small>referencias independientes</small></div>
      <div class="summary-tile"><span>TOTAL</span><strong>${t.length}</strong><small>existencias administradas</small></div>
    </div>

    <div class="toolbar">
      <label class="search"><span>⌕</span><input id="inventory-search" value="${o(this.state.query)}" placeholder="Buscar código, material, unidad o referencia..." autocomplete="off"></label>
      <div class="filter-pills">
        ${n.map(e=>`<button type="button" class="pill ${e===this.state.category?`active`:``}" data-filter-category="${o(e)}">${o(e)}</button>`).join(``)}
      </div>
      <div class="filter-pills">
        ${[`Todos`,`material`,`melamine`].map(e=>{let t=e===`Todos`?`Todos`:e===`material`?`Materiales`:`Melaminas`;return`<button type="button" class="pill ${e===this.state.source?`active`:``}" data-filter-source="${e}">${t}</button>`}).join(``)}
      </div>
    </div>

    <section class="section-card">
      <div class="section-title">
        <div><span class="eyebrow">EXISTENCIAS</span><h2>${i.length} registros visibles</h2></div>
        <button class="btn btn-outline" data-action="export-csv" type="button">Exportar CSV</button>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>TIPO</th><th>CÓDIGO / SKU</th><th>MATERIAL</th><th>REFERENCIA</th><th>U/M</th><th>STOCK</th><th>MÍNIMO</th><th>ESTADO</th><th class="actions-col">ACCIONES</th></tr></thead>
        <tbody>
          ${i.length?i.map(a).join(``):`<tr><td colspan="9" class="empty-cell">No hay registros que coincidan con la búsqueda o los filtros.</td></tr>`}
        </tbody>
      </table></div>
    </section>`;function a(e){let t=Number(e.quantity)||0,n=Number(e.minimum)||0,r=t<=n,i=t<=n*1.5,a=r?`crítico`:i?`advertencia`:`óptimo`,s=r?`Crítico`:i?`Advertencia`:`Óptimo`,c=e.source===`melamine`?`<button class="btn btn-sm" title="Ajustar referencia de melamina" type="button" data-action="open-melamine" data-id="${o(e.id)}">Ajustar</button>`:`<button class="btn btn-sm" title="Editar material" type="button" data-action="edit-material" data-id="${o(e.id)}">Editar</button>
           <button class="btn btn-sm btn-delete" title="Eliminar material" type="button" data-action="delete-material" data-id="${o(e.id)}">Eliminar</button>`;return`<tr>
        <td><span class="source-badge ${e.source===`melamine`?`melamine`:``}">${o(e.displayType)}</span></td>
        <td><code>${o(e.code)}</code></td>
        <td><strong>${o(e.name)}</strong></td>
        <td><small>${o(e.referenceLabel)}</small></td>
        <td>${o(e.unit)}</td>
        <td class="numeric">${t}</td>
        <td class="numeric">${n}</td>
        <td><span class="status ${a}">${s}</span></td>
        <td><div class="row-actions">${c}</div></td>
      </tr>`}function o(e=``){return String(e).replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e])}}}})),c=t((()=>{window.MelamineModule={render(e){return`<section class="page-head">
      <div><span class="eyebrow">MÓDULO 2</span><h1>Matriz de Melaminas</h1><p>10 referencias independientes, cada una con su código y cantidad propia.</p></div>
      <div class="summary-badge">${e.melamines.filter(e=>Number(e.quantity)<=Number(e.minimum)).length} bajo mínimo</div>
    </section>
    <div class="info-card"><strong>Regla del inventario:</strong> cada referencia de melamina mantiene su cantidad por separado; no se consolida en una sola existencia.</div>
    <section class="melamine-grid">${e.melamines.map(e=>{let r=Math.max(0,Math.round(Number(e.quantity)||0)),i=Math.max(0,Math.round(Number(e.minimum)||0)),a=r<=i,o=r<=i*1.5,s=a?`crítico`:o?`advertencia`:`óptimo`,c=a?`Crítico`:o?`Advertencia`:`Óptimo`,l=Math.min(100,Math.round(r/Math.max(i*2,1)*100));return`<article class="melamine-card ${a?`critical`:``}">
        <div class="mel-head"><code>${e.id}</code><span class="status ${s}">${c}</span></div>
        <div class="swatch" style="background:${t(e.id)}"></div>
        <h3>${n(e.reference)}</h3><p>${n(e.color)}</p>
        <div class="stock-row"><span>Disponible</span><strong>${r} ${e.unit}</strong></div>
        <div class="progress"><i style="width:${l}%"></i></div>
        <div class="stock-footer"><small>Mínimo: ${i}</small><button class="btn btn-sm" type="button" data-action="open-melamine" data-id="${e.id}">Ver / ajustar</button></div>
      </article>`}).join(``)}</section>`;function t(e){return{"MEL-001":`#efe2c2`,"MEL-002":`#b48a61`,"MEL-003":`#8c6448`,"MEL-004":`#d4c3ae`,"MEL-005":`#6f5849`,"MEL-006":`#f4d3b2`,"MEL-007":`#d9d9d9`,"MEL-008":`#968c81`,"MEL-009":`#aab0a6`,"MEL-010":`#c4a37a`}[e]||`#cbd5e1`}function n(e=``){return String(e).replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e])}}}})),l=t((()=>{window.MovementsModule={state:{type:`Todos`},render(e){let t=this.state.type===`Todos`?e.movements:e.movements.filter(e=>e.type===this.state.type);return`<section class="page-head">
      <div><span class="eyebrow">MÓDULO 3</span><h1>Terminal de movimientos</h1><p>Entradas, salidas a producción y mermas/ajustes que actualizan el inventario.</p></div>
      <div class="segmented">${[`Todos`,`Entrada`,`Salida`,`Merma`].map(e=>`<button type="button" class="pill ${e===this.state.type?`active`:``}" data-movement-filter="${e}">${e}</button>`).join(``)}</div>
    </section>

    <div class="movement-summary">
      <div class="summary-tile"><span>MOVIMIENTOS</span><strong>${e.movements.length}</strong><small>registrados en la bitácora</small></div>
      <div class="summary-tile"><span>ENTRADAS</span><strong>${e.movements.filter(e=>e.type===`Entrada`).length}</strong><small>ingresos de material</small></div>
      <div class="summary-tile"><span>SALIDAS</span><strong>${e.movements.filter(e=>e.type===`Salida`).length}</strong><small>consumos de producción</small></div>
      <div class="summary-tile"><span>MERMAS</span><strong>${e.movements.filter(e=>e.type===`Merma`).length}</strong><small>ajustes registrados</small></div>
    </div>

    <section class="movement-grid">
      <article class="section-card action-card">
        <span class="eyebrow">NUEVO REGISTRO</span>
        <h2>Registrar movimiento</h2>
        <p>La operación modifica las existencias y genera una entrada de auditoría.</p>
        <button class="btn btn-primary" type="button" data-action="open-movement">Registrar movimiento</button>
      </article>
      <article class="section-card">
        <div class="section-title"><div><span class="eyebrow">BITÁCORA</span><h2>${t.length} movimientos visibles</h2></div></div>
        <div class="activity-list">
          ${t.map(e=>`<div class="movement-line">
            <div><strong>${n(e.type)} · ${n(e.material)}</strong><small>${Number(e.quantity)} ${n(e.unit)} · ${n(e.code)} · ${n(e.project||`Sin proyecto`)}</small></div>
            <div class="right-meta"><span>${n(e.user)}</span><code>${new Date(e.date).toLocaleString(`es-CO`,{dateStyle:`short`,timeStyle:`short`})}</code></div>
          </div>`).join(``)||`<div class="empty-inline">No hay movimientos para este filtro.</div>`}
        </div>
      </article>
    </section>`;function n(e=``){return String(e).replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e])}}}})),u=t((()=>{window.AuditModule={render(e){return`<section class="page-head">
      <div><span class="eyebrow">MÓDULO 4</span><h1>Auditoría y trazabilidad</h1><p>Registro de altas, ediciones, movimientos y eliminaciones.</p></div>
      <button class="btn btn-outline" type="button" data-action="export-audit">Exportar bitácora</button>
    </section>
    <section class="section-card"><div class="section-title"><div><span class="eyebrow">HISTORIAL</span><h2>${e.audit.length} eventos registrados</h2></div></div>
      <div class="table-wrap"><table><thead><tr><th>FECHA</th><th>ACCIÓN</th><th>DETALLE</th><th>USUARIO</th></tr></thead><tbody>
      ${e.audit.map(e=>`<tr><td>${new Date(e.date).toLocaleString(`es-CO`,{dateStyle:`short`,timeStyle:`short`})}</td><td><span class="status ${String(e.action).toLowerCase().includes(`elimin`)?`crítico`:String(e.action).toLowerCase()===`edición`?`advertencia`:`óptimo`}">${t(e.action)}</span></td><td>${t(e.detail)}</td><td><strong>${t(e.user)}</strong></td></tr>`).join(``)||`<tr><td colspan="4" class="empty-cell">No existen eventos.</td></tr>`}
      </tbody></table></div>
    </section>`;function t(e=``){return String(e).replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e])}}}})),d=t((()=>{(function(){let e=document.getElementById(`app`),t=document.getElementById(`toast-root`),n=CarpiStorage.load();n.session=null;let r=`dashboard`,i=null,a=null,o=null,s=null,c={dashboard:e=>DashboardModule.render(e),inventario:e=>InventoryModule.render(e),melaminas:e=>MelamineModule.render(e),movimientos:e=>MovementsModule.render(e),auditoria:e=>AuditModule.render(e)};window.CarpiApp={state:n,navigate:k,closeModal:x,openModal:S};function l(){return CarpiAuth.canEdit(n.session)}function u(){return CarpiAuth.canDelete(n.session)}function d(){CarpiStorage.save(n)}function f(e=``){return String(e).replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e])}function p(e,n=`ok`){let r=document.createElement(`div`);r.className=`toast ${n}`,r.textContent=e,t.appendChild(r),window.setTimeout(()=>r.remove(),3200)}function m(e,t){let n=t.map(e=>e.map(e=>`"${String(e??``).replace(/"/g,`""`)}"`).join(`,`)).join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8;`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),500)}function h(){e.innerHTML=`
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
          <div class="demo-credentials">
            <strong>Usuarios de demostración</strong>
            <small>admin / admin123 · bodega / bodega123 · operario / operario123</small>
          </div>
        </div>
      </div>`}function g(){e.innerHTML=`
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
            ${_(`dashboard`,`▦`,`Dashboard`)}
            ${_(`inventario`,`▤`,`Inventario`)}
            ${_(`melaminas`,`◫`,`Matriz de Melaminas`)}
            ${_(`movimientos`,`⇄`,`Terminal de Movimientos`)}
            ${_(`auditoria`,`✓`,`Auditoría y Trazabilidad`)}
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
                <span class="avatar">${f((n.session.name||`US`).slice(0,2).toUpperCase())}</span>
                <div><strong>${f(n.session.name)}</strong><small>${f(n.session.role)}</small></div>
                <button class="btn-logout" data-action="logout" type="button">Salir</button>
              </div>
            </div>
          </header>
          <div id="content" aria-live="polite"></div>
        </main>

        <nav class="bottom-nav" aria-label="Navegación móvil">
          ${_(`dashboard`,`▦`,`Inicio`)}
          ${_(`inventario`,`▤`,`Inventario`)}
          ${_(`melaminas`,`◫`,`Melaminas`)}
          ${_(`movimientos`,`⇄`,`Movimientos`)}
          ${_(`auditoria`,`✓`,`Auditoría`)}
        </nav>
      </div>`}function _(e,t,n){return`<button class="nav-item ${r===e?`active`:``}" data-route="${e}" type="button">
      <span>${t}</span><small>${n}</small>
    </button>`}function v(){n.session?(g(),y()):(x(!1),h())}function y(){let e=document.getElementById(`content`);e&&(e.innerHTML=(c[r]||c.dashboard)(n))}function b(){n.session&&y()}function x(e=!0){i=null,a=null,s=null,e&&(o=null),document.getElementById(`modal-root`)?.remove(),document.body.classList.remove(`modal-open`)}function S(e,t=null){document.getElementById(`modal-root`)&&x(!1),i=e,a=e===`material`?t:null,o=e===`melamine`?t:o,s=e===`delete`?t:null;let n=document.createElement(`div`);n.id=`modal-root`,n.setAttribute(`data-modal-root`,`true`),n.innerHTML=C(),document.body.appendChild(n),document.body.classList.add(`modal-open`);let r=n.querySelector(`input:not([disabled]), select, textarea, button[data-action="close-modal"]`);r&&window.requestAnimationFrame(()=>r.focus())}function C(){return i===`material`?w():i===`movement`?T():i===`melamine`?E():i===`delete`?D():i===`help`?O():``}function w(){let e=n.materials.find(e=>e.id===a)||{name:``,code:``,category:`Otro`,unit:`Unidad`,quantity:0,minimum:0,reference:``,note:``};return`<div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="material-modal-title">
        <div class="modal-head">
          <div><span class="eyebrow">HU001</span><h2 id="material-modal-title">${a?`Editar material`:`Registrar nuevo material`}</h2></div>
          <button class="icon-btn modal-close" data-action="close-modal" title="Cerrar" type="button">×</button>
        </div>
        <form id="material-form" class="form-grid" novalidate>
          <label>Nombre del material<input name="name" required value="${f(e.name)}" placeholder="Ej. RH"></label>
          <label>Código / SKU<input name="code" required value="${f(e.code)}" placeholder="Ej. MAT-RH-002"></label>
          <label>Categoría<select name="category">${[`Fórmica & RH`,`Aglomerado`,`Herrajes & Patas`,`Químicos`,`Cantos`,`Tornillería`,`Otro`].map(t=>`<option value="${f(t)}" ${e.category===t?`selected`:``}>${f(t)}</option>`).join(``)}</select></label>
          <label>Unidad de medida<select name="unit">${[`Unidad`,`Lámina`,`Galón`,`Metro`,`Kilo`].map(t=>`<option value="${f(t)}" ${e.unit===t?`selected`:``}>${f(t)}</option>`).join(``)}</select></label>
          <label>Referencia / color<input name="reference" value="${f(e.reference||``)}" placeholder="Cuando aplique"></label>
          <label>Cantidad inicial<input name="quantity" type="number" step="0.01" min="0" required value="${Number(e.quantity)||0}"></label>
          <label>Stock mínimo<input name="minimum" type="number" step="0.01" min="0" required value="${Number(e.minimum)||0}"></label>
          <label class="full">Observación<textarea name="note" rows="3" placeholder="Información adicional">${f(e.note||``)}</textarea></label>
          <div class="form-hint full">Reglas: Patas = 1 unidad equivale a 4 patas. Herrajes = 1 unidad equivale a una pareja. Melamina se administra mediante 10 referencias independientes.</div>
          <div class="modal-actions full">
            <button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button>
            <button type="submit" class="btn btn-primary">${a?`Guardar cambios`:`Registrar material`}</button>
          </div>
        </form>
      </section>
    </div>`}function T(){return`<div class="modal-backdrop" role="presentation">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="movement-modal-title">
        <div class="modal-head"><div><span class="eyebrow">MÓDULO 3</span><h2 id="movement-modal-title">Registrar movimiento</h2></div><button class="icon-btn modal-close" data-action="close-modal" type="button">×</button></div>
        <form id="movement-form" class="form-grid" novalidate>
          <label>Tipo<select name="type"><option>Entrada</option><option>Salida</option><option>Merma</option></select></label>
          <label>Material<select name="code">${[...n.materials.map(e=>({code:e.code,name:e.name,unit:e.unit})),...n.melamines.map(e=>({code:e.id,name:`Melamina · ${e.reference}`,unit:e.unit}))].map(e=>`<option value="${f(e.code)}">${f(e.code)} · ${f(e.name)}</option>`).join(``)}</select></label>
          <label>Cantidad<input name="quantity" type="number" min="0.01" step="0.01" required placeholder="0"></label>
          <label>Proyecto / orden de trabajo<input name="project" placeholder="Ej. Cocina A-14"></label>
          <label class="full">Justificación / detalle<textarea name="detail" rows="3" placeholder="Motivo del movimiento"></textarea></label>
          <div class="modal-actions full"><button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button><button type="submit" class="btn btn-primary">Registrar movimiento</button></div>
        </form>
      </section>
    </div>`}function E(){let e=n.melamines.find(e=>e.id===o);return e?`<div class="modal-backdrop" role="presentation">
      <section class="modal small" role="dialog" aria-modal="true" aria-labelledby="melamine-modal-title">
        <div class="modal-head"><div><span class="eyebrow">${f(e.id)}</span><h2 id="melamine-modal-title">${f(e.reference)}</h2></div><button class="icon-btn modal-close" data-action="close-modal" type="button">×</button></div>
        <form id="melamine-form" class="form-grid" novalidate>
          <label>Referencia<input value="${f(e.reference)}" disabled></label>
          <label>Color / descripción<input name="color" value="${f(e.color)}"></label>
          <label>Cantidad
            <div class="number-stepper">
              <button type="button" class="stepper-btn" data-action="melamine-qty" data-direction="-1" aria-label="Disminuir una unidad">−</button>
              <input id="melamine-quantity" name="quantity" type="number" min="0" step="1" inputmode="numeric" value="${Math.max(0,Math.round(Number(e.quantity)||0))}">
              <button type="button" class="stepper-btn" data-action="melamine-qty" data-direction="1" aria-label="Aumentar una unidad">+</button>
            </div>
          </label>
          <label>Mínimo<input name="minimum" type="number" min="0" step="1" value="${Math.max(0,Math.round(Number(e.minimum)||0))}"></label>
          <div class="form-hint full">Cada una de las 10 referencias mantiene existencias independientes. Los botones + y − cambian exactamente 1 unidad.</div>
          <div class="modal-actions full"><button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button><button type="submit" class="btn btn-primary">Guardar referencia</button></div>
        </form>
      </section>
    </div>`:``}function D(){let e=n.materials.find(e=>e.id===s);return e?`<div class="modal-backdrop" role="presentation">
      <section class="modal small" role="dialog" aria-modal="true" aria-labelledby="delete-modal-title">
        <div class="modal-head"><div><span class="eyebrow">CONFIRMACIÓN</span><h2 id="delete-modal-title">Eliminar material</h2></div><button class="icon-btn modal-close" data-action="close-modal" type="button">×</button></div>
        <div class="confirm-box"><strong>${f(e.name)}</strong><p>${f(e.code)}</p><p>El registro desaparecerá del catálogo actual. Los movimientos históricos se conservarán en Auditoría.</p></div>
        <div class="modal-actions"><button type="button" class="btn btn-outline" data-action="close-modal">Cancelar</button><button type="button" class="btn btn-danger" data-action="confirm-delete">Sí, eliminar</button></div>
      </section>
    </div>`:``}function O(){return`<div class="modal-backdrop" role="presentation">
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
    </div>`}function k(e){c[e]&&(i?p(`Cierra primero la ventana abierta con X o Cancelar.`,`error`):(r=e,v()))}function A(e){let t=document.getElementById(`melamine-quantity`);if(!t)return;let n=Math.max(0,Math.round(Number(t.value)||0)),r=e>0?n+1:Math.max(0,n-1);t.value=String(r),t.dispatchEvent(new Event(`change`,{bubbles:!0}))}function j(e){u()?n.materials.some(t=>t.id===e)?S(`delete`,e):p(`No se encontró el material.`,`error`):p(`Solo el administrador o el supervisor pueden eliminar materiales.`,`error`)}function M(e,t){n.audit.unshift({id:Date.now()+Math.random(),date:new Date().toISOString(),action:e,detail:t,user:n.session?.name||`Sistema`})}function N(e){let t=e.dataset.action;if(t===`close-modal`)x();else if(t===`logout`)n.session=null,x(),v();else if(t===`help`)S(`help`);else if(t===`open-add`){if(!l())return p(`Tu usuario no tiene permisos para registrar materiales.`,`error`);S(`material`)}else if(t===`edit-material`){if(!l())return p(`No tienes permiso para modificar el inventario.`,`error`);let t=e.dataset.id;if(!n.materials.some(e=>e.id===t))return p(`Material no encontrado.`,`error`);S(`material`,t)}else if(t===`delete-material`)j(e.dataset.id);else if(t===`confirm-delete`){if(!u())return p(`No tienes permiso para eliminar.`,`error`);let e=n.materials.find(e=>e.id===s);if(!e){x();return}n.materials=n.materials.filter(e=>e.id!==s),M(`ELIMINACIÓN`,`Eliminación de ${e.name} (${e.code})`),d(),x(),v(),p(`Material eliminado correctamente.`)}else if(t===`open-movement`){if(!l())return p(`Tu usuario no tiene permisos para registrar movimientos.`,`error`);S(`movement`)}else if(t===`open-melamine`){if(!l())return p(`No tienes permiso para modificar la matriz.`,`error`);S(`melamine`,e.dataset.id)}else t===`melamine-qty`?A(Number(e.dataset.direction)):t===`export-csv`?(m(`inventario-carpinstock.csv`,[[`Tipo`,`Código`,`Material`,`Categoría`,`Unidad`,`Cantidad`,`Mínimo`,`Referencia`],...n.materials.map(e=>[`Material`,e.code,e.name,e.category,e.unit,e.quantity,e.minimum,e.reference]),...n.melamines.map(e=>[`Melamina`,e.id,`Melamina`,`Melamina`,e.unit,e.quantity,e.minimum,`${e.reference}${e.color?` · ${e.color}`:``}`])]),p(`CSV del inventario generado.`)):t===`export-audit`&&(m(`auditoria-carpinstock.csv`,[[`Fecha`,`Acción`,`Detalle`,`Usuario`],...n.audit.map(e=>[e.date,e.action,e.detail,e.user])]),p(`Bitácora exportada.`))}document.addEventListener(`click`,e=>{if(document.getElementById(`modal-root`)){if(!e.target.closest(`#modal-root .modal`)){e.preventDefault(),e.stopPropagation();return}let t=e.target.closest(`#modal-root [data-action]`);t&&(e.preventDefault(),e.stopPropagation(),N(t));return}let t=e.target.closest(`[data-route]`);if(t){e.preventDefault(),k(t.dataset.route);return}let n=e.target.closest(`[data-action]`);n&&(e.preventDefault(),N(n))},!0),document.addEventListener(`input`,e=>{document.getElementById(`modal-root`)||e.target.id===`inventory-search`&&(InventoryModule.state.query=e.target.value,b(),window.requestAnimationFrame(()=>{let e=document.getElementById(`inventory-search`);e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))}))}),document.addEventListener(`click`,e=>{if(document.getElementById(`modal-root`))return;let t=e.target.closest(`[data-filter-category]`);if(t){e.preventDefault(),InventoryModule.state.category=t.dataset.filterCategory,b();return}let n=e.target.closest(`[data-filter-source]`);if(n){e.preventDefault(),InventoryModule.state.source=n.dataset.filterSource,b();return}let r=e.target.closest(`[data-movement-filter]`);r&&(e.preventDefault(),MovementsModule.state.type=r.dataset.movementFilter,b())}),document.addEventListener(`wheel`,e=>{e.target.id===`melamine-quantity`&&e.preventDefault()},{passive:!1}),document.addEventListener(`submit`,e=>{e.preventDefault(),e.stopPropagation();let t=e.target;if(t.id===`login-form`){let e=new FormData(t),i=CarpiAuth.login(e.get(`username`),e.get(`password`),n.users);if(!i)return p(`Usuario o contraseña incorrectos.`,`error`);n.session={id:i.id,name:i.name,role:i.role},r=`dashboard`,v(),p(`Bienvenido, ${i.name}.`)}else if(i){if(t.id===`material-form`){if(!l())return p(`Sin permisos.`,`error`);let e=new FormData(t),r={name:String(e.get(`name`)||``).trim(),code:String(e.get(`code`)||``).trim(),category:String(e.get(`category`)||``).trim(),unit:String(e.get(`unit`)||``).trim(),quantity:Number(e.get(`quantity`)),minimum:Number(e.get(`minimum`)),reference:String(e.get(`reference`)||``).trim(),note:String(e.get(`note`)||``).trim()};if(!r.name||!r.code)return p(`Completa nombre y código.`,`error`);if(!Number.isFinite(r.quantity)||r.quantity<0)return p(`Cantidad inicial no válida.`,`error`);if(!Number.isFinite(r.minimum)||r.minimum<0)return p(`Stock mínimo no válido.`,`error`);if(n.materials.some(e=>e.code.toLowerCase()===r.code.toLowerCase()&&e.id!==a))return p(`Ese código / SKU ya existe.`,`error`);if(a){let e=n.materials.findIndex(e=>e.id===a);if(e<0)return p(`No se encontró el material.`,`error`);let t=n.materials[e];n.materials[e]={...t,...r},M(`EDICIÓN`,`Actualización de ${r.name} (${r.code})`),p(`Material actualizado correctamente.`)}else{let e=`MAT-${Date.now().toString().slice(-8)}-${Math.floor(Math.random()*90+10)}`;n.materials.unshift({id:e,...r}),M(`ALTA`,`Registro de ${r.name} (${r.code})`),p(`Material registrado correctamente.`)}d(),x(),v()}else if(t.id===`movement-form`){if(!l())return p(`Sin permisos.`,`error`);let e=new FormData(t),r=String(e.get(`code`)||``),i=String(e.get(`type`)||``),a=Number(e.get(`quantity`)),o=[...n.materials,...n.melamines].find(e=>e.code===r||e.id===r);if(!o||!Number.isFinite(a)||a<=0)return p(`Selecciona un material y una cantidad válida.`,`error`);if((i===`Salida`||i===`Merma`)&&Number(o.quantity)<a)return p(`La cantidad supera la existencia disponible.`,`error`);o.quantity=i===`Entrada`?Number(o.quantity)+a:Number(o.quantity)-a;let s={id:Date.now()+Math.random(),date:new Date().toISOString(),type:i,material:o.name||`Melamina`,code:r,quantity:a,unit:o.unit,project:String(e.get(`project`)||``).trim(),user:n.session.name};n.movements.unshift(s),M(i.toUpperCase(),`${a} ${o.unit} de ${s.material} · ${s.project||`Sin proyecto`}`),d(),x(),v(),p(`Movimiento registrado y existencias actualizadas.`)}else if(t.id===`melamine-form`){if(!l())return p(`Sin permisos.`,`error`);let e=new FormData(t),r=n.melamines.find(e=>e.id===o);if(!r)return p(`Referencia no encontrada.`,`error`);let i=Number(e.get(`quantity`)),a=Number(e.get(`minimum`));if(!Number.isFinite(i)||i<0)return p(`Cantidad no válida.`,`error`);if(!Number.isFinite(a)||a<0)return p(`Mínimo no válido.`,`error`);r.color=String(e.get(`color`)||``).trim(),r.quantity=Math.max(0,Math.round(i)),r.minimum=Math.max(0,Math.round(a)),M(`EDICIÓN`,`Actualización de ${r.id} · ${r.color}`),d(),x(),v(),p(`Referencia de melamina actualizada.`)}}}),document.addEventListener(`keydown`,e=>{if(!i)return;if(e.key===`Escape`){e.preventDefault(),x();return}if(e.key!==`Tab`)return;let t=document.querySelector(`#modal-root .modal`);if(!t)return;let n=[...t.querySelectorAll(`button, input, select, textarea, [href]`)].filter(e=>!e.disabled&&e.offsetParent!==null);if(!n.length)return;let r=n[0],a=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),r.focus())}),v()})()})),f=t((()=>{n(),r(),i(),a(),o(),s(),c(),l(),u(),d()}));n(),f();