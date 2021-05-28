const VERSION = 'v1';

self.addEventListener('install', (event) => {
	event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
	const request = event.request;

	// get
	if (request.method !== 'GET') {
		return;
	}

	// Buscar en caches
	event.respondWith(cachedResponse(request));

	// Actualizar caches
	event.waitUntil(updateCache());
});

async function precache() {
	const cache = await caches.open(VERSION);
	return cache.addAll([
		// '/', '/index.html', '/assets'
	]);
}

async function cachedResponse(request) {
	const cache = await caches.open(VERSION);
	const response = await cache.match(request);
	return response || fetch(request);
}

async function updateCache(request) {
	const cache = await caches.open(VERSION);
	const response = await fetch(request);
	return cache.put(request, response);
}
