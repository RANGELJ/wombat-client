import dbVersion1Up from "./dbVersion1Up"

const dbGetInstance = () => new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB
        .open(process.env.VUE_APP_INDEXED_DB_NAME, 1)

    request.onupgradeneeded = (event) => {
        const database = request.result

        console.log({
            oldVersion: event.oldVersion,
            newVersion: event.newVersion,
        })

        switch (event.oldVersion) {
        default:
            // No action
        }

        switch (event.newVersion) {
        case 1:
            dbVersion1Up(database)
            break
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
