'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4b8ab2f4915fcf750c087f2fb219379d",
".git/config": "94889c6755452e86dbb0eb9abbc9d4df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4d65ff64fc2e2997fe057ce410e0dc5c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d6100d0ca55ef037dffd057b020b38e",
".git/logs/refs/heads/master": "6d6100d0ca55ef037dffd057b020b38e",
".git/logs/refs/remotes/origin/master": "d63b9321a7b5023d9b9e246468955b73",
".git/objects/04/6c757fd77c4ce5b34b3605386b305c5ea7ecff": "d48e312e3a06b68801c16afa098e9a58",
".git/objects/06/b6c2c63521126edc6f308c563a9e5e841bcb89": "ce8d64ab5d156c85d17da9dd29ded6e1",
".git/objects/08/714fb148aac2ba3413973bc62b3bf158bf1193": "7beef69350f0776240e25abac710aed9",
".git/objects/09/ee0e556850cc23349cd9cda442af0036cc2fe1": "e19caae981f655f571f4a45c158aff58",
".git/objects/0a/a14e34275970437cf3bd309c300234dba51e3f": "dd2610aa0614af6f617c987bb9154635",
".git/objects/0f/62f36f9767ba2b77f392183acd43a772874957": "a353f24bac8ac7f6e959b87ad8df6203",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/13/5e6d6d31fe00634f7d7cda4b47c68c129550f6": "f69f4342046013d98e91dd96ac5a0892",
".git/objects/14/32c0a5e1bb21f090150e30a05112d3c2df58a9": "68d0ec533ce414c181adc2b369b755d2",
".git/objects/17/df8e15a36920293b702341e4ff0b98a118db30": "5d81506e2252b5cc873e11dc4126e1d7",
".git/objects/19/eb9579019cffa28fcedfb37b11139117447d09": "8eec0ae4763e31d3d46f90648ad88d8b",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/28/6d124c78bd9cb55af437341f45d1d9467cfef1": "b480cb904d4a639091b6cc0fd776e163",
".git/objects/28/95378d5d8f25cb34351b121cfe8f112fff9b1e": "f2853a576773cdba5fdae5ddef11006c",
".git/objects/2b/4537ee1a40a3f9312fa8a9f42ee96e61d50b17": "10a3d4824ade6d0d25b3ae407be10f56",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/3d/0b89820ffbfc79e63d511410ec5551162387a8": "2d7098ee94ecfa75543aa18a93b9dfbc",
".git/objects/47/c0e6ce88a5a3a7338deb1ac2fc9425fde2a099": "ab506b339ca443be7afb2690696d9761",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/4fdc4985f1ec33c445b3e396b2404e59532e79": "85c08c09131f0ba8dfff8a00953b30f3",
".git/objects/51/4097e8e7a570623f22ef96fc30bfea2b6d0a28": "2222480797e634bdd3952f3324783eef",
".git/objects/51/efe599268bcc78eb146925b62a228ea6bc6946": "dd7893e06ab126110b64cb36c5bb7f11",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/58/ac09db64ad9df321125f880512d2ca14954bbe": "1bbc87f22d0fd42c3f70606c2ae9e7b0",
".git/objects/5c/0b0834ac3560ecc00d674a98d873d0b4816ba9": "a63a77ce57840b047590164761cfd7fe",
".git/objects/5c/7258eec2d9ccae2b1fe6f3424e08f53b74c725": "ba52b105d9a9d9b9988e02459a81aaaa",
".git/objects/62/65d729f0ed315d28278f416fe670aa450d2e1d": "78a1eded19ceaf257870b3aa7d3d15b2",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/1c4860d65a9409ea327dd060cc5bd6e3097a9c": "c1beb963717e8b6d1f0bab841626bfa6",
".git/objects/77/6961384d33f5861d01c45150fd525e6cdedc64": "e3a7e59f817049db7273121289e348de",
".git/objects/77/92e58076fc196acea30ba6fb5b095e2e92c4cc": "048f02932252c604e1dc4be28f69022e",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/84/b31726bd43ba86189fb8fb0a9cdd7c86ce6a5d": "e877f614eda24eb31161300fe5fb6916",
".git/objects/86/bc07a4791e8b982847711daf224d1927fff41c": "6e68043e385a1b214372b7941345a6ca",
".git/objects/86/d0881132ee3439425fe20986ffabe6916392f0": "421c4d2c79c2649d6aa6128323c096db",
".git/objects/87/f535b56c2f2b8e554593e7d97ddb84a6755e93": "24d0c5dcf5be2b58c024d05db8075ea2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f2f5a19ec4392e65843b35cfae0fb3a55a2dfe": "2785374189b31deb9a2d21f03a90f98f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/9f85ab6930f703ef73ece37b3559d8ef56b73f": "ed43d1a730160ea42f0688eafef6a9fd",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/94/9bb06e879236ab7ff0c30c1713d27560eff244": "86ea318521a57060b7705cca575a97c4",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/b520cb2c90535bb19fee2b4b8f789f29c65f82": "d247ff76881811e869ec6fa30d51c5b9",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/aa/f2cd410e7cd340072fac4e9b3361afd538652a": "0fd32eb23492693fb78c66c61c7d7654",
".git/objects/b2/1c5a90799701a1de6ea7da63d5c6fc517a2e80": "c3b402969759e4a3b362627bafdf3869",
".git/objects/b3/6dcf58a6bb75541f09dd8c6ab6b2f20feaa4a0": "6f5b443c809f21d723a270269241970b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/27e93fc0c234c6a6d3b186542a6729656cf9dc": "54cb705b5613dd66db18939d2a5d6038",
".git/objects/bc/c7049fa4c94481057f81983c667d95ab31849d": "bdeec6c23550c5be78da624f3de1ee23",
".git/objects/bf/11e67c558203e5e9b4869299697135ea2f5528": "96feb315dfaf1cdcb80d74fac1b75dee",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c5/40e510593c64079ce176bdd16d3ec4f7c09b20": "9cbba622ae357df3ce208e7e4b033331",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/8a368dd6644b2783843fa5936101af1acc5cfe": "01133502073badf567a923da2ee97b54",
".git/objects/ce/cb0257ec6ef8776fdf886bf2169f6c19ed0c6a": "1cf46e777acb4ee18c365e6a205dc32f",
".git/objects/d0/77da5af9af6f7c10471823a581e3cd750a4f33": "77e919f7ecc44fb3f100d7685b45b733",
".git/objects/d3/34b01489f8e9bb8824758b5af5e443312a29d2": "685e79013bf22679d9ad0d5e7ade2926",
".git/objects/d4/1eefb0e435581fbcba1a397997b761c3659526": "da52a48cf80e8fbf2c957d574c42c4e8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/ce428b4aec0bd23d362ed63963c217eee87da8": "083dcedf59061a3ad3e30e5524fc41b2",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/febbc24320e98f4512561a09a1f8cf81e64793": "80e11b5c5c5d495cbcc05a1b398e2bec",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/ab40d4009077b4df601ed028bc6bf9bead6ff4": "74b2c9c0e9529b4eedc31acd94326b52",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/4345b4aad885726d75e015c78a1bac392cb847": "6ecf5e5bd81cc5aff1226fbe9f6c83d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/4fb58a19f38a2ca9cddeb92756e8a0f0a209ce": "2b92e84dd8fd1055f45c93704c280fea",
".git/objects/f3/ae424cd68314165cd20392cbc0794d1d216371": "7f303cdcc05e421651b97a5381b63714",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/refs/heads/master": "22d1ac5faa7b59359cb07e4e2b1ae1a8",
".git/refs/remotes/origin/master": "22d1ac5faa7b59359cb07e4e2b1ae1a8",
"assets/AssetManifest.bin": "a783fc7991f91520abf26cc16a723a95",
"assets/AssetManifest.bin.json": "463d8c80cf99fe188feb990588d67a02",
"assets/AssetManifest.json": "48424a37c649b9de0f9a16203b3ed80d",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/images/img_lock.svg": "9ef7fdb3f91391b89ab18cac9f9c4e65",
"assets/assets/images/img_search.svg": "91a7873efd559420317e437eada789b8",
"assets/assets/images/img_settings.svg": "01846479d9b67be05f42e25baa3bfdb7",
"assets/assets/images/materials-ships.jpg": "fb1edfad1e6e9fb65f44de6b9c1903ae",
"assets/assets/lottie/space-man.lottie": "7be94d97c8a3c52103d867160115bb87",
"assets/assets/svgs/company-logo.svg": "120677747ba0d1f1921d230c48f5a679",
"assets/assets/svgs/login-page-image-man.svg": "af7444344a08bb77c77e52a0c89ad4ae",
"assets/FontManifest.json": "909fe574fe2983cc28cfb25bd2aa9ec1",
"assets/fonts/MaterialIcons-Regular.otf": "1728d4360e1b6f6f07a627b77f76e873",
"assets/NOTICES": "55ee865e5bb6a316d692e6025b010144",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e182c438069e65d0dcfcd7f08a454f3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "738e797b2f2667adca50965470f0dbed",
"/": "738e797b2f2667adca50965470f0dbed",
"main.dart.js": "0718fc556c647891c6505fa38f5ee756",
"manifest.json": "f0348580c5cbf9079c406d09f61d5a33",
"version.json": "d8306acf47f66e6820dbc59c1c6d01aa"};
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
