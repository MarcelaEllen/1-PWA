// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "pwabuilder-offline-page";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});
// Exemplo de registro de Periodic Sync (chamado a cada 24 horas):
const periodSyncTag = 'periodic-sync-tag';
const periodSyncOptions = {
  tag: periodSyncTag,
  minDelay: 24 * 60 * 60 * 1000, // 24 horas
};

self.addEventListener('periodicsync', (event) => {
  if (event.tag === periodSyncTag) {
    event.waitUntil(syncData()); // Chame uma função que realiza a sincronização de dados aqui
  }
});

// Exemplo de registro de Background Sync:
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync-tag') {
    event.waitUntil(syncData()); // Chame uma função que realiza a sincronização de dados aqui
  }
});

// Função de exemplo para sincronização de dados:
async function syncData() {
  try {
    // Realize a sincronização de dados com o servidor aqui
    // Você pode fazer uma solicitação de rede e atualizar o cache, por exemplo
    const response = await fetch('/api/sync');
    const data = await response.json();

    // Faça o que for necessário com os dados sincronizados
  } catch (error) {
    console.error('Erro na sincronização de dados:', error);
  }
}