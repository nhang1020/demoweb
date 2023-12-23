'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a65e9f0f1d6d4a060502e5c2b8d97993",
"assets/AssetManifest.json": "f1277471d1f09eae4fb3c96a083fb168",
"assets/assets/bg.png": "ca652aa59f17db73fd4be513d3060303",
"assets/assets/bgs.png": "f08a232c7429935a976cbddf474c6472",
"assets/assets/emr-login.png": "c20b93e3065aff4831d40fcef1767689",
"assets/assets/gifs/20514d2998ec79b220fd.jpg": "8d5975c2ad3c07a9f4e28dfe33e93880",
"assets/assets/gifs/8be5e558f6f61fa846e7.jpg": "ac6ba94be7efd788cd6d850ea8468aa7",
"assets/assets/gifs/animated-arrow.gif": "382d8060f48b24074b6d759b6263c81d",
"assets/assets/gifs/arrow.gif": "ee3d3c511242a416be9289a8185f258c",
"assets/assets/gifs/donald-trump-gettyimages-687193180.jpg": "b3082ae20c0cbb6c83d4705a163ee1bc",
"assets/assets/image001.png": "bdc90416d6d67aa5ce9d1979da0d2732",
"assets/assets/image001_monochrome.png": "b13efdae9c0f72b871f48d55971aa744",
"assets/assets/images/backgrounds/accountbg.jpg": "d7dfa3f59c73735ccba1a888cc2a9924",
"assets/assets/images/backgrounds/blue.png": "8de351b23660195fc0864290b54ddb61",
"assets/assets/images/backgrounds/draw.jpg": "1c89e5fa59e8b18dc592fe7f78d6e780",
"assets/assets/images/backgrounds/drawer.jpg": "0c50ec4f015f9402c18fd2256de85a01",
"assets/assets/images/backgrounds/green_gradient.jpg": "8a2af9e48d082da3458d70a873c58d40",
"assets/assets/images/backgrounds/notification.png": "9e3c7fe9064970da78d97e5d8f334073",
"assets/assets/images/bgmb.png": "2a41ecccf0c98996425c69e9e8cf10f0",
"assets/assets/images/bgtitle.png": "236f6055ada826343424222abd81b8d5",
"assets/assets/images/DarkHeart.json": "f95a78b0abe54ff74e31526305f38eb2",
"assets/assets/images/empty-box%2520(1).png": "ba65fd922ac2361f8c0da47dda4fe999",
"assets/assets/images/empty-box.png": "c6289cfe3503ac56806952bd18a4d8c5",
"assets/assets/images/healthcare-background-ur9es9e3f2t9gfkd.jpg": "053c62dd01321a4d0008d46921d6f4a2",
"assets/assets/images/Heart.json": "048465bea96f6560ac59fcd5043fb20d",
"assets/assets/images/icons/2015_96px.png": "eaabee928b8cf8b0c5065ecb81e335bb",
"assets/assets/images/icons/acid_surface_96px.png": "6780f4e722c97cfcea3df65319d6ef46",
"assets/assets/images/icons/ambulance_96px.png": "a9824c07a54d0583d56ed70a8b705d64",
"assets/assets/images/icons/appointment_scheduling_96px.png": "5798b4cdd85e9758b05a672bf9483da7",
"assets/assets/images/icons/caduceus_96px.png": "1a76f00ae332d429ee8e1259db785553",
"assets/assets/images/icons/combo_chart_96px.png": "4cce77512e38987e840e5e4d37d1a125",
"assets/assets/images/icons/health_checkup_96px.png": "b83fa34f34359e070131677953823857",
"assets/assets/images/icons/inbox_64px.png": "6b3aaf166ad20d9d2a0c648a1f071528",
"assets/assets/images/icons/Medical_File_96px.png": "909b6b245e7448a391165b236e25c954",
"assets/assets/images/icons/more_96px.png": "5c54fa6d6a41bfdd0c6dae6d1319612d",
"assets/assets/images/icons/nurse_96px.png": "26351785ddf5f3c3215716fcce01c6d2",
"assets/assets/images/icons/order_history_96px.png": "bdf7850867d3ecb031770244e8f3bb05",
"assets/assets/images/icons/pills_96px.png": "e3dbe5ea6b3c6af18da41880e7944d0d",
"assets/assets/images/icons/resume_website_96px.png": "c01d044a637635b7bcd0ba88d1adb8b5",
"assets/assets/images/icons/robbery_96px.png": "c83790b24dae28d3e4db1307c298853e",
"assets/assets/images/icons/scissors_96px.png": "5367995605ada83b5c191d35f985aa55",
"assets/assets/images/icons/search_in_list_96px.png": "c0d40c43ac3f212879b52099fc358c7c",
"assets/assets/images/icons/stethoscope_96px.png": "836aca52ee5ad7618e069f9789295ca7",
"assets/assets/images/icons/teamwork_96px.png": "ecb4d1e2d0dc51f8da846a6fc6958e37",
"assets/assets/images/icons/trust_96px.png": "faed3e0c9bc27781ea2ef10bac6fad31",
"assets/assets/images/icons/username_48px.png": "c7708d1d708a63d47fa1895e57037741",
"assets/assets/images/icons/video_stabilization_96px.png": "c16031381fccea8445db09a68bf7dfca",
"assets/assets/images/LightHeart.json": "7be95ad2be37ff72cd479cbea27bc96b",
"assets/assets/images/medicals/ambulance.png": "111b6609b664c6fcaef14913e9ee64bb",
"assets/assets/images/medicals/calendar-date.png": "8c459b494b33dbf6768435e20cd9f7aa",
"assets/assets/images/medicals/capsule.png": "c1793cdd676ea1a5e970e1b0e0fb0d52",
"assets/assets/images/medicals/diagnose.png": "9d317d4e4d13f33f8895a83eb2a875c4",
"assets/assets/images/medicals/health-check.png": "fdfa151e47bfe25962d006a25d0bc7ee",
"assets/assets/images/medicals/heart.png": "ae6fd6cc8f7c22916bf1f27dec586977",
"assets/assets/images/medicals/List%2520Is%2520Empty_96px.png": "a85992c83a07d04195e2dd51832b9a78",
"assets/assets/images/medicals/medical-report.png": "a05f037a25ffab8352063397c3263027",
"assets/assets/images/medicals/medicine.png": "d9bbc1e8279cdc4081596f44f7886ad9",
"assets/assets/images/medicals/organ.png": "0a7d9e8f16a4daa53027bdb66542b8ac",
"assets/assets/images/medicals/patient.png": "0041b3f9166e7e4366cf23db1a17bfe1",
"assets/assets/images/medicals/patient_female.png": "9f289104c1efa4c060588ebda297cbd2",
"assets/assets/images/medicals/patient_male.png": "0e8d63c145727c7a39fcdf11f058dc77",
"assets/assets/images/medicals/scissor.png": "3bbdd692dcdbf0c0b2a1ec42e04c65ec",
"assets/assets/images/medicals/stethoscope.png": "785f238f035c2f77d2a8a096d3c30287",
"assets/assets/images/medicals/thermometer.png": "be4f5f6282a2a340a57b4b5c1f2a7b1d",
"assets/assets/images/medicals/ylenh.png": "ea26d5799dcbc16ea873f5a0a121e416",
"assets/assets/images/Research.json": "d15d5f62a8eeac833a8b806d81fda9b9",
"assets/assets/images/search.png": "09ea318b0d32bceb98ffed7483fcbb75",
"assets/assets/images/Untitled-removebg-preview.png": "644873c2bbd4d11409f37280c5b9f2aa",
"assets/assets/images/welcome_doctor.png": "778f0c29bef45c9493bd8b0d6e9cab72",
"assets/assets/myLogo.png": "4f81df7fd5cf46b10c13da89c4785ec1",
"assets/FontManifest.json": "9cfce70c59ddf4f8372ed142e844ec05",
"assets/fonts/MaterialIcons-Regular.otf": "aa8d6d1bc1b4a9a626d1f5e6d01b42aa",
"assets/NOTICES": "6bcbe5811326a147965c018c4ecff304",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b9696d60d2c595deb9f0a32335ff3de6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0514d4d1cad6c8ccc84eb50a3e031e93",
"assets/packages/unicons/icons/UniconsLine.ttf": "8924ce5cafaa7c12e593a2ef8478122f",
"assets/packages/unicons/icons/UniconsSolid.ttf": "580e5390f4d0c77fa9e8115af69e41c7",
"assets/packages/unicons/icons/UniconsThinline.ttf": "b9ac88a304738945c1b1fa4c168a14b9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "7edde65af67dea29469fb0f4a34b33d1",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "02a35a6900cd2f7db4f172ee6fb6b155",
"icons/Icon-512.png": "a9b9e0f152041f260e20853f1222e27f",
"icons/Icon-maskable-192.png": "02a35a6900cd2f7db4f172ee6fb6b155",
"icons/Icon-maskable-512.png": "a9b9e0f152041f260e20853f1222e27f",
"index.html": "6b5dc93928ab914d6842da4e5b9e287c",
"/": "6b5dc93928ab914d6842da4e5b9e287c",
"main.dart.js": "6f54b4f6bfec14ad524601eafc8d72d7",
"manifest.json": "96b123e506667d55c168869187e6f5d5",
"version.json": "8d1a32ff87c3a84965924e5ca6a7537f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
