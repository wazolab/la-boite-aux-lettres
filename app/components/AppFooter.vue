<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <footer>
    <img src="~/assets/images/brand-mobile.svg" :alt="appConfig.title"></img>
    <address>
      Laurette Colmard
      laurette.colmard@gmail.com
      29 rue Colonel Bougault, 38100 Grenoble (FR)
      06 01 93 75 87
    </address>
  </footer>
</template>

<style lang="css" scoped>
footer {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
</style>