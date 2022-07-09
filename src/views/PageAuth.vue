<template>
  <input v-model="email" type="email" />
  <input v-model="password" type="password" />
  <button @click="onLogIn">Log in</button>
</template>

<script lang="ts" setup>
import useFirebaseAuthUserListener from '@/hooks/useFirebaseAuthUserListener'
import { useRouter } from 'vue-router'
import {
  getAuth,
  signInWithEmailAndPassword,
  } from 'firebase/auth'
import firebaseClient from '@/firebaseClient'
import { ref } from 'vue'

const auth = getAuth(firebaseClient)
const router = useRouter()

useFirebaseAuthUserListener((user) => {
  if (user) {
    router.replace({
        name: 'home',
    })
  }
})

const email = ref('')
const password = ref('')

const onLogIn = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
}
</script>