const CACHE_NAME = 'farhan-bot-v5';
const assets = [
  '/Farhan-Pro-Bot/',
  '/Farhan-Pro-Bot/index.html',
  '/Farhan-Pro-Bot/manifest.json',
  'https://i.ibb.co/GfGypBGD/intelligent-robot-500x500.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
