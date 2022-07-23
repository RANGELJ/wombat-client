<template>
    <WFormFrame>
        <template v-slot:body>
            <input class="form" type="text" placeholder="Alias" />
        </template>
        <template v-slot:actions>
            <div class="actions">
                <WButton class="cancelButton" @click="router.back">CANCEL</WButton>
                <WButton class="addButton">ADD</WButton>
            </div>
        </template>
    </WFormFrame>
</template>

<style scoped>
.actions {
    display: flex;
    gap: 10px;
}
</style>

<script setup lang="ts">
import WButton from '@/components/WButton.vue'
import WFormFrame from '@/components/WFormFrame.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
