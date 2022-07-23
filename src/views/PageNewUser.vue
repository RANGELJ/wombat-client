<template>
    <div class="pageFrame">
        <input class="form" type="text" placeholder="Alias" />
        <WButton class="addButton">ADD</WButton>
        <WButton class="cancelButton" @click="router.back">CANCEL</WButton>
    </div>
</template>

<style scoped>
.pageFrame {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 10px 1fr 10px auto 10px;
    grid-template-columns: 10px 1fr 10px 1fr 10px;
}

.form {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: -2;
}

.addButton {
    grid-row-start: 4;
    grid-column-start: 4;
}

.cancelButton {
    grid-row-start: 4;
    grid-column-start: 2;
}
</style>

<script setup lang="ts">
import WButton from '@/components/WButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
