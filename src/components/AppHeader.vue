<template>
  <header class="header" :class="{ 'scrolled': scrolled }">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <i class="fas fa-music"></i>
          <span>Harmony</span>
        </div>
        <ul class="nav-menu" :class="{ 'active': mobileMenuOpen }">
          <li><a href="#inicio" @click="$emit('close-mobile-menu')">Início</a></li>
          <li><a href="#sobre" @click="$emit('close-mobile-menu')">Sobre</a></li>
          <li><a href="#cursos" @click="$emit('close-mobile-menu')">Cursos</a></li>
          <li><a href="#professores" @click="$emit('close-mobile-menu')">Professores</a></li>
          <li><a href="#depoimentos" @click="$emit('close-mobile-menu')">Depoimentos</a></li>
          <li><a href="#contato" class="cta-nav" @click="$emit('close-mobile-menu')">Matrícula</a></li>
        </ul>
        <div class="hamburger" :class="{ 'active': mobileMenuOpen }" @click="$emit('toggle-mobile-menu')">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

// Props
defineProps({
  scrolled: {
    type: Boolean,
    default: false
  },
  mobileMenuOpen: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['toggle-mobile-menu', 'close-mobile-menu', 'scroll-to-section'])

// Configurar smooth scroll para links
onMounted(() => {
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-light);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  display: flex;
  align-items: center;
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-logo i {
  margin-right: 0.5rem;
  font-size: 1.8rem;
  animation: musicNote 2s ease-in-out infinite;
}

@keyframes musicNote {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(5deg); }
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0 1rem;
}

.nav-menu a {
  text-decoration: none;
  color: var(--dark-color);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu a:hover {
  color: var(--primary-color);
}

.nav-menu a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background: var(--gradient-primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-menu a:hover::after {
  width: 100%;
}

.cta-nav {
  background: var(--gradient-primary) !important;
  color: var(--white) !important;
  padding: 0.7rem 1.5rem !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.cta-nav:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background: var(--primary-color);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.98);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: var(--shadow-medium);
    backdrop-filter: blur(10px);
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    margin: 1rem 0;
  }
}
</style>
