'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "d1c770884f992d6d478a84cb0dc585af",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/bc/c7049fa4c94481057f81983c667d95ab31849d": "bdeec6c23550c5be78da624f3de1ee23",
".git/objects/c4/9acc5de5433749a446371949dde2cc2d71faa6": "614bef10174e331266195e9f1685f18d",
".git/objects/12/d757d5ed84aa7a60e38e2c046aca1712ea76a6": "bbc94931d747900d01c921b8ec12e603",
".git/objects/51/efe599268bcc78eb146925b62a228ea6bc6946": "dd7893e06ab126110b64cb36c5bb7f11",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/3d/b178b317ab5c83d28df44b46807b2139013f2f": "3b070bd4cbc87c7b363264650d102670",
".git/objects/2b/4537ee1a40a3f9312fa8a9f42ee96e61d50b17": "10a3d4824ade6d0d25b3ae407be10f56",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/c8/d495123e01b6b9aa590cfa1131aba0c2eea804": "fef24c6aee5d884639240075f25df7e1",
".git/objects/c8/38a782bf9e94335772883ff5d7107cdc203ac3": "c7054df3e2a02bb6214c6f05e122c3f5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/2b7985ba5d35da933ed8e3882528a2725fcdb2": "4993d58535edde45167a7e51b5e55b94",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/17/df8e15a36920293b702341e4ff0b98a118db30": "5d81506e2252b5cc873e11dc4126e1d7",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/84/b31726bd43ba86189fb8fb0a9cdd7c86ce6a5d": "e877f614eda24eb31161300fe5fb6916",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/e4d4d4816d3fc99519ce31344f86ebfcacc7a8": "a9bc79009f8fb07eb47bff15e1f967f1",
".git/objects/e9/359d9f8dc0bf4517437f55a75a096e47659e2c": "a97b4f8d6397cddd35545a6c5bfd31a6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/3e/63ac237278e589ceac554da859d0b15983d866": "9f91c446a4a3787c8d3c809e519885cc",
".git/objects/3e/145169bbe3c1c5e13e5cd2330b8a1e8ba1f3ac": "658a65865d3f00657d5f0bad1727631c",
".git/objects/e8/8f6054374bed8337c0273b7bda1aeed2b066ef": "ecc26b11cbda60d37497adc2597dab42",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/04/6c757fd77c4ce5b34b3605386b305c5ea7ecff": "d48e312e3a06b68801c16afa098e9a58",
".git/objects/89/4eaa4aff2db411576f55dc41eaa108537e10af": "04e9a95cdccdc6ed5100bb0c16104994",
".git/objects/89/f2f5a19ec4392e65843b35cfae0fb3a55a2dfe": "2785374189b31deb9a2d21f03a90f98f",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/98/8adc3a06314ddf7fed8772b0cf0bc7bc25ea28": "66c291dc4d8d651b93f4e9ae0efd8c25",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/aa/f2cd410e7cd340072fac4e9b3361afd538652a": "0fd32eb23492693fb78c66c61c7d7654",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/cb0257ec6ef8776fdf886bf2169f6c19ed0c6a": "1cf46e777acb4ee18c365e6a205dc32f",
".git/objects/41/c78ed249bbf4f3367b6e46cd5159b00471a821": "86b555ebb544a0e576604eb2ee854d64",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f3/4fb58a19f38a2ca9cddeb92756e8a0f0a209ce": "2b92e84dd8fd1055f45c93704c280fea",
".git/objects/23/6ac89fab88600190a5b2558df782308f2ebcf4": "336abc152623a8a321cb26003300a9b5",
".git/objects/ec/c1a08b09d1fcb9aa1249ae4a149ef32fa2e43f": "e62f1da9fd71fe39d5bf90399b0b448b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/27/09373da87a32c640c5b765a8abbf4db1651155": "9c9db6ac4b6a6e0502d66a7876fe1114",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/08/714fb148aac2ba3413973bc62b3bf158bf1193": "7beef69350f0776240e25abac710aed9",
".git/objects/5e/745007d35008be897ecebf01ca98a276011403": "0d8d59eaa53fd23a39c13ad4c74d827f",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/2c/53e4725dc3a966a75db088196f2b86710f6c8e": "97c7c8ca68171e2a5510e12d50419a53",
".git/objects/2c/7cf473d2ffc20e1a6f5569f5c55f9c27202a1a": "00325d252ac759539cb7f3f6c02247a4",
".git/objects/be/6abccc0479f2dd265cbcfd1dcdf4ec09ceaa7d": "ef45fd6bcb9e2c948095e864ffc8f342",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/94/9bb06e879236ab7ff0c30c1713d27560eff244": "86ea318521a57060b7705cca575a97c4",
".git/objects/2a/d7ee463d2eb17442cb39d0f6116efcb173ef79": "0c551f191c083b8b5c446318c6ebc3f8",
".git/objects/b2/1c5a90799701a1de6ea7da63d5c6fc517a2e80": "c3b402969759e4a3b362627bafdf3869",
".git/objects/76/6ea98f1bcd0c5d49854133cda97f0598a99d5b": "ebfecbafaf7071cdd21a9ff5ceea6347",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/06/b6c2c63521126edc6f308c563a9e5e841bcb89": "ce8d64ab5d156c85d17da9dd29ded6e1",
".git/objects/22/1e429372f955ac67321a8243e11c1a130a06c0": "a6af0d34df9c07b9da0e059efbdb4549",
".git/objects/22/238ae34ec0f5c2b2c3c126941a7057b7f87ce0": "a412e25cb0568463f7d5006056e62800",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/6c80b26c959695589119c58915896106c5dbad": "46e093926f78c6cfffe59d12315800d1",
".git/objects/e6/e74fde95e24554fa262714a0de178904c80cf7": "efe4db0aab82a960de2707143fbc122e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/13/5e6d6d31fe00634f7d7cda4b47c68c129550f6": "f69f4342046013d98e91dd96ac5a0892",
".git/objects/99/83f054b577aa11ba0c6c961234d2d7e69cabf6": "9f7f60c6f56ed24125bbd6658f5865d6",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/77/92e58076fc196acea30ba6fb5b095e2e92c4cc": "048f02932252c604e1dc4be28f69022e",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/9e/b520cb2c90535bb19fee2b4b8f789f29c65f82": "d247ff76881811e869ec6fa30d51c5b9",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/config": "1cb727a87d6abc33824faf07b35f025d",
".git/refs/remotes/origin/master": "c54fba6b38e98f7ee5ba9068c34614db",
".git/refs/heads/master": "c54fba6b38e98f7ee5ba9068c34614db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "e7131035453090738cea83f2c0fba85d",
".git/logs/HEAD": "6851cc71158d28728bd037a2948cb58d",
".git/logs/refs/remotes/origin/master": "2c356e8b1d9ec21668f0227b5d9ef4d8",
".git/logs/refs/heads/master": "6851cc71158d28728bd037a2948cb58d",
"main.dart.js": "c145f6f08adc142174bf48a5a095e242",
"assets/fonts/MaterialIcons-Regular.otf": "411894da094bea2ddc09e1af64d850e0",
"assets/AssetManifest.json": "48424a37c649b9de0f9a16203b3ed80d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/images/img_settings.svg": "b693e5d8abbd8ec714a7852b0468e707",
"assets/assets/images/img_lock.svg": "aa6eca56ce398822bf29c0a5bbd0cfca",
"assets/assets/images/materials-ships.jpg": "fb1edfad1e6e9fb65f44de6b9c1903ae",
"assets/assets/images/img_search.svg": "8437e12e644cfaad4c8e059d97f1e981",
"assets/assets/svgs/login-page-image-man.svg": "10ec3a28b3b268f63571b4b3ae09cc1b",
"assets/assets/svgs/company-logo.svg": "68b81186daa6232b191b0a9b3f24341f",
"assets/assets/lottie/space-man.lottie": "7be94d97c8a3c52103d867160115bb87",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a783fc7991f91520abf26cc16a723a95",
"assets/NOTICES": "b40418807929a1f74eee7a4c506755f2",
"assets/AssetManifest.bin.json": "463d8c80cf99fe188feb990588d67a02",
"assets/FontManifest.json": "909fe574fe2983cc28cfb25bd2aa9ec1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "1125521203f2689b6362823bbb657f94",
"version.json": "f29f9802ad13d8c2490178e71d88934f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"index.html": "74c460edfcb5b285ea8787b9d460cdd4",
"/": "74c460edfcb5b285ea8787b9d460cdd4",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter_bootstrap.js": "bd386a4f84ddc2f05a6f6cec3d201c64"};
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
