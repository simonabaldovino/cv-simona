<template>
  <CvSection id="contact" title="Contacto e información">
    <v-row>
      <v-col cols="12" md="7">
        <v-card class="glass-card" rounded="lg" variant="flat">
          <v-list lines="two">
            <div class="email-wrap">
              <v-list-item
                prepend-icon="mdi-email-outline"
                subtitle="Email"
                :title="profile.email"
                class="email-item"
                @click="onEmailClick"
              />
              <transition name="copy-fade">
                <span v-if="showCopyTip" class="copy-toast">Email copiado</span>
              </transition>
            </div>
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
  import { ref } from 'vue'
  import CvSection from '@/components/cv/CvSection.vue'
  import PortfolioActions from '@/components/cv/PortfolioActions.vue'
  import { copyEmailToClipboard } from '@/utils/mailto'
  import { profile } from '@/data/cv'

  const showCopyTip = ref(false)

  async function onEmailClick () {
    const ok = await copyEmailToClipboard()
    if (ok) {
      showCopyTip.value = true
      setTimeout(() => { showCopyTip.value = false }, 2000)
    }
  }
</script>

<style scoped>
.contact-text {
  line-height: 1.65;
}

.email-wrap {
  position: relative;
}

.email-item {
  cursor: pointer;
}

.email-item :deep(.v-list-item-title) {
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
}

.copy-toast {
  position: absolute;
  top: 0.35rem;
  right: 1rem;
  z-index: 5;
  padding: 0.35rem 0.65rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  background: rgb(var(--v-theme-primary));
  box-shadow: 0 4px 14px rgb(108 92 231 / 35%);
  pointer-events: none;
}

.copy-fade-enter-active,
.copy-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.copy-fade-enter-from,
.copy-fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}
</style>
