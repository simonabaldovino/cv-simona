<template>
  <header class="portfolio-nav">
    <v-toolbar class="portfolio-nav__bar" flat height="68">
      <nav class="portfolio-nav__links" :aria-label="content.ui.navAriaLabel">
        <button
          v-for="item in content.navItems"
          :key="item.id"
          type="button"
          class="nav-link"
          :class="{ 'nav-link--active': activeId === item.id }"
          @click="emit('navigate', item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <div class="portfolio-nav__actions">
        <v-btn
          class="lang-toggle text-none"
          size="small"
          variant="text"
          @click="toggleLocale"
        >
          {{ content.ui.langToggleLabel }}
        </v-btn>

        <v-btn
          :icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          size="small"
          variant="text"
          @click="toggleTheme"
        />
      </div>
    </v-toolbar>
  </header>
</template>

<script setup lang="ts">
  import { useTheme } from 'vuetify'
  import { useLocale } from '@/composables/useLocale'

  defineProps<{
    activeId?: string
  }>()

  const emit = defineEmits<{ navigate: [id: string] }>()

  const theme = useTheme()
  const { content, toggleLocale } = useLocale()

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>
