<template>
  <CvSection
    id="experience"
    muted
    subtitle="Experiencia laboral y emprendimientos"
    title="Experiencia"
  >
    <v-timeline
      align="start"
      class="experience-timeline"
      density="compact"
      side="end"
      truncate-line="both"
    >
      <v-timeline-item
        v-for="(exp, index) in experiences"
        :key="`${exp.company}-${index}`"
        dot-color="primary"
        size="x-small"
      >
        <v-card class="portfolio-card experience-card timeline-card" rounded="lg" variant="flat">
          <v-card-item class="py-3">
            <template #prepend>
              <v-avatar :icon="exp.icon" color="primary" size="36" variant="tonal" />
            </template>
            <v-card-title class="exp-title">{{ exp.role }}</v-card-title>
            <v-card-subtitle class="exp-company">
              {{ exp.company }}
              <span v-if="exp.place"> · {{ exp.place }}</span>
            </v-card-subtitle>
            <v-chip class="mt-2" color="primary" size="x-small" variant="tonal">
              {{ exp.period }}
            </v-chip>
          </v-card-item>
          <v-card-text class="exp-desc pb-4 pt-0">
            {{ exp.description }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { experiences } from '@/data/cv'
</script>
