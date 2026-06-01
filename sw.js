const CACHE_NAME = 'wakeup-cache-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './YDESTREETL.TTF',
  './탭아이콘 데이지.png',
  './탭아이콘 데이지3 녹색.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});