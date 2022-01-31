'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "7813e5879617aa346c77cb73c2530a3d",
"/": "7813e5879617aa346c77cb73c2530a3d",
"main.dart.js": "d5bc79d82b8a8554e7e807b64242a99c",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "506fc98574cfae7c3ac131c2da5a3ede",
"rules": "bf27d94169da96c74d5f1b607cd87dcb",
"jason": "6c1369bcee45fa3baebaaf77f2dc3ae3",
"assets/AssetManifest.json": "4378f22f535199c95ecd84c74ec6a1e8",
"assets/NOTICES": "79ecd96e3bc8690dad3003e0cf1ae985",
"assets/FontManifest.json": "f482ecbe5ed8baf86da436a3e9747cb9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/Spotify.png": "c25b2d460f895ae50adf99bcd46a1e90",
"assets/assets/tick.png": "708c509ba54054dc3465a12fc26824d3",
"assets/assets/Mail.png": "e223f61dbf88f84ddc7c5301de7de712",
"assets/assets/settings.png": "2e9b6f19499a57de182640324085f39c",
"assets/assets/connected.png": "31ba28c0de84c06f3f118cbbc739a541",
"assets/assets/Link.png": "f8272b82d4c8cf11607432d3b5f5f58b",
"assets/assets/Instagram.png": "6bec02c89a122e436e4ce19e5a541825",
"assets/assets/sfpro.ttf": "85bd46c1cff02c1d8360cc714b8298fa",
"assets/assets/Cash%2520app.png": "b2b25beedd1a2801bfea4dae86f85021",
"assets/assets/out.png": "c6bfc864b7db923ab892ca597599d370",
"assets/assets/home.png": "dedc9af7bfcb769705865b30bbaec6de",
"assets/assets/Contact.png": "4e4375c9d8d42224970da845965ad90d",
"assets/assets/AppleMusic.png": "06aff7eedaa1b18cb83df81fc9ab8edb",
"assets/assets/Tiktok.png": "36f2f2f4bfe0089f3b1cd7b325fd67fd",
"assets/assets/Menu.png": "9c17ebbd3e1b443212896ac58d3bbee4",
"assets/assets/facebookb.png": "9b9db5f9a19c6cfb596d778414d347d1",
"assets/assets/Logo.png": "8ebe3392d2e7fdc6d83a60610fedac8f",
"assets/assets/instar.png": "14a19284b4e0831f6243884e17442d48",
"assets/assets/Soundcloud.png": "3bfa48d1021234efd453f628b825bccb",
"assets/assets/twitter.png": "039c8fbae42073d942bef7a3fdd19e3c",
"assets/assets/Linkedin.png": "e35a02fffe77840279f500eb221d52c5",
"assets/assets/outstar.png": "fefa64dc718feb7ca372cb2e1b9059bf",
"assets/assets/mobile.png": "0582f8a1849124a59c9998c6333dd5e2",
"assets/assets/togle.png": "94f3aed2390bd2c8f9ed0a975a505136",
"assets/assets/qr.png": "42f1c2cd4b8f561aeefc9afc46a04e93",
"assets/assets/Twitch.png": "5561ef418564540743e3b7c61454d968",
"assets/assets/Youtube.png": "d991631c4a112b5cfdabec301ed761a8",
"assets/assets/Browser.png": "00c5131fd5e6a5708d9274b77ca3bb28",
"assets/assets/googleb.png": "aeae58dd3a935095115a0ac9daa7b447",
"assets/assets/pyment.png": "dd2d243a99936266d4e63e287c19abf0",
"assets/assets/onboard.png": "dbf879af22852795e71e2af8391c22a1",
"assets/assets/union.png": "e0d361c409cf458c0d06d8ef38322628",
"assets/assets/Whatsapp.png": "41f7e60f614af2f10391e4b3984cf7eb",
"assets/assets/Facebook.png": "c43c1280e5ebedea2539ca7a81ee3ba6",
"assets/assets/Camera.png": "cab4e2cc26567d89af50579234f20ec7",
"assets/assets/picture.png": "fb3dd7af198c2a2a2c8d701d122486ee",
"assets/assets/Paypal.png": "67bf0c8fda6027279114fbd7f5311e97",
"assets/assets/back.png": "1c06cc5de3608bfeaef610968e37f97f",
"assets/assets/Text.png": "54e43cbfbd211d145495d3f064f21fa3",
"assets/assets/Snapchat.png": "9095ef39462c300ce7302953f1959395",
"assets/assets/Venmo.png": "0bdc614b83070fcf5062997c1e24476f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
