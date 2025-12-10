<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

defineProps<{
  project: ProjectsCollectionItem
}>()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <article class="project">
    <header>
      <h2>↓ {{  project.title }}</h2>
      <p v-if="isLargeScreen">{{ project.description }}</p>
      <p v-else>{{ project.shortDescription }}</p>
    </header>
    <img :src="project.image" :alt="project.title" />
  </article>
</template>

<style lang="css" scoped>
article {
  border-top: 1px solid var(--primary-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  padding: 0.5rem 0rem;
}

img {
  width: 100%;
}
</style>