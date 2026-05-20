<template>
  <CvSection id="availability" :title="content.sections.availability.title">
    <v-card class="availability-card" rounded="xl" variant="flat">
      <v-card-item class="pa-5 pa-md-6">
        <template #prepend>
          <v-avatar color="primary" icon="mdi-briefcase-search-outline" size="48" variant="tonal" />
        </template>
        <v-card-title class="availability-title">
          {{ content.sections.availability.headline }}
        </v-card-title>
      </v-card-item>
      <v-card-text class="px-5 px-md-6 pb-6 pt-0">
        <p
          v-for="(text, i) in content.availability.paragraphs"
          :key="i"
          class="availability-text mb-3 last:mb-0"
        >
          {{ text }}
        </p>
      </v-card-text>
    </v-card>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { useLocale } from '@/composables/useLocale'

  const { content } = useLocale()
</script>

<style scoped>
.availability-card {
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary) / 0.12) 0%,
    rgb(var(--v-theme-surface)) 45%,
    rgb(var(--v-theme-secondary) / 0.08) 100%
  ) !important;
  border: 1px solid rgb(var(--v-theme-primary) / 0.22) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.availability-card:hover {
  transform: translateY(-3px) scale(1.008);
  box-shadow: 0 16px 40px rgb(108 92 231 / 16%);
}

.availability-title {
  font-size: 1.1rem !important;
  font-weight: 600;
}

.availability-text {
  line-height: 1.7;
  font-size: 0.95rem;
}
</style>
