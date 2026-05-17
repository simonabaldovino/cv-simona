<template>
  <CvSection id="languages" title="Idiomas">
    <v-row justify="center">
      <v-col
        v-for="lang in languages"
        :key="lang.name"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="portfolio-card h-100" rounded="lg" variant="flat">
          <v-card-item class="py-4">
            <template #prepend>
              <v-avatar color="primary" icon="mdi-translate" variant="tonal" />
            </template>
            <v-card-title>{{ lang.name }}</v-card-title>
            <v-card-subtitle>{{ lang.level }}</v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { languages } from '@/data/cv'
</script>
