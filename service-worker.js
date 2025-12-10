const CACHE_NAME = 'haqpay-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/transfer.html',
  '/airtime.html',
  '/history.html',
  '/loan.html',
  '/bills.html',
  '/login.html',
  '/splash.html',
  '/manifest.json',
  '/me.html',
  '/data.html'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => res || fetch(evt.request).catch(()=>caches.match('/index.html')))
  );
});