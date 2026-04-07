const CACHE_NAME = 'fpt-v2';

// Archivos que NUNCA se cachean — siempre frescos desde red
const NO_CACHE = ['/sw.js', '/channels.js', '/index.html', '/', '/icon-192.svg', '/icon-512.svg'];

self.addEventListener('install', e => {
  // Activa el nuevo SW inmediatamente sin esperar que se cierren tabs
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Al activar, limpia TODOS los caches anteriores
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Solo interceptar recursos de nuestro propio dominio
  if (url.origin !== self.location.origin) return;

  // Archivos críticos: siempre ir a la red, sin cache
  if (NO_CACHE.includes(url.pathname)) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }

  // Recursos estáticos (iconos, manifest): cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      });
    })
  );
});
