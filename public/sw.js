console.log("registered")

var CACHE_NAME = 'appv1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll("/static/js/bunle.js","/static/js/main.chunk.js",
        "/static/js/0.chunk.js","index.html","/App.ts","App.ts"

        );
      })
  );
})
