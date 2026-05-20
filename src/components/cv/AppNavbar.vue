<template>
  <header class="portfolio-nav" :class="{ 'portfolio-nav--scrolled': scrolled }">
    <v-toolbar class="portfolio-nav__bar" flat height="68">
      <v-btn
        v-if="isMobile"
        class="portfolio-nav__menu-btn"
        :icon="drawer ? 'mdi-close' : 'mdi-menu'"
        size="small"
        variant="text"
        :aria-label="drawer ? content.ui.menuClose : content.ui.menuOpen"
        @click="drawer = !drawer"
      />

      <nav
        v-if="!isMobile"
        class="portfolio-nav__links"
        :aria-label="content.ui.navAriaLabel"
      >
        <button
          v-for="item in content.navItems"
          :key="item.id"
          type="button"
          class="nav-link"
          :class="{ 'nav-link--active': activeId === item.id }"
          @click="onNavigate(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <v-spacer v-if="isMobile" />

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

    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      class="portfolio-nav-drawer"
      location="end"
      temporary
      width="280"
    >
      <nav class="portfolio-nav-drawer__nav" :aria-label="content.ui.navAriaLabel">
        <button
          v-for="item in content.navItems"
          :key="item.id"
          type="button"
          class="nav-drawer-link"
          :class="{ 'nav-drawer-link--active': activeId === item.id }"
          @click="onNavigate(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>
    </v-navigation-drawer>
  </header>
</template>

<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
  import { useDisplay, useTheme } from 'vuetify'
  import { useLocale } from '@/composables/useLocale'

  const props = defineProps<{
    activeId?: string
  }>()

  const emit = defineEmits<{ navigate: [id: string] }>()

  const theme = useTheme()
  const display = useDisplay()
  const { content, toggleLocale } = useLocale()

  const scrolled = ref(false)
  const drawer = ref(false)

  const isMobile = computed(() => display.smAndDown.value)

  function onScroll () {
    scrolled.value = window.scrollY > 16
  }

  function onNavigate (id: string) {
    emit('navigate', id)
    drawer.value = false
  }

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }

  watch(isMobile, mobile => {
    if (!mobile) drawer.value = false
  })

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
</script>
