<template>
  <CvSection id="education" :title="content.sections.education.title">
    <v-timeline
      align="start"
      class="experience-timeline"
      density="compact"
      side="end"
      truncate-line="both"
    >
      <v-timeline-item
        v-for="(item, index) in content.education"
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
                  class="edu-period flex-shrink-0 date-chip"
                  color="primary"
                  size="small"
                  variant="tonal"
                >
                  {{ item.year }}
                </v-chip>
                <v-chip
                  v-else-if="item.detail && !item.year"
                  class="edu-period flex-shrink-0 date-chip"
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
  import { useLocale } from '@/composables/useLocale'

  const { content } = useLocale()
</script>
