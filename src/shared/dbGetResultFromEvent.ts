import { valueIsRecord } from 'ts-validators'

const dbGetResultFromEvent = (event: Event) => {
    const rawTarget: unknown = event.target

    if (!valueIsRecord(rawTarget)) {
        return undefined
    }

    return rawTarget.result
}

export default dbGetResultFromEvent
