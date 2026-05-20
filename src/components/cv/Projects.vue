<template>
  <CvSection
    id="projects"
    :subtitle="content.sections.projects.subtitle"
    :title="content.sections.projects.title"
  >
    <div class="projects-stack">
      <v-card
        v-for="project in content.projects"
        :key="project.name"
        class="portfolio-card project-card-h"
        rounded="lg"
        variant="flat"
      >
        <div class="project-card-h__inner">
          <v-avatar
            class="flex-shrink-0"
            :icon="project.icon"
            color="primary"
            size="48"
            variant="tonal"
          />
          <div class="project-card-h__body">
            <h3 class="project-title">
              {{ project.name }}
            </h3>
            <p class="project-desc">
              {{ project.description }}
            </p>
            <div class="project-techs">
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                size="small"
                variant="outlined"
              >
                {{ tech }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-card>
    </div>

    <div class="text-center mt-6">
      <a
        v-if="profile.github"
        class="port-btn port-btn--primary"
        :href="profile.github"
        rel="noopener noreferrer"
        target="_blank"
      >
        <v-icon icon="mdi-github" size="small" />
        {{ content.sections.projects.viewGithub }}
      </a>
    </div>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { useLocale } from '@/composables/useLocale'

  const { content, profile } = useLocale()
</script>
