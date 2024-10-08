import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Router
import router from './router'

// Components
import App from './App.vue'

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Create Vue app instance
const app = createApp(App)

// Use Vuetify and Router
app.use(vuetify)
app.use(router)

// Mount the app
app.mount('#app')
