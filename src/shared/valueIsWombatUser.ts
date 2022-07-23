import { WombatUser } from '@/types'
import { buildValueIsShape, valueIsString } from 'ts-validators'

const valueIsWombatUser = buildValueIsShape<WombatUser>('WombatUser', {
    alias: valueIsString,
})

export default valueIsWombatUser
