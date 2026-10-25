/* Raya Style Studio moved to /raya-style-studio/. This worker clears the old offline copy and removes itself. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => /^raya-style-studio-preview-v\d+$/.test(k)).map((k) => caches.delete(k))))
    .then(() => self.registration.unregister()).then(() => self.clients.matchAll({ type: "window" }))
    .then((cs) => cs.forEach((c) => { try { c.navigate("/raya-style-studio/"); } catch (x) {} })).catch(() => {}));
});
