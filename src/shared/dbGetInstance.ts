import dbVersion1Up from "./dbVersion1Up"
import dbVersion2Up from "./dbVersion2Up"

const dbGetInstance = () => new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB
        .open(process.env.VUE_APP_INDEXED_DB_NAME, 2)

    request.onupgradeneeded = (event) => {
        const database = request.result
        console.log('event.oldVersion', event.oldVersion)

        switch (event.oldVersion) {
        case 0:
            dbVersion1Up(database)
            break
        case 1:
            dbVersion2Up(database)
            break
        default:
            // No action
        }
    }

    request.onsuccess = () => {
        resolve(request.result)
    }

    request.onerror = () => {
        reject()
    }
})

export default dbGetInstance
