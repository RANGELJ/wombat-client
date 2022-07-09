import axios from 'axios'

type Args = {
    url: string;
    data?: Record<string, unknown>;
}

const serverCall = async (args: Args) => {
    const token = undefined

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
        data: args.data,
    })
}

export default serverCall
