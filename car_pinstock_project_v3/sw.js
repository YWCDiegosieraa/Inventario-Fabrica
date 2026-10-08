// El prototipo se ejecuta en VS Code/Live Server.
// No se usa caché de Service Worker para evitar que el navegador mantenga versiones antiguas.
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('carpinstock-')).map(key => caches.delete(key)));
    await self.registration.unregister();
  })());
});
