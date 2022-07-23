<template>
    <button
      class="baseButton"
    >
      <slot />
    </button>
</template>

<style scoped>
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
