// Cache Names
const CACHE_NAME = 'v1';

// Files to cache
const CACHE_ASSETS = [
    '/',
    'index.html',
    'styles.css',
    'app.js',
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching Files');
                return cache.addAll(CACHE_ASSETS);
            })
    );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
