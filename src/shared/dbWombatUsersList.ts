import { WombatUser } from "@/types"
import { buildValueIsArrayOf } from "ts-validators"
import dbGetResultFromEvent from "./dbGetResultFromEvent"
import valueIsWombatUser from "./valueIsWombatUser"

const dbWombatUsersList = (
    database: IDBDatabase,
) => new Promise<WombatUser[]>((resolve, reject) => {
    const transaction = database.transaction('wombat_users', 'readonly')
    const query = transaction.objectStore('wombat_users').getAll()
    query.onsuccess = (event) => {
        const result = dbGetResultFromEvent(event)

        const validator = buildValueIsArrayOf(valueIsWombatUser)

        try {
            if (validator(result, { shouldThrowErrorOnFail: true, path: [] })) {
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }
    }
})

export default dbWombatUsersList
