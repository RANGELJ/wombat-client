<template>
  <div>auth</div>
  <button @click="onLogIn">Log in</button>
</template>

<script lang="ts" setup>
import useFirebaseAuthUserListener from '@/hooks/useFirebaseAuthUserListener'
import { useRouter } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import firebaseClient from '@/firebaseClient'

const auth = getAuth(firebaseClient)
const router = useRouter()

useFirebaseAuthUserListener((user) => {
  if (user) {
    router.replace({
        name: 'home',
    })
  }
})

const onLogIn = () => {
    const provider = new GoogleAuthProvider()
    provider.addScope('email')
    signInWithPopup(auth, provider)
}
</script>