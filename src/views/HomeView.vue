<template>
  <div>Hello</div>
</template>

<script lang="ts" setup>
import { getAuth } from 'firebase/auth'
import firebaseClient from '@/firebaseClient'

const auth = getAuth(firebaseClient)

console.log(auth.currentUser)
</script>