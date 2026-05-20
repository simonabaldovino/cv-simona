<template>
  <CvSection
    id="experience"
    muted
    :subtitle="content.sections.experience.subtitle"
    :title="content.sections.experience.title"
  >
    <v-timeline
      align="start"
      class="experience-timeline"
      density="compact"
      side="end"
      truncate-line="both"
    >
      <v-timeline-item
        v-for="(exp, index) in content.experiences"
        :key="`${exp.company}-${index}`"
        dot-color="primary"
        size="x-small"
      >
        <v-card class="portfolio-card experience-card timeline-card" rounded="lg" variant="flat">
          <v-card-item class="py-3">
            <template #prepend>
              <v-avatar :icon="exp.icon" color="primary" size="36" variant="tonal" />
            </template>
            <div class="exp-header">
              <div class="exp-header__main">
                <v-card-title class="exp-title pa-0">{{ exp.role }}</v-card-title>
                <v-chip
                  class="exp-period flex-shrink-0 date-chip"
                  color="primary"
                  size="small"
                  variant="tonal"
                >
                  {{ exp.period }}
                </v-chip>
              </div>
              <v-card-subtitle class="exp-company pa-0 mt-1">
                {{ exp.company }}
                <span v-if="exp.place"> · {{ exp.place }}</span>
              </v-card-subtitle>
            </div>
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
  import { useLocale } from '@/composables/useLocale'

  const { content } = useLocale()
</script>

<style scoped>
.exp-header {
  width: 100%;
  min-width: 0;
}

.exp-header__main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
}

.exp-title {
  flex: 1 1 auto;
  min-width: 0;
}
</style>
