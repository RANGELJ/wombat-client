
const dbGetInstance = () => new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB
        .open(process.env.VUE_APP_INDEXED_DB_NAME, 2)

    request.onupgradeneeded = () => {
        const database = request.result
        database.deleteObjectStore('transactions')
        database.createObjectStore('money_transactions', {
            autoIncrement: true,
        })
    }

    request.onsuccess = () => {
        resolve(request.result)
    }

    request.onerror = () => {
        reject()
    }
})

export default dbGetInstance
