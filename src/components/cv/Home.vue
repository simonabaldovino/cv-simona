<template>
  <section id="home" class="hero-section">
    <v-container class="py-10 py-md-14" max-width="1100">
      <v-row align="center" justify="center" class="hero-row">
        <v-col class="text-center" cols="12" md="5" lg="4">
          <v-avatar class="profile-ring hero-avatar" size="260">
            <v-img :src="profile.photo" alt="Simona Baldovino" cover />
          </v-avatar>
        </v-col>

        <v-col class="text-center text-md-start hero-content" cols="12" md="7" lg="8">
          <h1 class="hero-name font-heading">
            {{ profile.fullName }}
          </h1>
          <p class="hero-title">
            {{ profile.title }}
          </p>
          <p class="hero-tagline">
            {{ profile.tagline }}
          </p>

          <PortfolioActions
            layout="row"
            show-contact
            show-projects
            show-view-cv
            @scroll="emit('scroll', $event)"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import PortfolioActions from '@/components/cv/PortfolioActions.vue'
  import { profile } from '@/data/cv'

  const emit = defineEmits<{ scroll: [id: string] }>()
</script>

<style scoped>
.hero-row {
  gap: 0.5rem;
}

.hero-avatar {
  margin-inline: auto;
}

.hero-name {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.hero-title {
  font-size: 1.05rem;
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.hero-tagline {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 34rem;
  margin: 0 auto 1.5rem;
  opacity: 0.88;
}

@media (min-width: 960px) {
  .hero-tagline {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
