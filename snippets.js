event.waitUntil(
      caches.open('wittr-static-v1').then(function(cache) {
        return cache.addAll([
    '/',
    'js/main.js',
    'js/dbhelper.js',
    'js/restaurant_info.js',
    'css/styles.css',
    '/data/restaurants.json',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg'
   
        ]);
      })
    // TODO: open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
  );