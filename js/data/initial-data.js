// DATOS INICIALES
// Importante: las cantidades son DEMOSTRATIVAS para que la interfaz pueda probarse.
// No representan el inventario real de la fábrica.
window.CARPINSTOCK_INITIAL = {
  users: [
    { id: 1, username: 'admin', name: 'Jefe de Empresa', role: 'Administrador', password: 'admin123' },
    { id: 2, username: 'bodega', name: 'Supervisor de Bodega', role: 'Supervisor', password: 'bodega123' },
    { id: 3, username: 'operario', name: 'Trabajador Autorizado', role: 'Operario', password: 'operario123' }
  ],
  materials: [
    { id: 'MAT-001', code: 'MAT-FOR-001', name: 'Fórmica', category: 'Fórmica & RH', unit: 'Unidad', quantity: 18, minimum: 10, reference: '', note: 'Material decorativo.' },
    { id: 'MAT-002', code: 'MAT-RH-001', name: 'RH', category: 'Fórmica & RH', unit: 'Lámina', quantity: 34, minimum: 15, reference: '', note: 'Tablero resistente a humedad.' },
    { id: 'MAT-003', code: 'MAT-AGL-001', name: 'Aglomerado', category: 'Aglomerado', unit: 'Unidad', quantity: 22, minimum: 12, reference: '', note: 'Tablero de partículas.' },
    { id: 'MAT-004', code: 'MAT-PAT-001', name: 'Patas', category: 'Herrajes & Patas', unit: 'Unidad', quantity: 85, minimum: 30, reference: '', note: '1 unidad = 4 patas.' },
    { id: 'MAT-005', code: 'MAT-HER-001', name: 'Herrajes', category: 'Herrajes & Patas', unit: 'Unidad', quantity: 120, minimum: 40, reference: '', note: '1 unidad = 1 pareja.' },
    { id: 'MAT-006', code: 'MAT-PIN-001', name: 'Pintura', category: 'Químicos', unit: 'Galón', quantity: 6, minimum: 5, reference: '', note: 'Registrar por galón.' },
    { id: 'MAT-007', code: 'MAT-FRM-001', name: 'Fórmicon', category: 'Fórmica & RH', unit: 'Unidad', quantity: 14, minimum: 8, reference: '', note: 'Enchapado compacto.' },
    { id: 'MAT-008', code: 'MAT-CAN-001', name: 'Cantos', category: 'Cantos', unit: 'Metro', quantity: 420, minimum: 150, reference: '', note: 'Registrar longitud en metros.' },
    { id: 'MAT-009', code: 'MAT-COL-001', name: 'Colbón rosado', category: 'Químicos', unit: 'Kilo', quantity: 4.5, minimum: 10, reference: '', note: 'Nivel crítico de demostración.' },
    { id: 'MAT-010', code: 'MAT-BOX-001', name: 'Boxer', category: 'Químicos', unit: 'Kilo', quantity: 8, minimum: 6, reference: '', note: 'Adhesivo de contacto.' },
    { id: 'MAT-011', code: 'MAT-TOR-001', name: 'Tornillos', category: 'Tornillería', unit: 'Unidad', quantity: 3200, minimum: 800, reference: '', note: 'Manejo inicial por unidad.' }
  ],
  melamines: [
    { id: 'MEL-001', reference: 'Referencia 01', color: 'Color 01', quantity: 18, minimum: 8, unit: 'Unidad' },
    { id: 'MEL-002', reference: 'Referencia 02', color: 'Color 02', quantity: 22, minimum: 8, unit: 'Unidad' },
    { id: 'MEL-003', reference: 'Referencia 03', color: 'Color 03', quantity: 3, minimum: 10, unit: 'Unidad' },
    { id: 'MEL-004', reference: 'Referencia 04', color: 'Color 04', quantity: 14, minimum: 8, unit: 'Unidad' },
    { id: 'MEL-005', reference: 'Referencia 05', color: 'Color 05', quantity: 10, minimum: 8, unit: 'Unidad' },
    { id: 'MEL-006', reference: 'Referencia 06', color: 'Color 06', quantity: 25, minimum: 10, unit: 'Unidad' },
    { id: 'MEL-007', reference: 'Referencia 07', color: 'Color 07', quantity: 8, minimum: 8, unit: 'Unidad' },
    { id: 'MEL-008', reference: 'Referencia 08', color: 'Color 08', quantity: 12, minimum: 8, unit: 'Unidad' },
    { id: 'MEL-009', reference: 'Referencia 09', color: 'Color 09', quantity: 6, minimum: 8, unit: 'Unidad' },
    { id: 'MEL-010', reference: 'Referencia 10', color: 'Color 10', quantity: 16, minimum: 8, unit: 'Unidad' }
  ],
  movements: [
    { id: 1, date: '2026-10-05T09:15:00', type: 'Entrada', material: 'RH', code: 'MAT-RH-001', quantity: 12, unit: 'Lámina', project: 'Recepción', user: 'Supervisor de Bodega' },
    { id: 2, date: '2026-10-05T10:40:00', type: 'Salida', material: 'Colbón rosado', code: 'MAT-COL-001', quantity: 5.5, unit: 'Kilo', project: 'Cocina Integral A-14', user: 'Supervisor de Bodega' },
    { id: 3, date: '2026-10-05T11:20:00', type: 'Salida', material: 'Melamina', code: 'MEL-003', quantity: 4, unit: 'Unidad', project: 'Closet Nogal', user: 'Jefe de Empresa' },
    { id: 4, date: '2026-10-05T13:05:00', type: 'Merma', material: 'Cantos', code: 'MAT-CAN-001', quantity: 8, unit: 'Metro', project: 'Módulo Baño B-03', user: 'Trabajador Autorizado' }
  ],
  audit: [
    { id: 1, date: '2026-10-05T13:05:00', action: 'MERMA', detail: 'Registro de 8 metros de cantos', user: 'Trabajador Autorizado' },
    { id: 2, date: '2026-10-05T11:20:00', action: 'SALIDA', detail: '4 unidades de MEL-003 para Closet Nogal', user: 'Jefe de Empresa' },
    { id: 3, date: '2026-10-05T10:40:00', action: 'SALIDA', detail: '5.5 kilos de Colbón rosado', user: 'Supervisor de Bodega' },
    { id: 4, date: '2026-10-05T09:15:00', action: 'ENTRADA', detail: '12 láminas de RH', user: 'Supervisor de Bodega' }
  ]
};
