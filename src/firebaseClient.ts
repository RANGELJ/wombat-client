import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseClient = initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_FIREBASE_APPID,
})

if (process.env.VUE_APP_FIREBASE_AUTH_EMULATOR_HOST) {
    console.log('process.env.VUE_APP_FIREBASE_AUTH_EMULATOR_HOST', process.env.VUE_APP_FIREBASE_AUTH_EMULATOR_HOST)
    connectAuthEmulator(getAuth(firebaseClient), process.env.VUE_APP_FIREBASE_AUTH_EMULATOR_HOST)
}

export default firebaseClient
