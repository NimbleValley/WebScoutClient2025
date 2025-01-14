'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e37d57a08e02323da443e777566d8c86",
"assets/AssetManifest.bin.json": "f4f756982b052a8518a3d28afbe819b8",
"assets/AssetManifest.json": "fc444ccba65151210075390bd7be03f3",
"assets/FontManifest.json": "935430430837cee15c928085a626ec88",
"assets/fonts/Branding.otf": "c863fbc8a000a1bd28f48f3dba2fa322",
"assets/fonts/MaterialIcons-Regular.otf": "7f7c213bcee98501645cc5482af80ac5",
"assets/fonts/Slabo.ttf": "41d8ce2e89c0d256a190ef10ca2247bb",
"assets/images/aaron.jpg": "9f555018de9bfa503534834cbe069c87",
"assets/images/amishbenji.jpg": "c41617d0630694c48720c9a67fc26e39",
"assets/images/bendi.jpg": "2a3705c6ed28b3c20939cc69fd72f1eb",
"assets/images/benjifoot.jpg": "ff2f224e3473632fc19af61e0ed446e1",
"assets/images/benjislacking.jpg": "5a025d884a3cbe50caf0be03dfdb3e7e",
"assets/images/benjistache.jpg": "2378bd48166f4fc1cfb3db003b9399ed",
"assets/images/bensellchomp.jpg": "e017f70b9ce22f246b98095ecb585dd7",
"assets/images/BRAYDENNN.jpg": "e640eeefd7ce4f2973f3b3ebabad5144",
"assets/images/brightlnBALD.jpg": "cbaf546e5bc9bd894233c3031b2700bf",
"assets/images/cutefamilyphoto.jpg": "be42e8244e0696019fb35c2288fa09bd",
"assets/images/deva1.jpg": "e95908fb023c7bac34281e7c4ec1d2d5",
"assets/images/eLin.jpg": "501e2a1db48b9b4bd3d72954506e35eb",
"assets/images/gabefoot.jpg": "9066d6fdb103d95621003ddf47240344",
"assets/images/gabegrin.jpg": "54a495ddaf0ef17b04f0537cef4b7fb8",
"assets/images/hendrick.jpg": "5bfe244e1b5a06487f14b7fca8079e88",
"assets/images/hensler.jpg": "654583ee5a5b2bf7a959664610712c0e",
"assets/images/james.jpg": "059abb06049ee13e32f13df2d4371b6f",
"assets/images/joseph1.jpg": "155acaf81e8be7a2061b8a81a84fde3c",
"assets/images/kniessXmason.jpg": "6af633b6190c2fbe1b1281f7ae9ae187",
"assets/images/magnificantmalcom.jpg": "f15e0004b6c83064764803f7f6aaeae1",
"assets/images/minidevas.jpg": "c6d3e52b4ba0f5a35af2123202697297",
"assets/images/sherril3.jpg": "7c23e009237c71405492c2810351b3ae",
"assets/images/sherril5.jpg": "3b8a118a787e618ad0d1fa4b51da809a",
"assets/images/sherrilbig.jpg": "e18687a98a33d1c08ef9e77d7bf52605",
"assets/images/sherrilglasses.jpg": "d134327a465bd96859715b0591b0c672",
"assets/images/sherrilwatching.jpg": "6310d3b44f3e372840f103d98f5816ba",
"assets/images/sherrilwithoutshoes.jpg": "657b79ea91204e6b65d0f075f62c9f64",
"assets/images/sherrilyoung.jpg": "49defd68010e506fc16c8cde350140f6",
"assets/images/snow.jpg": "d22e85669c56308a0708881ef81f177e",
"assets/images/taco-aaron.jpg": "827590b7509896c1b8ffeab16fc2ee80",
"assets/images/thelm.jpg": "c96b2f70b42478fa537ab177a1a092bd",
"assets/images/TheNewToolChest.jpg": "f4459c81078e522dc816d6debe60bafb",
"assets/images/trompmil24.jpg": "7c0161c724f9338536bacb16b7e2e5d7",
"assets/images/waytt.jpg": "383e2ec85a9bbee0b070a126472c99c4",
"assets/images/zachary01.jpg": "9824936fea9fe224feff099d05aa4e05",
"assets/images/zacharychiseled.jpg": "9457eabf6a5471a08c8819338e519d4b",
"assets/images/zacharychomp.jpg": "d9af80ef08ac73aa75b264a43188cdf4",
"assets/NOTICES": "a90e8656171f8cb525c23ed551ac253e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2fed41d3c4241765a76494464e9e8475",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8b043ab29b60ba0bb5be54865ed2e406",
"/": "8b043ab29b60ba0bb5be54865ed2e406",
"main.dart.js": "450f686abd76355a17a781a1766e883c",
"manifest.json": "99a756ac4e05e11dfb221e37d8cccf1f",
"version.json": "16b0eecbb24557b57cdd3ed570ea9c37"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
