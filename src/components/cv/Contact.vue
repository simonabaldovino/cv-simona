<template>
  <CvSection id="contact" title="Contacto e información">
    <v-row>
      <v-col cols="12" md="7">
        <v-card class="portfolio-card" rounded="lg" variant="flat">
          <v-list lines="two">
            <v-list-item
              :href="`mailto:${profile.email}`"
              prepend-icon="mdi-email-outline"
              subtitle="Email"
              :title="profile.email"
            />
            <v-list-item
              :href="`tel:${profile.phone.replace(/\s/g, '')}`"
              prepend-icon="mdi-phone-outline"
              subtitle="Teléfono"
              :title="profile.phone"
            />
            <v-list-item
              :href="profile.github"
              prepend-icon="mdi-github"
              rel="noopener noreferrer"
              subtitle="GitHub"
              target="_blank"
              title="Perfil de GitHub"
            />
            <v-list-item
              :href="profile.linkedin"
              prepend-icon="mdi-linkedin"
              rel="noopener noreferrer"
              subtitle="LinkedIn"
              target="_blank"
              title="Perfil de LinkedIn"
            />
          </v-list>

          <v-divider />

          <v-card-text>
            <p class="text-caption text-medium-emphasis mb-2">Idiomas</p>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                v-for="lang in languages"
                :key="lang.name"
                color="primary"
                size="small"
                variant="tonal"
              >
                {{ lang.name }} — {{ lang.level }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="d-flex flex-column justify-center" cols="12" md="5">
        <p class="text-body-1 text-medium-emphasis mb-4 contact-text">
          ¿Querés conocer más sobre mi perfil? Escribime o descargá mi CV en PDF.
        </p>
        <PortfolioActions
          layout="column"
          show-download-cv
          show-email
          show-view-cv
        />
      </v-col>
    </v-row>
  </CvSection>
</template>

<script setup lang="ts">
  import CvSection from '@/components/cv/CvSection.vue'
  import PortfolioActions from '@/components/cv/PortfolioActions.vue'
  import { languages, profile } from '@/data/cv'
</script>

<style scoped>
.contact-text {
  line-height: 1.65;
}
</style>
