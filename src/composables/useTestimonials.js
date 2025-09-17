import { ref, reactive, onMounted, onUnmounted } from 'vue'

export function useTestimonials() {
  const testimonials = reactive([
    {
      name: 'Maria Oliveira',
      course: 'Violão Completo',
      text: 'Em apenas 3 meses consegui tocar minhas primeiras músicas. O método é incrível e os professores são muito pacientes. Recomendo demais!'
    },
    {
      name: 'João Pedro',
      course: 'Piano & Teclado',
      text: 'Sempre sonhei em tocar piano e aqui realizei esse sonho. As aulas são dinâmicas e aprendi muito rápido. Já estou tocando clássicos!'
    },
    {
      name: 'Carla Mendes',
      course: 'Canto & Vocal',
      text: 'Minha voz mudou completamente! Aprendi técnicas que nem imaginava que existiam. Agora me sinto confiante para cantar em qualquer lugar.'
    },
    {
      name: 'Pedro Santos',
      course: 'Bateria Moderna',
      text: 'O ambiente é profissional e os equipamentos são de primeira. Em 6 meses já estava tocando com minha banda. Experiência transformadora!'
    },
    {
      name: 'Fernanda Lima',
      course: 'Baixo Elétrico',
      text: 'Como iniciante, tinha muito medo de não conseguir. Mas os professores me deram toda confiança e hoje toco em uma banda cover!'
    }
  ])

  const currentTestimonial = ref(0)
  let carouselInterval = null

  const startTestimonialCarousel = () => {
    carouselInterval = setInterval(() => {
      nextTestimonial()
    }, 5000)
  }

  const nextTestimonial = () => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
  }

  const prevTestimonial = () => {
    currentTestimonial.value = currentTestimonial.value === 0 
      ? testimonials.length - 1 
      : currentTestimonial.value - 1
  }

  onMounted(() => {
    startTestimonialCarousel()
  })

  onUnmounted(() => {
    if (carouselInterval) {
      clearInterval(carouselInterval)
    }
  })

  return {
    testimonials,
    currentTestimonial,
    nextTestimonial,
    prevTestimonial
  }
}
