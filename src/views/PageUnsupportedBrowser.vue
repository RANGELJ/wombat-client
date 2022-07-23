<template>
    <div class="pageFrame">
        <h1>Unsupported browser :(</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    if (window.indexedDB) {
        router.replace({
            name: 'home',
        })
    }
})
</script>

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