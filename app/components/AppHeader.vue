<script setup lang="ts">
const appConfig = useAppConfig()

const scrollThreshold = ref<number>(0)

onMounted(() => {
  const updateThreshold = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    scrollThreshold.value = Math.round(viewportHeight * 0.68);
  }

  updateThreshold()
})

const effectiveScrollThreshold = computed(() => {
  return import.meta.client ? scrollThreshold.value : 0;
});

const { isScrolled } = useScroll(effectiveScrollThreshold.value)
</script>

<template>
  <header class="app-header">
    <img class="brand-logo" src="~/assets/images/brand-logo.svg" :alt="`${appConfig.title} - Logo`" />
    <img class="brand" src="~/assets/images/brand-mobile.svg" :alt="appConfig.title" />
    <p>{{ appConfig.description }}</p>
  </header>
  <header class="app-header--sticky" v-if="isScrolled">
    <img src="~/assets/images/brand-desktop.svg" :alt="appConfig.title" />
    <NuxtLink to="#about">⭣ About</NuxtLink>
  </header>
</template>

<style lang="css" scoped>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.app-header,
.app-header--sticky {
  display: flex;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.app-header {
  gap: 1rem;
  flex-direction: column;
  padding: 3rem 2rem;
  height: 68vh;
}

.app-header--sticky {
  position: fixed;
  top: 0;
  width: 100%;
  height: 34px;
  padding: 0.75rem 2rem;
  align-items: center;
  animation: slideDown 0.3s ease;
  z-index: 10;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
}

.app-header--sticky img {
  height: 11px;
}

.brand-logo {
  align-self: flex-end;
  margin-bottom: auto;
  width: 135px;
}

.brand {
  width: 300px;
}

a {
  margin-left: auto;
  font-weight: 500;
  color: inherit;
}

p {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
</style>