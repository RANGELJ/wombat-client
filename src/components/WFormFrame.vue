<template>
    <div class="wFormFrame">
        <div class="wFormBody">
            <slot name="body" />
        </div>
        <div class="wFormActions">
            <slot name="actions" />
        </div>
    </div>
</template>

<style scoped>
.wFormFrame {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 10px 1fr 10px auto 10px;
    grid-template-columns: 10px 1fr 10px;
}

.wFormBody {
    display: flex;
    grid-row-start: 2;
    grid-column-start: 2;
}

.wFormActions {
    grid-row-start: -3;
    grid-column-start: 2;
}
</style>
