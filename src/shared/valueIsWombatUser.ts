import { PROPS, WombatUser } from '@/types'
import { buildValueIsShape, valueIsString } from 'ts-validators'

const valueIsWombatUser = buildValueIsShape<WombatUser>('WombatUser', {
    [PROPS.ALIAS]: valueIsString,
})

export default valueIsWombatUser
