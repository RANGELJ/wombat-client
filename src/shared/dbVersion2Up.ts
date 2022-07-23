const dbVersion2Up = (database: IDBDatabase) => {
    database.deleteObjectStore('wombat_users')
    const usersStore = database.createObjectStore('wombat_users', {
        autoIncrement: true,
    })
    usersStore.createIndex('name', 'name', {
        unique: true,
    })
}

export default dbVersion2Up
