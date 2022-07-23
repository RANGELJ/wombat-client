import { WombatUser } from "@/types"
import { valueIsUndefined } from "ts-validators"
import dbGetResultFromEvent from "./dbGetResultFromEvent"
import valueIsWombatUser from "./valueIsWombatUser"

const dbWombatUsersGetByName = (
    database: IDBDatabase,
    userName: string,
) => new Promise<WombatUser | undefined>((resolve, reject) => {
    const transaction = database.transaction('wombat_users', 'readonly')
    const usersStore = transaction.objectStore('wombat_users')
    const usersNameIndex = usersStore.index('name')

    const query = usersNameIndex.get(userName)

    query.onsuccess = (event) => {
        const result = dbGetResultFromEvent(event)

        try {
            if (valueIsUndefined(result) || valueIsWombatUser(result, { path: [], shouldThrowErrorOnFail: true })) {
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }
    }

    query.onerror = reject
})

export default dbWombatUsersGetByName
