<template>
  <div class="modal-overlay" v-show="show" @click="$emit('close')">
    <div class="modal" @click.stop>
      <div class="modal-content">
        <div class="modal-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3>Parabéns!</h3>
        <p>Sua aula gratuita foi agendada com sucesso!</p>
        <p>Entraremos em contato em até 2 horas via WhatsApp.</p>
        <button @click="$emit('close')" class="btn-primary">
          Perfeito!
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.modal {
  background: var(--white);
  border-radius: 25px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(-50px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-content {
  padding: 3rem;
  text-align: center;
}

.modal-icon {
  margin-bottom: 1.5rem;
}

.modal-icon i {
  font-size: 4rem;
  color: var(--secondary-color);
  animation: successBounce 0.6s ease;
}

@keyframes successBounce {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.modal-content h3 {
  font-family: var(--font-primary);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
}

.modal-content p {
  color: var(--gray);
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
