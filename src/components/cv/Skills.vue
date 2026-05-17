<template>
  <CvSection
    id="skills"
    muted
    subtitle="Tecnologías y herramientas que utilizo en mis estudios y proyectos"
    title="Skills"
  >
    <div
      v-for="group in skillGroups"
      :key="group.title"
      class="skill-row"
    >
      <div class="skill-row__header">
        <v-icon :icon="group.icon" color="primary" size="small" />
        <span class="skill-row__title">{{ group.title }}</span>
      </div>
      <div class="skill-chips">
        <v-chip
          v-for="item in group.items"
          :key="item"
          color="primary"
          label
          size="small"
          variant="tonal"
        >
          {{ item }}
        </v-chip>
      </div>
    </div>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { skillGroups } from '@/data/cv'
</script>
