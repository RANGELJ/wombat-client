<template>
  <div>
    <button @click="onSignOut">Logout</button>
  </div>
</template>

<script lang="ts" setup>
import useFirebaseAuthUserListener from '@/hooks/useFirebaseAuthUserListener'
import { useRouter } from 'vue-router'
import { getAuth, signOut } from 'firebase/auth'
import firebaseClient from '@/firebaseClient'

const auth = getAuth(firebaseClient)
const router = useRouter()

useFirebaseAuthUserListener((user) => {
  if (!user) {
    router.replace({
      name: 'auth',
    })
  }
})

const onSignOut = () => {
  signOut(auth)
}
</script>