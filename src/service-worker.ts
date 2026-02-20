/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
/// <reference types="@sveltejs/kit" />

import { build, files, version } from '$service-worker';

const self = globalThis.self as unknown as ServiceWorkerGlobalScope;

// Unique cache name per deployment — new version invalidates old caches
const CACHE = `portfolio-${version}`;

const ASSETS = [...build, ...files];

self.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}
	// Activate this worker as soon as it’s installed so “newer version” takes effect on next load
	event.waitUntil(addFilesToCache().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
	async function takeControl() {
		const keys = await caches.keys();
		await Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)));
		await self.clients.claim();
	}
	event.waitUntil(takeControl());
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;

	async function respond() {
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);
		const isNavigate = event.request.mode === 'navigate';

		// Known assets: serve from cache first (offline-first for app and static files)
		if (ASSETS.includes(url.pathname)) {
			const cached = await cache.match(url.pathname);
			if (cached) return cached;
		}

		// Document/navigation: try cache first, then index.html for “/” or “/base/”
		if (isNavigate) {
			let cached = await cache.match(event.request);
			if (!cached) {
				const indexPath = (url.pathname.replace(/\/$/, '') || '/') + '/index.html';
				cached = await cache.match(url.origin + indexPath);
			}
			if (cached) return cached;
		}

		// Network first; cache successful responses for later offline use
		try {
			const response = await fetch(event.request);
			if (!(response instanceof Response)) throw new Error('invalid response from fetch');
			if (response.status === 200 && response.type === 'basic') {
				cache.put(event.request, response.clone());
			}
			return response;
		} catch {
			const cached = await cache.match(event.request);
			if (cached) return cached;
			if (isNavigate) {
				const indexPath = (url.pathname.replace(/\/$/, '') || '/') + '/index.html';
				const indexCached = await cache.match(url.origin + indexPath);
				if (indexCached) return indexCached;
			}
			throw new Error('Offline and not in cache');
		}
	}

	event.respondWith(respond());
});
