<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

const props = defineProps<{
  project: ProjectsCollectionItem
}>()

const isMediumScreen = useMediaQuery('(min-width: 768px)')
const descToggled = ref<boolean>(false)

const hasDescription = computed(() => {
  return props.project.description && props.project.description.length > 0
})

function handleToggle() {
  descToggled.value = !descToggled.value
}
</script>

<template>
  <article class="project">
    <header>
      <h2>
        <img class="arrow-icon" src="~/assets/icons/arrow-down-white.svg" alt="" />
        {{ project.title }}
        <ClientOnly>
          <button v-if="isMediumScreen && hasDescription" @click="handleToggle">
            <img v-if="descToggled" src="~/assets/icons/times-white.svg" alt="" />
            <img v-else src="~/assets/icons/cross-white.svg" alt="" />
          </button>
        </ClientOnly>
      </h2>
      <div>
        <p v-if="descToggled">{{ project.description }}</p>
        <p v-else>{{ project.shortDescription }}</p>
      </div>
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
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

h2 button {
  margin-left: auto;
  background: transparent;
  border: none;
}

h2 button img {
  width: 12px;
}

article > img {
  width: 100%;
  margin-bottom: 1rem;
}

article header > div {
  padding-left: 1.25rem;
}
</style>