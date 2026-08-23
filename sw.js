const CACHE_NAME = 'ia-andrade-v1';
const urlsToCache = [
  './',
  './index.html',
  './trevo.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna a versão do cache ou busca na internet
        return response || fetch(event.request);
      })
  );
});