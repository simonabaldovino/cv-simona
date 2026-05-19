<template>
  <v-app class="portfolio-app font-heading">
    <AppNavbar :active-id="activeSection" @navigate="scrollTo" />

    <v-main>
      <Home @scroll="scrollTo" />
      <AboutMe />
      <Availability />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <CtaBanner />
    </v-main>

    <v-footer class="portfolio-footer" color="surface" border>
      <v-container class="footer-inner">
        <div class="footer-line text-caption text-medium-emphasis">
          <div class="footer-left">
            <p class="footer-name mb-1">© {{ year }} {{ profile.fullName }}</p>
            <p class="footer-role mb-0">
              Analista en Sistemas · QA Manual · Developer en formación
            </p>
          </div>
          <p class="footer-right mb-0">
            Hecho con dedicación, aprendizaje constante y muchas ganas de crecer 🚀
          </p>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  import AppNavbar from '@/components/cv/AppNavbar.vue'
  import Home from '@/components/cv/Home.vue'
  import AboutMe from '@/components/cv/AboutMe.vue'
  import Availability from '@/components/cv/Availability.vue'
  import Skills from '@/components/cv/Skills.vue'
  import Projects from '@/components/cv/Projects.vue'
  import Experience from '@/components/cv/Experience.vue'
  import Education from '@/components/cv/Education.vue'
  import Certificates from '@/components/cv/Certificates.vue'
  import Contact from '@/components/cv/Contact.vue'
  import CtaBanner from '@/components/cv/CtaBanner.vue'
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
    const offset = 140
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

  .portfolio-footer {
    padding: 0.85rem 0;
  }

  .footer-inner {
    max-width: 1100px;
  }

  .footer-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.45;
    text-align: center;
    width: 100%;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-name {
    font-weight: 600;
  }

  .footer-right {
    line-height: 1.5;
  }

  @media (min-width: 900px) {
    .footer-line {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .footer-left {
      align-items: flex-start;
      text-align: left;
      flex: 1;
    }

    .footer-right {
      text-align: right;
      flex-shrink: 0;
      white-space: nowrap;
    }
  }
</style>
