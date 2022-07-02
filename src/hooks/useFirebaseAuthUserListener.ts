import { getAuth, onAuthStateChanged, Unsubscribe, User } from 'firebase/auth'
import firebaseClient from '@/firebaseClient'
import { onMounted, onUnmounted } from 'vue'

type Observer = (user: User | undefined) => void;

const useFirebaseAuthUserListener = (observer: Observer) => {
    const auth = getAuth(firebaseClient)
    let unsubscribe: Unsubscribe

    onMounted(() => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            observer(user ?? undefined)
        })
    })

    onUnmounted(() => {
        unsubscribe()
    })
}

export default useFirebaseAuthUserListener
