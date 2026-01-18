<script setup lang="ts">
const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const appConfig = useAppConfig()
const { height } = useWindowSize()

const  scrollThreshold = computed(() => {    
  return Math.round(height.value * 0.68);
})

const { isScrolled } = useScroll(scrollThreshold.value)
</script>

<template>
  <header class="app-header" id="top">
    <img class="brand-logo" src="~/assets/images/brand-logo.svg" :alt="`${appConfig.title} - Logo`" />
    <div>
      <img class="brand" src="~/assets/images/brand-mobile.svg" :alt="appConfig.title" />
      <div>
        <p>{{ appConfig.description }}</p>
        <p>{{ appConfig.description2 }}</p>
      </div>
    </div>
  </header>
  <header class="app-header--sticky" v-if="isScrolled">
    <img src="~/assets/images/brand-desktop.svg" :alt="appConfig.title" />
    <nav>
      <NuxtLink to="#about">
        <img class="arrow-icon" src="~/assets/icons/arrow-down-black.svg" alt="" />
        About
      </NuxtLink>
      <NuxtLink v-if="isLargeScreen" to="#top">
        <img class="arrow-icon" src="~/assets/icons/arrow-up-black.svg" alt="" />
        Back on top
      </NuxtLink>
    </nav>
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
  box-sizing: border-box;
}

.app-header > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.app-header--sticky {
  position: fixed;
  top: 0;
  width: 100%;
  height: 34px;
  padding: 0.75rem 1rem;
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

nav {
  display: flex;
  gap: 2.5rem;
  margin-left: auto;
}

a {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: inherit;
  font-size: 0.75rem;
}

p {
  font-size: 1.25rem;
  line-height: 1.5rem;
}

@media (min-width: 768px) {
  .app-header {
    height: 100vh;
  }

  .app-header > div {
    position: absolute;
    bottom: 3rem;
  }

   .app-header > div > div {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
   }

  .brand {
    width: 332px;
  }

  .brand-logo {
    width: 168px;
  }

  p {
    font-size: 1.4rem;
    line-height: inherit;
  }

  a {
    font-size: 0.9rem;
  }
}

@media (min-width: 1024px) {
  .app-header--sticky {
    height: 64px;
    padding: 1rem 4rem;
  }

  .app-header--sticky img {
    height: 24px;
  }

  .brand-logo {
    width: 228px;
  }

  .brand {
    width: 460px;
  }

  a {
    font-size: 1.15rem;
  }

  p {
    font-size: 1.75rem;
  }
}

@media (min-width: 1536px) {
  .brand-logo {
    width: 340px;
  }

  .brand {
    width: 688px;
  }

   a {
    font-size: 1.35rem;
  }

  p {
    font-size: 2.4rem;
  }
}

@media (min-width: 1920px) {
  .brand-logo {
    width: 447px;
  }

  .brand {
    width: 892px;
  }

  p {
    font-size: 3.2rem;
  }
}
</style>