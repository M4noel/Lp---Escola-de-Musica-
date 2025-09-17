import { createApp } from 'vue'
import App from './App.vue'

// Importar estilos globais
import './assets/styles/main.scss'

// Inicializar AOS quando a aplicação estiver montada
const app = createApp(App)

app.mount('#app')

// Inicializar AOS após o DOM estar carregado
window.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }
})
