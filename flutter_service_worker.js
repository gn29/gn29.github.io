'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/favicon.ico": "73e748fcd85838ac320d4b42688fa77e",
"/index.html": "8f048c098891ab9cd970b59ce6c0b865",
"/main.dart.js": "a455c45e10436128c49922b7db5e8b8a",
"/staticresources/scheme_main.png": "a8fe638d66777111ce15eaf047ab42ad",
"/staticresources/sample_data.json": "4ce3bb2aee1d018a6c6087214c5d2825",
"/staticresources/tags.json": "363a2e119f1d303172890d47b764d7f9",
"/scheme.html": "1a12d567c033d8d13aab564b21847288",
"/assets/LICENSE": "4fa43dd697a16e3e8530cec86cb05183",
"/assets/AssetManifest.json": "fad88894064576ef271836e844ff6a6d",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/lib/resources/images/lukoil-logo.png": "aeb4f6610faff19bb60968a5400da2a5",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
