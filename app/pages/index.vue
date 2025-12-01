<script setup lang="ts">
const appConfig = useAppConfig()
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: appConfig.title,
  description: appConfig.description
})
</script>

<template>
  <ContentRenderer class="nuxt-content" v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>

<style lang="css" scoped>
.nuxt-content {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}
</style>