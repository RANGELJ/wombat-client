import axios from 'axios'
import { getAuth } from 'firebase/auth'
import firebaseClient from '@/firebaseClient'

type Args = {
    url: string;
}

const serverCall = async (args: Args) => {
    const auth = getAuth(firebaseClient)
    const token = auth.currentUser
        ? await auth.currentUser.getIdToken(true) : undefined

    const headers = token
        ? {
            Authorization: `Bearer ${token}`,
        }
        : undefined

    return axios({
        baseURL: `${process.env.VUE_APP_SERVER_HOST}/client`,
        url: args.url,
        headers: headers,
        method: 'POST',
    })
}

export default serverCall
