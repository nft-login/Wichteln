import { createApp } from 'vue'
import Particles from 'particles.vue3'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/dist/darkly/bootstrap.min.css';

import App from './App.vue'

const app = createApp(App)
app.use(Particles)
app.mount('#app')
