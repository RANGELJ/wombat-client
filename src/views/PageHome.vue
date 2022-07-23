<template>
  <WFormFrame>
    <template v-slot:body>
      <div class="listFrame">
        <WIconContact />
        <p>No users found</p>
      </div>
    </template>
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
.listFrame {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script lang="ts" setup>
import WFormFrame from '@/components/WFormFrame.vue'
import dbGetInstance from '@/shared/dbGetInstance'
import WIconContact from '@/components/WIconContact.vue'
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