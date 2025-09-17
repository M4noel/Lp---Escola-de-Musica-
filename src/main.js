import { createApp } from 'vue'
import App from './App.vue'

// Importar estilos globais
import './assets/styles/main.scss'

// Importar AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Criar a aplicação
const app = createApp(App)

app.mount('#app')

// Inicializar AOS após o DOM estar carregado
window.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
