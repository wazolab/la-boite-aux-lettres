<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute()

const { data: projects } = await useAsyncData(`projects-${route.path}`, async () => {
  return await queryCollection('projects').order('order', 'ASC').all()
})

const { data: about } = await useAsyncData(`about-${route.path}`, async () => {
  return await queryCollection('content').path('/about').first()
})

useSeoMeta({
  title: appConfig.title,
  description: appConfig.description
})
</script>

<template>
  <template v-if="projects?.length">
    <section class="nuxt-content">
      <VProject
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </section>
    <section id="about" v-if="about">
      <article>
        <h2>
          <img class="arrow-icon" src="~/assets/icons/arrow-down-black.svg" alt="" />
          {{ about.title }}
        </h2>
        <p>{{ about.description }}</p>
        <p>{{ about.description2 }}</p>
      </article>
    </section>
  </template>
  <template v-else>
    <div>No project at the moment ...</div>
  </template>
</template>

<style lang="css" scoped>
.nuxt-content {
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 1rem;
}

#about {
  padding: 0 1rem;
  margin-top: 1rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

#about article {
  border-top: 1px solid var(--secondary-color);
  border-bottom: 1px solid var(--secondary-color);
  padding: 0.5rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 20px;
}

article h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>