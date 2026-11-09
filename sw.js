const C='patolens-v4';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c)).catch(()=>{});return r;}).catch(()=>caches.match(e.request)));});
