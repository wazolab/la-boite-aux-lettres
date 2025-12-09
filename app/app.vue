<script setup lang="ts">
import { provideSSRWidth } from '@vueuse/core'

provideSSRWidth(500)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
:root {
  --primary-color: #fff;
  --secondary-color: #000;
}

html, body, p, a, address {
  font-family: 'Abbiocco Beta', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', sans-serif;
}

a {
  text-decoration: none;
}
</style>