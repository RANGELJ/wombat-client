<template>
  <div class="pageFrame">
    <button
      class="baseButton"
      @click="onCreateNewUser"
    >
      ADD USER
    </button>
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

.baseButton {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  color: #7c828d;
  background-color: #f3f4f7;
  border-radius: 3px;
  font-family: Roboto,sans-serif;
  font-size: .875rem;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  transition: background-color,color 0.5s;
}

.baseButton:active {
  background-color: #7c828d;
  color: white;
}
</style>

<script lang="ts" setup>
import dbGetInstance from '@/shared/dbGetInstance'
import dbWombatUsersList from '@/shared/dbWombatUsersList'
import type { WombatUser } from '@/types'
import { RouteNames } from '@/router'
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