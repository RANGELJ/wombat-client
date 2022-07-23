<template>
    <WFormFrame>
        <template v-slot:body>
            <div class="formFrame">
                <h1 class="formTitle">Add user</h1>
                <h2 class="formSubTitle">{{title}}</h2>
                <WParagraph class="formDescription">{{description}}</WParagraph>
                <div class="formBody">
                    <input
                        ref="aliasInput"
                        class="textInput"
                        type="text"
                        placeholder="Your user alias"
                        autofocus
                        @keyup.enter="onNext"
                        v-model="alias"
                    />
                </div>
            </div>
        </template>
        <template v-slot:actions>
            <div class="actions">
                <WButton class="cancelButton" @click="onCancel">CANCEL</WButton>
                <WButton
                    class="addButton"
                    :disabled="!alias"
                    @click="onNext"
                >
                    NEXT
                </WButton>
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
    color: var(--app-color);
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
import WParagraph from '@/components/WParagraph.vue'
import { RouteNames } from '@/router'
import dbGetInstance from '@/shared/dbGetInstance'
import dbWombatUsersGetByName from '@/shared/dbWombatUsersGetByName'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('User alias')
const description = ref('Users are stored locally on your device and you can have up to five, each user alias should be unique')

const aliasInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
    aliasInput.value?.focus()
})

const router = useRouter()

const onCancel = () => {
    router.replace({
        name: RouteNames.HOME,
    })
}

const alias = ref('')

const onNext = () => {
    if (!alias.value) {
        return
    }
    dbGetInstance()
        .then((db) => dbWombatUsersGetByName(db, alias.value))
        .then((user) => {
            console.log(user)
        })
}
</script>
