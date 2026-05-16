<template>
  <v-app class="portfolio-app font-heading">
    <AppNavbar :active-id="activeSection" @navigate="scrollTo" />

    <v-main>
      <Home @scroll="scrollTo" />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
    </v-main>

    <v-footer class="text-center py-6" color="surface" border>
      <div>
        <p class="text-body-2 mb-1">© {{ year }} {{ profile.fullName }}</p>
        <p class="text-caption text-medium-emphasis">
          Analista en Sistemas · QA Manual · Developer en formación
        </p>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  import AppNavbar from '@/components/cv/AppNavbar.vue'
  import Home from '@/components/cv/Home.vue'
  import AboutMe from '@/components/cv/AboutMe.vue'
  import Skills from '@/components/cv/Skills.vue'
  import Projects from '@/components/cv/Projects.vue'
  import Experience from '@/components/cv/Experience.vue'
  import Education from '@/components/cv/Education.vue'
  import Certificates from '@/components/cv/Certificates.vue'
  import Contact from '@/components/cv/Contact.vue'
  import { navItems, profile } from '@/data/cv'

  const year = new Date().getFullYear()
  const activeSection = ref('home')

  const sectionIds = navItems.map(item => item.id)

  function scrollTo (id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      activeSection.value = id
    }
  }

  function updateActiveSection () {
    const offset = 120
    let current = 'home'

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= offset) {
        current = id
      }
    }

    activeSection.value = current
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })
</script>

<style>
  .v-application {
    font-family: 'Poppins', sans-serif;
  }
</style>
