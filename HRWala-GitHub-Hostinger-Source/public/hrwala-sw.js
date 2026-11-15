const CACHE='hrwala-public-v1';
const OFFLINE='/hrwala-app/offline.html';
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([OFFLINE,'/hrwala-app/icon-192.png','/hrwala-app/icon-512.png'])));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(names=>Promise.all(names.filter(name=>name.startsWith('hrwala-public-')&&name!==CACHE).map(name=>caches.delete(name)))),self.clients.claim()]))});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 // Never cache API calls, login, personal data, or form submissions.
 if(request.mode==='navigate'){
   if(!['/','/job-portal','/job-portal/'].includes(url.pathname))return;
   event.respondWith(fetch(request).catch(()=>caches.match(OFFLINE)));return;
 }
 const staticFile=/\.(?:js|css|png|webp|svg|ttf|woff2)$/.test(url.pathname)&&(/^\/hrwala-job-portal\//.test(url.pathname)||/^\/hrwala-app\//.test(url.pathname)||/^\/assets\//.test(url.pathname));
 if(staticFile)event.respondWith(fetch(request).then(response=>{if(response.ok&&response.type!=='opaque'){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(async cache=>{await cache.put(request,copy);const keys=await cache.keys();if(keys.length>120)await Promise.all(keys.filter(key=>!key.url.endsWith('/offline.html')).slice(0,keys.length-120).map(key=>cache.delete(key)))}))}return response}).catch(()=>caches.match(request)));
});
