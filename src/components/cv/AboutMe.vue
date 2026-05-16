<template>
  <CvSection id="about" title="Sobre mí">
    <v-card class="portfolio-card" rounded="lg" variant="flat">
      <v-card-text class="pa-5 pa-md-7">
        <p
          v-for="(text, index) in about.paragraphs"
          :key="index"
          class="text-body-1 mb-4 last:mb-0 about-text"
        >
          {{ text }}
        </p>
      </v-card-text>
    </v-card>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { about } from '@/data/cv'
</script>

<style scoped>
.about-text {
  line-height: 1.75;
}
</style>
