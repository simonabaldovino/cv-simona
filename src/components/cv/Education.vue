<template>
  <CvSection id="education" title="Educación">
    <v-timeline
      align="start"
      class="experience-timeline"
      density="compact"
      side="end"
      truncate-line="both"
    >
      <v-timeline-item
        v-for="(item, index) in education"
        :key="`${item.degree}-${index}`"
        dot-color="primary"
        size="x-small"
      >
        <v-card class="portfolio-card timeline-card edu-card" rounded="lg" variant="flat">
          <v-card-item class="py-4">
            <template #prepend>
              <v-avatar :icon="item.icon" color="primary" size="36" variant="tonal" />
            </template>
            <div class="edu-header">
              <div class="edu-header__row">
                <v-card-title class="edu-degree pa-0">{{ item.degree }}</v-card-title>
                <v-chip
                  v-if="item.year"
                  class="flex-shrink-0 date-chip"
                  color="primary"
                  size="small"
                  variant="tonal"
                >
                  {{ item.year }}
                </v-chip>
                <v-chip
                  v-else-if="item.detail && !item.year"
                  class="flex-shrink-0 date-chip"
                  color="primary"
                  size="small"
                  variant="tonal"
                >
                  {{ item.detail }}
                </v-chip>
              </div>
              <p v-if="item.institution" class="edu-institution mb-0">
                {{ item.institution }}
              </p>
              <p
                v-if="item.detail && item.year"
                class="edu-detail mb-0"
              >
                {{ item.detail }}
              </p>
            </div>
          </v-card-item>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { education } from '@/data/cv'
</script>

<style scoped>
.edu-header {
  width: 100%;
  min-width: 0;
}

.edu-header__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.75rem;
  margin-bottom: 0.35rem;
}

.edu-degree {
  font-size: 1.05rem !important;
  font-weight: 600;
  line-height: 1.35;
  flex: 1 1 auto;
  min-width: 0;
}

.edu-institution {
  font-size: 0.95rem;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.5;
}

.edu-detail {
  font-size: 0.875rem;
  color: rgb(var(--v-theme-on-surface) / 0.7);
  line-height: 1.5;
  margin-top: 0.2rem;
}
</style>
