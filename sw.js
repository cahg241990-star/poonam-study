// Minimal helper so Android lets the page install as a real app.
// It does NOT store old copies, so a new index.html on GitHub is picked up straight away.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
