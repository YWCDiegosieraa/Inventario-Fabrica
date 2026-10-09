# CarpinStock Pro v3 — Correcciones

## Problemas corregidos

### Modales
- Un modal abierto bloquea la navegación de fondo.
- Clic fuera del modal no lo cierra.
- Clic dentro del formulario no lo cierra.
- X, Cancelar y ESC cierran sin guardar.
- Guardar/registrar correctamente cierra el modal.
- Solo existe un `#modal-root` a la vez; no se apilan modales invisibles.
- Se añadió foco inicial y navegación por teclado dentro del modal.

### Inventario
- Cada fila del Inventario muestra Editar y Eliminar.
- Editar abre el mismo formulario con los datos existentes.
- Eliminar pide confirmación y registra la acción en Auditoría.
- Los datos permanecen guardados mediante LocalStorage.

### Melaminas
- 10 referencias independientes.
- + incrementa exactamente 1.
- − decrementa exactamente 1 sin permitir negativos.
- El campo también usa `step=1`.

### Navegación
- Dashboard e Inventario son módulos separados en el menú lateral.
- Todos los módulos tienen una vista funcional: Dashboard, Inventario, Matriz de Melaminas, Movimientos y Auditoría.
- En móvil la barra inferior usa 5 columnas para evitar elementos desalineados o aparentemente vacíos.

### Caché
- Se eliminó el Service Worker persistente del prototipo.
- Los recursos se cargan con `?v=3`.
- El `index.html` intenta desregistrar Service Workers antiguos y eliminar sus caches.

## Nota
Las cantidades iniciales siguen siendo datos de demostración hasta que se definan las existencias reales de la fábrica.
