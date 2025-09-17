import { ref, onMounted, onUnmounted } from 'vue'

export function useUrgency() {
  const urgencyMessage = ref('Últimas 24h para garantir desconto de 50%')
  const remainingSpots = ref(12)
  
  let urgencyInterval = null
  let spotsInterval = null

  const startUrgencyTimer = () => {
    // Diminuir vagas disponíveis periodicamente
    spotsInterval = setInterval(() => {
      if (remainingSpots.value > 5) {
        remainingSpots.value--
      }
    }, 180000) // A cada 3 minutos
    
    // Alternar mensagens de urgência
    const messages = [
      'Últimas 24h para garantir desconto de 50%',
      '🔥 Promoção especial terminando em breve',
      'Apenas hoje: Material didático GRÁTIS',
      'Últimas vagas disponíveis neste mês'
    ]
    
    let messageIndex = 0
    urgencyInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length
      urgencyMessage.value = messages[messageIndex]
    }, 8000)
  }

  onMounted(() => {
    startUrgencyTimer()
  })

  onUnmounted(() => {
    if (urgencyInterval) {
      clearInterval(urgencyInterval)
    }
    if (spotsInterval) {
      clearInterval(spotsInterval)
    }
  })

  return {
    urgencyMessage,
    remainingSpots
  }
}
