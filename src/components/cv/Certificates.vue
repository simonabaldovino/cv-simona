<template>
  <CvSection
    id="certificates"
    muted
    :subtitle="content.sections.certificates.subtitle"
    :title="content.sections.certificates.title"
  >
    <div class="certs-list">
      <v-card
        v-for="cert in content.certificates"
        :key="cert.name"
        class="portfolio-card cert-card-h"
        rounded="lg"
        variant="flat"
      >
        <div class="cert-card-h__inner">
          <v-avatar :icon="cert.icon" color="primary" size="40" variant="tonal" />
          <div class="cert-card-h__text">
            <h3 class="cert-name">{{ cert.name }}</h3>
            <p class="cert-meta mb-0">
              {{ cert.institution }}
              <span v-if="cert.year"> · {{ cert.year }}</span>
            </p>
          </div>
          <a
            v-if="cert.pdf"
            class="cert-view-link flex-shrink-0"
            :href="cert.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            <v-icon icon="mdi-open-in-new" size="small" />
            {{ content.sections.certificates.view }}
          </a>
        </div>
      </v-card>
    </div>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import { useLocale } from '@/composables/useLocale'

  const { content } = useLocale()
</script>
