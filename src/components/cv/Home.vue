<template>
  <section id="home" class="hero-section">
    <div class="hero-blob hero-blob--1" aria-hidden="true" />
    <div class="hero-blob hero-blob--2" aria-hidden="true" />

    <v-container class="hero-container" fluid>
      <v-row align="center" class="hero-row" justify="center">
        <v-col class="text-center" cols="12" lg="5" md="5">
          <div class="hero-avatar-wrap hover-grow">
            <v-avatar class="profile-ring hero-avatar" :size="avatarSize">
              <v-img :src="profile.photo" :alt="profile.fullName" cover />
            </v-avatar>
          </div>
        </v-col>

       <v-col class="hero-text-col" cols="12" lg="6" md="7">
  <div class="hero-text-block hover-grow-slight">
    
    <h1 class="hero-name font-heading">
      {{ profile.fullName }}
    </h1>

    <p class="hero-title">
      {{ profile.title }}
    </p>

    <p class="hero-location">
  📍 Córdoba, Argentina
    </p>

    <p class="hero-tagline">
      {{ profile.tagline }}
    </p>

    <PortfolioActions
      class="hero-actions"
      layout="row"
      show-contact
      show-projects
      show-view-cv
      @scroll="emit('scroll', $event)"
    />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import { useDisplay } from 'vuetify'
  import { computed } from 'vue'
  import PortfolioActions from '@/components/cv/PortfolioActions.vue'
  import { useLocale } from '@/composables/useLocale'

  const emit = defineEmits<{ scroll: [id: string] }>()
  const display = useDisplay()
  const { profile } = useLocale()

  const avatarSize = computed(() => {
    if (display.xl.value) return 320
    if (display.lg.value) return 300
    if (display.md.value) return 260
    return 220
  })
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 68px);
  min-height: calc(100dvh - 68px);
  display: flex;
  align-items: center;
  padding: 1.5rem 0 2rem;
}

.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

.hero-blob--1 {
  width: 280px;
  height: 280px;
  background: rgb(var(--v-theme-primary) / 0.2);
  top: 10%;
  left: 5%;
}

.hero-blob--2 {
  width: 220px;
  height: 220px;
  background: rgb(var(--v-theme-secondary) / 0.18);
  bottom: 15%;
  right: 8%;
}

.hero-container {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  padding-inline: 1.25rem;
}

.hero-text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 32rem;
  margin-inline: auto;
}

.hero-name {
  font-size: clamp(2rem, 5vw, 2.85rem);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 0.6rem;
  width: 100%;
}

.hero-title {
  font-size: clamp(0.95rem, 2.2vw, 1.12rem);
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
  line-height: 1.45;
  margin: 0 0 0.65rem;
  width: 100%;
}
.hero-location {
  font-size: 0.95rem;
  opacity: 0.75;
  margin-top: 4px;
  margin-bottom: 18px;
}

.hero-tagline {
  font-size: clamp(0.9rem, 2vw, 1.02rem);
  line-height: 1.65;
  margin: 0 0 1.35rem;
  opacity: 0.9;
  width: 100%;
}

.hero-actions {
  justify-content: center;
  width: 100%;
}

.hero-avatar-wrap {
  display: inline-block;
}

.hover-grow {
  transition: transform 0.35s ease;
}

.hover-grow:hover {
  transform: scale(1.06);
}

.hover-grow-slight {
  transition: transform 0.35s ease;
}

.hover-grow-slight:hover {
  transform: scale(1.02);
}

@media (min-width: 960px) {
  .hero-text-col {
    display: flex;
    align-items: center;
  }

  .hero-text-block {
    margin-inline: 0;
    align-items: flex-start;
    text-align: left;
    max-width: 30rem;
  }

  .hero-actions {
    justify-content: flex-start;
  }
}
</style>
