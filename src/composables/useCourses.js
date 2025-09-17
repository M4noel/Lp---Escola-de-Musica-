import { reactive } from 'vue'

export function useCourses() {
  const courses = reactive([
    {
      name: 'Violão Completo',
      description: 'Do básico ao avançado, aprenda violão com método exclusivo',
      icon: 'fas fa-guitar',
      level: 'Todos os níveis',
      features: ['Aulas individuais', 'Material incluso', 'Suporte online'],
      price: '149',
      oldPrice: '299'
    },
    {
      name: 'Piano & Teclado',
      description: 'Técnicas clássicas e populares para piano e teclado',
      icon: 'fas fa-piano',
      level: 'Iniciante a Avançado',
      features: ['Teoria musical', 'Repertório variado', 'Gravações'],
      price: '169',
      oldPrice: '329'
    },
    {
      name: 'Bateria Moderna',
      description: 'Ritmos modernos e técnicas avançadas de bateria',
      icon: 'fas fa-drum',
      level: 'Intermediário',
      features: ['Studio equipado', 'Gravação digital', 'Performance'],
      price: '189',
      oldPrice: '379'
    },
    {
      name: 'Canto & Vocal',
      description: 'Desenvolva sua voz com técnicas profissionais',
      icon: 'fas fa-microphone-alt',
      level: 'Todos os níveis',
      features: ['Respiração', 'Interpretação', 'Recording'],
      price: '139',
      oldPrice: '279'
    },
    {
      name: 'Baixo Elétrico',
      description: 'Base rítmica e harmônica para qualquer estilo',
      icon: 'fas fa-guitar',
      level: 'Iniciante',
      features: ['Técnica finger', 'Slap e pop', 'Groove'],
      price: '159',
      oldPrice: '319'
    },
    {
      name: 'Produção Musical',
      description: 'Crie suas próprias músicas e beats profissionais',
      icon: 'fas fa-sliders-h',
      level: 'Intermediário',
      features: ['DAW profissional', 'Mixagem', 'Masterização'],
      price: '199',
      oldPrice: '399'
    }
  ])

  const selectCourse = (courseName) => {
    // Emitir evento para o componente pai ou gerenciar localmente
    const event = new CustomEvent('course-selected', { detail: courseName })
    window.dispatchEvent(event)
    
    // Scroll para o formulário
    const element = document.querySelector('#contato')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return {
    courses,
    selectCourse
  }
}
