<template>
  <div>Home</div>
</template>

<script lang="ts" setup>
import dbGetInstance from '@/shared/dbGetInstance'
import dbWombatUsersList from '@/shared/dbWombatUsersList'
import type { WombatUser } from '@/types'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const wombatUsers = ref<WombatUser[]>([])

onMounted(() => {
  if (!window.indexedDB) {
    router.replace({
      name: 'unsupportedBrowser'
    })

    return
  }

  dbGetInstance()
    .then(dbWombatUsersList)
    .then((users) => {
      wombatUsers.value = users
    })
})
</script>