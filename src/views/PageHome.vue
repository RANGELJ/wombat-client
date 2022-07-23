<template>
  <div>Home</div>
</template>

<script lang="ts" setup>
import dbGetInstance from '@/shared/dbGetInstance'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  if (!window.indexedDB) {
    router.replace({
      name: 'unsupportedBrowser'
    })

    return
  }

  dbGetInstance()
    .then((db) => {
      const transaction = db.transaction(['money_transactions'], 'readwrite')
      transaction.oncomplete = () => {
        console.log('Transaction completed')
      }
      console.log(db)
      transaction.objectStore('money_transactions').add({
        name: 'Hello there',
      })
    })
})
</script>