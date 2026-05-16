<template>
  <div class="port-actions" :class="`port-actions--${layout}`">
    <button
      v-if="showProjects"
      type="button"
      class="port-btn port-btn--primary"
      @click="emit('scroll', 'projects')"
    >
      <v-icon icon="mdi-folder-outline" size="small" />
      Ver proyectos
    </button>

    <a
      v-if="showViewCv"
      class="port-btn port-btn--outline"
      :href="profile.cvPdf"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon icon="mdi-file-pdf-box" size="small" />
      Ver CV
    </a>

    <a
      v-if="showDownloadCv"
      class="port-btn port-btn--outline"
      :href="profile.cvPdf"
      download
    >
      <v-icon icon="mdi-download" size="small" />
      Descargar CV
    </a>

    <button
      v-if="showContact"
      type="button"
      class="port-btn port-btn--outline"
      @click="emit('scroll', 'contact')"
    >
      <v-icon icon="mdi-email-outline" size="small" />
      Contacto
    </button>

    <a
      v-if="showEmail"
      class="port-btn port-btn--primary"
      :href="`mailto:${profile.email}`"
    >
      <v-icon icon="mdi-send-outline" size="small" />
      Enviar email
    </a>
  </div>
</template>

<script setup lang="ts">
  import { profile } from '@/data/cv'

  withDefaults(
    defineProps<{
      layout?: 'row' | 'column'
      showProjects?: boolean
      showViewCv?: boolean
      showDownloadCv?: boolean
      showContact?: boolean
      showEmail?: boolean
    }>(),
    {
      layout: 'row',
      showProjects: false,
      showViewCv: false,
      showDownloadCv: false,
      showContact: false,
      showEmail: false,
    },
  )

  const emit = defineEmits<{ scroll: [id: string] }>()
</script>
