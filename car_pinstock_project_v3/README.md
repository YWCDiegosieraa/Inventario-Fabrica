# CarpinStock Pro v3

Sistema web de inventario para una fábrica de carpintería, preparado para Visual Studio Code.

## Correcciones importantes de v3

- Los modales solamente se cierran mediante X, Cancelar, ESC o después de guardar correctamente.
- Mientras un modal está abierto, la navegación y el contenido del fondo quedan bloqueados.
- Un clic dentro del formulario no cierra ni reinicia el modal.
- Agregar material permite Cancelar sin guardar.
- Editar material permite modificar un registro existente y guardar cambios.
- Eliminar material muestra una confirmación y registra la eliminación en Auditoría.
- La matriz de melaminas usa + y − con cambios exactos de 1 unidad.
- Cada una de las 10 referencias de melamina conserva su cantidad independiente.
- La aplicación ya no utiliza caché de Service Worker para desarrollo local, evitando cargar código antiguo.
- Se usan parámetros de versión `?v=3` en los recursos para forzar al navegador a solicitar los archivos actuales.

## Ejecución

1. Descomprimir.
2. Abrir `car_pinstock_project` en Visual Studio Code.
3. Instalar/usar Live Server.
4. Abrir `index.html` con Live Server.

### Importante si existe una versión anterior abierta
Cerrar las pestañas anteriores de CarpinStock y abrir la carpeta v3 con Live Server. La versión v3 limpia las registraciones de Service Worker antiguas y no vuelve a registrar una caché persistente.

## Usuarios de demostración

- admin / admin123
- bodega / bodega123
- operario / operario123

## Reglas del inventario

- Fórmica: Unidad
- RH: Lámina
- Melamina: Unidad; 10 referencias independientes
- Aglomerado: Unidad
- Patas: 1 unidad = 4 patas
- Herrajes: 1 unidad = una pareja
- Pintura: Galón
- Fórmicon: Unidad
- Cantos: Metro
- Colbón rosado: Kilo
- Boxer: Kilo
- Tornillos: Unidad
