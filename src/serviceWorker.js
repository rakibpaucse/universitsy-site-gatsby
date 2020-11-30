importScripts("workbox-v5.1.3/workbox-sw.js")
importScripts("https://unpkg.com/dexie@3.0.0-rc.7/dist/dexie.js")
workbox.setConfig({modulePathPrefix: 'workbox-v5.1.3/'})


self.addEventListener('sync', async (event) => {
    console.log('Background Syncing', event);
    if(event.tag === 'postFormData'){
        event.waitUntil(
            Dexie.getDatabaseNames(database => {
                database.map(async (dbName) => {
                    const db = dexieOpen(dbName)
                    console.log(db)
                    await db.table('postData').toCollection().keys(async (keys) => {
                        return await db.table('postData').bulkGet(keys);
                    })   
                })
            })
        )
    }
})

const precacheManifest = [[{}],[{}]];
workbox.precaching.precacheAndRoute(precacheManifest);

workbox.routing.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/, new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'Google-Fonts'
}))

