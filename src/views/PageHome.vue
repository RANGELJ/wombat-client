<template>
  <WFormFrame>
    <template v-slot:actions>
      <WButton
        @click="onCreateNewUser"
      >
        ADD USER
      </WButton>
    </template>
  </WFormFrame>
</template>

<style scoped>
</style>

<script lang="ts" setup>
import WFormFrame from '@/components/WFormFrame.vue'
import dbGetInstance from '@/shared/dbGetInstance'
import dbWombatUsersList from '@/shared/dbWombatUsersList'
import type { WombatUser } from '@/types'
import { RouteNames } from '@/router'
import WButton from '@/components/WButton.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const wombatUsers = ref<WombatUser[]>([])

onMounted(() => {
  if (!window.indexedDB) {
    router.replace({
      name: RouteNames.UNSUPPORTED,
    })

    return
  }

  dbGetInstance()
    .then(dbWombatUsersList)
    .then((users) => {
      console.log('users', users)
      wombatUsers.value = users
    })
})

const onCreateNewUser = () => {
  router.push({
    name: RouteNames.NEW_USER,
  })
}
</script>