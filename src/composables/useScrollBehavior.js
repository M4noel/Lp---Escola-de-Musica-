import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollBehavior() {
  const scrolled = ref(false)
  const mobileMenuOpen = ref(false)

  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
  }

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    closeMobileMenu()
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrolled,
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    scrollToSection
  }
}
