<template>
  <section
    :id="id"
    class="portfolio-section"
    :class="{ 'portfolio-section--muted': muted }"
  >
    <v-container max-width="960">
      <div class="section-heading__line" />
      <h2 class="section-heading text-h5 text-md-h4 mb-1">{{ title }}</h2>
      <p
        v-if="subtitle"
        class="section-subtitle text-body-2 text-medium-emphasis"
      >
        {{ subtitle }}
      </p>
      <slot />
    </v-container>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    id: string
    title: string
    subtitle?: string
    muted?: boolean
  }>()
</script>
