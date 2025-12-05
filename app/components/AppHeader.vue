<script setup lang="ts">
const appConfig = useAppConfig()
const { isScrolled } = useScroll(100)
</script>

<template>
  <header
    class="app-header"
    :class="{ 'is-fixed': isScrolled }"
  >
    <img
      v-if="isScrolled"
      src="~/assets/images/brand-desktop.svg"
      :alt="appConfig.title"
    />

    <template v-if="!isScrolled">
      <img class="brand-logo" src="~/assets/images/brand-logo.svg" :alt="`${appConfig.title} - Logo`" />
      <img src="~/assets/images/brand-mobile.svg" :alt="appConfig.title" />
      <p>{{ appConfig.description }}</p>
    </template>

    <NuxtLink v-if="isScrolled" to="#about">⭣ About</NuxtLink>
  </header>

</template>

<style lang="css" scoped>
.app-header {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  gap: 1rem;
  transition: all 0.3s ease;
  height: 68vh;
  padding: 3rem 2rem;
  flex-direction: column;
}

.app-header.is-fixed {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 34px;
  padding: 0.75rem 2rem;
  flex-direction: row;
  z-index: 10;
  align-items: center;
}

.app-header.is-fixed img {
  height: 11px;
}

.brand-logo {
  align-self: flex-end;
  margin-bottom: auto;
  width: 36vw;
}

a {
  margin-left: auto;
  font-weight: 500;
}

p {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
</style>