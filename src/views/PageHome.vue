<template>
  <div class="pageFrame">
    <WButton
      @click="onCreateNewUser"
    >
      ADD USER
    </WButton>
  </div>
</template>

<style scoped>
.pageFrame {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script lang="ts" setup>
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
      wombatUsers.value = users
    })
})

const onCreateNewUser = () => {
  router.push({
    name: RouteNames.NEW_USER,
  })
}
</script>