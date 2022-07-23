import { WombatUser } from "@/types"
import { buildValueIsArrayOf, valueIsRecord } from "ts-validators"
import valueIsWombatUser from "./valueIsWombatUser"

const dbWombatUsersList = (
    database: IDBDatabase,
) => new Promise<WombatUser[]>((resolve, reject) => {
    const transaction = database.transaction('wombat_users', 'readonly')
    const query = transaction.objectStore('wombat_users').getAll()
    query.onsuccess = (event) => {
        const rawTarget: unknown = event.target

        if (!valueIsRecord(rawTarget)) {
            reject(new Error('Unable to find target value from getAll query'))
            return
        }

        const { result } = rawTarget

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
