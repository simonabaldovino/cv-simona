<template>
  <section id="cta" class="cta-section">
    <v-container max-width="720">
      <v-card class="cta-card glass-card text-center" rounded="xl" variant="flat">
        <v-card-text class="pa-6 pa-md-8">
          <h2 class="cta-title font-heading mb-3">
            ¿Trabajamos juntos?
          </h2>
          <p class="cta-text mb-2">
            Estoy disponible para nuevas oportunidades.
          </p>
          <p class="cta-text mb-6">
            No dudes en contactarme.
          </p>
          <div class="cta-actions">
            <a
              class="port-btn port-btn--primary"
              :href="gmailComposeHref"
              rel="noopener noreferrer"
              target="_blank"
            >
              <v-icon icon="mdi-gmail" size="small" />
              Enviar mensaje
            </a>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>

<script setup lang="ts">
  import { gmailComposeHref } from '@/utils/mailto'
</script>

<style scoped>
.cta-section {
  padding-top: 2rem;
  padding-bottom: 2.75rem;
  margin-top: 0.5rem;
}

.cta-card {
  border: 1px solid rgb(var(--v-theme-primary) / 0.22) !important;
  box-shadow: 0 10px 36px rgb(108 92 231 / 12%);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.cta-card:hover {
  transform: translateY(-4px) scale(1.015);
  box-shadow: 0 18px 48px rgb(108 92 231 / 18%);
}

.cta-title {
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  font-weight: 700;
}

.cta-text {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.65rem;
}
</style>
