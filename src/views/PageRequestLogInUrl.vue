<template>
  <div>
    <input
      v-model="email"
      type="email"
      placeholder="Your email"
      autofocus
    />
    <button @click="onLogIn" :disabled="!isLoginEnabled">Send access link</button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import serverCall from '@/shared/serverCall'

const email = ref<string>(process.env.VUE_APP_DEBUG_PRE_FILLED_AUTH_EMAIL || '')

const isLoginEnabled = computed(() => {
  if (!/[^@]+@[^@]+\.[^@]+/.test(email.value)) {
    return false
  }

  return true
})

const onLogIn = () => {
  serverCall({
    url: 'auth/users.sendAccessLink',
    data: {
      email: email.value,
    },
  })
}
</script>