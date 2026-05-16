/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import '../styles/layers.css'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'system',
    themes: {
      light: {
        colors: {
          primary: '#6C5CE7',
          secondary: '#4F6BED',
          background: '#FAFAFE',
          surface: '#FFFFFF',
        },
      },
      dark: {
        colors: {
          primary: '#A29BFE',
          secondary: '#74B9FF',
          background: '#0f0f1a',
          surface: '#1a1a2e',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1145,
      xl: 1545,
      xxl: 2138,
    },
  },
})
