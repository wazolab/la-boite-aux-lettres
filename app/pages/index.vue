<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute()

const PROJECTS_PER_PAGE = 7
const displayCount = ref(PROJECTS_PER_PAGE)

const { data: projects } = await useAsyncData(`projects-${route.path}`, async () => {
  return await queryCollection('projects').order('order', 'ASC').all()
})

const visibleProjects = computed(() => projects.value?.slice(0, displayCount.value) ?? [])
const hasMoreProjects = computed(() => (projects.value?.length ?? 0) > displayCount.value)

const loadMore = () => {
  displayCount.value += PROJECTS_PER_PAGE
}

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
        v-for="project in visibleProjects"
        :key="project.title"
        :project="project"
      />
      <button v-if="hasMoreProjects" class="load-more" @click="loadMore">
        <img class="arrow-icon" src="~/assets/icons/arrow-down-white.svg" alt="" />
        See more projects
      </button>
    </section>
    <section id="about" v-if="about">
      <article>
        <h2>
          <img class="arrow-icon" src="~/assets/icons/arrow-down-black.svg" alt="" />
          {{ about.title }}
        </h2>
        <div>
          <p>{{ about.description }}</p>
          <p>{{ about.description2 }}</p>
        </div>
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

.load-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--primary-color);
  padding: 0;
}

.load-more:hover {
  cursor: pointer;
  text-decoration: underline;
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
  gap: 0.5rem;
  line-height: 15px;
}

.load-more,
#about article {
  font-size: 0.75rem;
}

article h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  #about {
    margin-top: 2rem;
  }

  #about article {
    padding-bottom: 2rem;
  }

  #about article > div {
    margin-left: 33.333%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .load-more,
  #about article {
    font-size: 1rem;
    line-height: 20px;
  }
}

@media (min-width: 1024px) {
  #about {
    margin-top: 2.5rem;
  }

  #about article {
    padding-bottom: 2.5rem;
  }

  #about article > div {
    padding-right: 1rem;
  }

  .load-more,
  #about article {
    font-size: 1.15rem;
    line-height: 22px;
  }
}

@media (min-width: 1536px) {
  #about article > div {
    flex-direction: row;
    gap: 2rem;
    padding-right: 2rem;
  }

  #about article > div > p {
    width: 50%;
  }
}
</style>