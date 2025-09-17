import { ref, reactive, onMounted } from 'vue'

export function useContactForm() {
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: ''
  })

  const formErrors = reactive({})
  const formSubmitting = ref(false)
  const showSuccessModal = ref(false)

  const updateForm = (field, value) => {
    form[field] = value
    // Limpar erro quando o usuário começar a digitar
    if (formErrors[field]) {
      delete formErrors[field]
    }
  }

  const validateForm = () => {
    // Limpar erros anteriores
    Object.keys(formErrors).forEach(key => delete formErrors[key])
    
    if (!form.name.trim()) {
      formErrors.name = 'Nome é obrigatório'
    } else if (form.name.trim().length < 2) {
      formErrors.name = 'Nome deve ter pelo menos 2 caracteres'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      formErrors.email = 'E-mail é obrigatório'
    } else if (!emailRegex.test(form.email)) {
      formErrors.email = 'E-mail inválido'
    }
    
    const phoneRegex = /^[\d\s\(\)\-\+]{10,}$/
    if (!form.phone.trim()) {
      formErrors.phone = 'WhatsApp é obrigatório'
    } else if (!phoneRegex.test(form.phone.replace(/\D/g, ''))) {
      formErrors.phone = 'Número de WhatsApp inválido'
    }
    
    if (!form.course) {
      formErrors.course = 'Selecione um curso'
    }
    
    if (!form.experience) {
      formErrors.experience = 'Selecione seu nível'
    }
    
    return Object.keys(formErrors).length === 0
  }

  const simulateFormSubmission = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Dados do formulário:', {
          ...form,
          timestamp: new Date().toISOString(),
          source: 'landing-page-harmony'
        })
        resolve()
      }, 2000)
    })
  }

  const trackConversion = () => {
    // Integração com ferramentas de tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
        'value': 149.0,
        'currency': 'BRL'
      })
    }
    
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: form.course,
        content_category: 'Música',
        value: 149.00,
        currency: 'BRL'
      })
    }
    
    console.log('Conversão rastreada:', form.course)
  }

  const submitForm = async () => {
    if (!validateForm()) {
      // Scroll para o primeiro erro
      const firstErrorField = Object.keys(formErrors)[0]
      const errorElement = document.querySelector(`#${firstErrorField}`)
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
        errorElement.focus()
      }
      return
    }
    
    formSubmitting.value = true
    
    try {
      // Simular envio (em produção, integrar com backend)
      await simulateFormSubmission()
      
      // Resetar formulário
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
      
      // Mostrar modal de sucesso
      showSuccessModal.value = true
      
      // Tracking de conversão
      trackConversion()
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar formulário. Tente novamente.')
    } finally {
      formSubmitting.value = false
    }
  }

  // Escutar evento de seleção de curso
  onMounted(() => {
    window.addEventListener('course-selected', (event) => {
      form.course = event.detail
      // Adicionar pequena animação de feedback
      setTimeout(() => {
        const courseSelect = document.querySelector('#course')
        if (courseSelect) {
          courseSelect.style.animation = 'fieldFocus 0.5s ease-in-out'
          setTimeout(() => {
            courseSelect.style.animation = ''
          }, 500)
        }
      }, 1000)
    })
  })

  return {
    form,
    formErrors,
    formSubmitting,
    showSuccessModal,
    updateForm,
    submitForm
  }
}
