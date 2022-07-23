<template>
  <div>Home</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  if (!window.indexedDB) {
    router.replace({
      name: 'unsupportedBrowser'
    })
  }
})
</script>