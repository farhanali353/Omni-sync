const CACHE_NAME = 'farhan-pro-bot-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://i.ibb.co/GfGypBGD/intelligent-robot-500x500.jpg'
];

// Install process
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event (Install button ke liye zaroori hai)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
