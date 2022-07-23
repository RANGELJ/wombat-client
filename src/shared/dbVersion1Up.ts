const dbVersion1Up = (database: IDBDatabase) => {
    database.createObjectStore('wombat_users', {
        autoIncrement: true,
    })
}

export default dbVersion1Up
