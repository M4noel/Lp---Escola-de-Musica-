import { ref, reactive, onMounted } from 'vue'

export function useStats() {
  const stats = reactive([
    { value: 500, label: 'Alunos Formados', showPlus: true },
    { value: 15, label: 'Anos de Experiência', showPlus: false },
    { value: 95, label: '% de Aprovação', showPlus: false },
    { value: 20, label: 'Professores', showPlus: true }
  ])

  const animatedStats = ref([0, 0, 0, 0])

  const setupStatsAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats()
          observer.unobserve(entry.target)
        }
      })
    })
    
    const statsSection = document.querySelector('.about-stats')
    if (statsSection) {
      observer.observe(statsSection)
    }
  }

  const animateStats = () => {
    stats.forEach((stat, index) => {
      let currentValue = 0
      const increment = stat.value / 50
      const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= stat.value) {
          currentValue = stat.value
          clearInterval(timer)
        }
        animatedStats.value[index] = Math.floor(currentValue)
      }, 40)
    })
  }

  onMounted(() => {
    // Aguardar um pouco para garantir que o DOM esteja pronto
    setTimeout(setupStatsAnimation, 500)
  })

  return {
    stats,
    animatedStats
  }
}
