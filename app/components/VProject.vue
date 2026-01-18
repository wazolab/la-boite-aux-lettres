<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

const props = defineProps<{
  project: ProjectsCollectionItem
}>()

const isMediumScreen = useMediaQuery('(min-width: 768px)')
const descToggled = ref<boolean>(false)
const popupImageToggled = ref<boolean>(false) 

const hasDescription = computed(() => {
  return props.project.description && props.project.description.length > 0
})

const hasExternalLink = computed(() => {
  return Boolean(props.project.toggleUrl)
})

const hasExtraImage = computed(() => {
  return Boolean(props.project.popupImage)
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
      <a v-if="hasExternalLink" class="trigger-additional" :href="project.toggleUrl" target="_blank" rel="noopener noreferrer">
        {{ project.toggleText }}
      </a>
      <button v-if="hasExtraImage && !popupImageToggled" type="button" class="trigger-additional" @click="popupImageToggled = true">
        {{ project.toggleText }}
      </button>
      <img v-if="popupImageToggled" class="popup-close" src="~/assets/icons/times-bazaar-white.svg" alt="" @click="popupImageToggled = false"  />
    </header>
    <div class="image-wrap">
      <img :src="project.image" :alt="project.title" />
      <img v-if="popupImageToggled" :src="project.popupImage" :alt="project.title" />
    </div>
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

.image-wrap {
  position: relative;
}

.image-wrap img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

h2 button {
  margin-left: auto;
  background: transparent;
  border: none;
}

h2 button img {
  width: 12px;
}

.image-wrap > img {
  width: 100%;
  margin-bottom: 1rem;
}

article header > div {
  padding-left: 1.25rem;
}

header {
  display: flex;
  flex-direction: column;
}

.popup-close,
.trigger-additional {
  cursor: pointer;
  align-self: flex-end;
}

.popup-close {
  width: 28px;
}

.trigger-additional {
  font-family: 'Bazaar', sans-serif;
  background: transparent;
  color: #FFFFFF;
  border-radius: 10px;
  border: 2px solid var(--primary-color);
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  transform: rotate(-2.6deg);
}
</style>