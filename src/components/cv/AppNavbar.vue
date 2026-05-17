<template>
  <header class="portfolio-nav">
    <v-toolbar class="portfolio-nav__bar" flat height="68">
      <nav class="portfolio-nav__links" aria-label="Secciones del portfolio">
        <button
          v-for="item in navItems"
          :key="item.id"
          type="button"
          class="nav-link"
          :class="{ 'nav-link--active': activeId === item.id }"
          @click="emit('navigate', item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <v-btn
        :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        size="small"
        variant="text"
        @click="toggleTheme"
      />
    </v-toolbar>
  </header>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { navItems } from '@/data/cv'

  defineProps<{
    activeId?: string
  }>()

  const emit = defineEmits<{ navigate: [id: string] }>()

  const theme = useTheme()

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>
