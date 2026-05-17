<template>
  <CvSection id="about" title="Sobre mí">
    <v-card class="portfolio-card" rounded="lg" variant="flat">
      <v-card-text class="pa-5 pa-md-7">
        <p
          v-for="(text, index) in about.paragraphs"
          :key="index"
          class="text-body-1 mb-4 about-text"
        >
          {{ text }}
        </p>

        <v-divider class="my-4" />

        <p class="text-subtitle-2 font-weight-bold mb-3">Idiomas</p>
        <div class="languages-row">
          <v-chip
            v-for="lang in languages"
            :key="lang.name"
            class="lang-chip"
            color="primary"
            label
            size="small"
            variant="tonal"
          >
            {{ lang.name }} — {{ lang.level }}
          </v-chip>
        </div>
      </v-card-text>
    </v-card>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { about, languages } from '@/data/cv'
</script>

<style scoped>
.about-text {
  line-height: 1.75;
}

.about-text:last-of-type {
  margin-bottom: 0;
}

.languages-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.lang-chip {
  margin: 0;
}
</style>
