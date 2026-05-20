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
          <v-card-item class="experience-card__item py-3">
            <template #prepend>
              <v-avatar :icon="exp.icon" color="primary" size="36" variant="tonal" />
            </template>
            <div class="exp-header">
              <div class="exp-header__main">
                <p class="exp-title mb-0">{{ exp.role }}</p>
                <v-chip
                  class="exp-period flex-shrink-0 date-chip"
                  color="primary"
                  size="small"
                  variant="tonal"
                >
                  {{ exp.period }}
                </v-chip>
              </div>
              <p class="exp-company mb-0 mt-1">
                {{ exp.company }}
                <span v-if="exp.place"> · {{ exp.place }}</span>
              </p>
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
