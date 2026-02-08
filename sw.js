// Farhan Pro Bot - Online Service Worker
const CACHE_NAME = 'farhan-bot-online-v1';

// Install Event
self.addEventListener('install', (event) => {
  console.log('Farhan Pro Bot: Service Worker Installing...');
  self.skipWaiting(); // Naye version ko foran install karega
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('Farhan Pro Bot: Service Worker Active');
  event.waitUntil(clients.claim()); // Foran control sambhaal lega
});

// Fetch Event: Direct Online Request
self.addEventListener('fetch', (event) => {
  // Ye line app ko hamesha internet se naya data lene par majboor karegi
  event.respondWith(
    fetch(event.request).catch(() => {
      // Agar internet na ho toh cache se check karega
      return caches.match(event.request);
    })
  );
});
