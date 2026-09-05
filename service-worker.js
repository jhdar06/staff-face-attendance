const CACHE_NAME = "staff-attendance-shell-v1";
const SHELL = [
  "./attendance.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (request.url.includes("/attendance.html")) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put("./attendance.html", copy));
        }
        return response;
      })
      .catch(() => caches.match(request).then(r => r || caches.match("./attendance.html")))
  );
});
