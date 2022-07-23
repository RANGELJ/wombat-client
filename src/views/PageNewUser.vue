<template>
    <WFormFrame>
        <template v-slot:body>
            <div class="formFrame">
                <h1 class="formTitle">Add user</h1>
                <h2 class="formSubTitle">{{title}}</h2>
                <p class="formDescription">{{description}}</p>
                <div class="formBody">
                    <input
                        class="textInput"
                        type="text"
                        placeholder="Your user alias"
                        autofocus
                    />
                </div>
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
.formFrame {
    display: grid;
    grid-template-rows: 40px 10px 49px 10px 69px 10px 1fr;
}

.formTitle {
    grid-row-start: 1;
    color: #7c828d;
    text-align: center;
    padding: 0px;
    margin: 0px;
}

.formSubTitle {
    grid-row-start: 3;
}

.formDescription {
    grid-row-start: 5;
}

.formBody {
    grid-row-start: 7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.actions {
    display: flex;
    gap: 10px;
}

.textInput {
    border-style: solid;
    border-width: 1px;
    width: 96%;
    height: 60px;
    border-radius: 5px;
    margin: 0px;
    padding: 0px;
    padding-left: 10px;
}
</style>

<script setup lang="ts">
import WButton from '@/components/WButton.vue'
import WFormFrame from '@/components/WFormFrame.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const title = ref('User alias')
const description = ref('Users are store localy on your device and you can have up to five, each user alias should be unique')
</script>
