<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <header>
    <img src="~/assets/icons/brand-logo.svg" :alt="`${appConfig.title} - Logo`"></img>
    <img src="~/assets/images/brand-mobile.svg" :alt="appConfig.title"></img>
    <p>{{ appConfig.description }}</p>
  </header>
</template>

<style lang="css" scoped>
header {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  height: 68vh;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

img:first-of-type {
  align-self: flex-end;
  margin-bottom: auto;
  width: 36vw;
}

p {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
</style>