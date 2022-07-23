<template>
    <WFormFrame>
        <template v-slot:body>
            <div>
                <h1>Add user</h1>
                <h2>User alias</h2>
                <p>Users are store localy on your device and you can have up to five, each user alias should be unique</p>
                <input
                    class="textInput"
                    type="text"
                    placeholder="Alias"
                    autofocus
                />
            </div>
        </template>
        <template v-slot:actions>
            <div class="actions">
                <WButton class="cancelButton" @click="router.back">CANCEL</WButton>
                <WButton class="addButton">NEXT</WButton>
            </div>
        </template>
    </WFormFrame>
</template>

<style scoped>
.actions {
    display: flex;
    gap: 10px;
}

.textInput {
    border-style: solid;
    border-width: 1px;
    width: 100%;
    height: 60px;
    border-radius: 5px;
}
</style>

<script setup lang="ts">
import WButton from '@/components/WButton.vue'
import WFormFrame from '@/components/WFormFrame.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
