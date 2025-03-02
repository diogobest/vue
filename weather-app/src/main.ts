import { createI18n } from 'vue-i18n'
import { locales } from './locales/en.js'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'pt-BR',
  messages:  { ...locales }
})

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

