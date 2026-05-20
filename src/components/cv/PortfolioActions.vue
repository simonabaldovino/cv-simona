<template>
  <div class="port-actions" :class="`port-actions--${layout}`">
    <button
      v-if="showProjects"
      type="button"
      class="port-btn port-btn--primary"
      @click="emit('scroll', 'projects')"
    >
      <v-icon icon="mdi-folder-outline" size="small" />
      {{ content.ui.viewProjects }}
    </button>

    <a
      v-if="showViewCv"
      class="port-btn port-btn--outline"
      :href="profile.cvPdf"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon icon="mdi-file-pdf-box" size="small" />
      {{ content.ui.viewCv }}
    </a>

    <a
      v-if="showDownloadCv"
      class="port-btn port-btn--outline"
      :href="profile.cvPdf"
      :download="profile.cvFileName"
    >
      <v-icon icon="mdi-download" size="small" />
      {{ content.ui.downloadCv }}
    </a>

    <button
      v-if="showContact"
      type="button"
      class="port-btn port-btn--outline"
      @click="emit('scroll', 'contact')"
    >
      <v-icon icon="mdi-email-outline" size="small" />
      {{ content.ui.contact }}
    </button>

    <a
      v-if="showEmail"
      class="port-btn port-btn--primary"
      :href="gmailComposeHref"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon icon="mdi-gmail" size="small" />
      {{ content.ui.sendEmail }}
    </a>
  </div>
</template>

<script setup lang="ts">
  import { useLocale } from '@/composables/useLocale'

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
  const { content, profile, gmailComposeHref } = useLocale()
</script>
