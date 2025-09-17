<template>
  <section id="contato" class="contact">
    <div class="container">
      <div class="contact-content">
        <div class="contact-info" data-aos="fade-right">
          <h2>Comece sua <span class="highlight">jornada musical</span> hoje!</h2>
          <p>Preencha o formulário e ganhe sua primeira aula gratuita</p>
          
          <div class="contact-benefits">
            <div class="benefit">
              <i class="fas fa-gift"></i>
              <span>Primeira aula gratuita</span>
            </div>
            <div class="benefit">
              <i class="fas fa-calendar-check"></i>
              <span>Sem compromisso</span>
            </div>
            <div class="benefit">
              <i class="fas fa-headphones"></i>
              <span>Material incluso</span>
            </div>
          </div>

          <div class="urgency-banner">
            <i class="fas fa-fire"></i>
            <div>
              <strong>Oferta Limitada!</strong>
              <span>Restam apenas {{ remainingSpots }} vagas este mês</span>
            </div>
          </div>
        </div>

        <div class="contact-form-container" data-aos="fade-left">
          <form class="contact-form" @submit.prevent="$emit('submit-form')">
            <h3>Agende sua Aula Gratuita</h3>
            
            <div class="form-group">
              <label for="name">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                :value="form.name"
                @input="$emit('update-form', 'name', $event.target.value)"
                required 
                :class="{ error: formErrors.name }"
              >
              <span v-if="formErrors.name" class="error-text">{{ formErrors.name }}</span>
            </div>

            <div class="form-group">
              <label for="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                :value="form.email"
                @input="$emit('update-form', 'email', $event.target.value)"
                required
                :class="{ error: formErrors.email }"
              >
              <span v-if="formErrors.email" class="error-text">{{ formErrors.email }}</span>
            </div>

            <div class="form-group">
              <label for="phone">WhatsApp</label>
              <input 
                type="tel" 
                id="phone" 
                :value="form.phone"
                @input="$emit('update-form', 'phone', $event.target.value)"
                required
                :class="{ error: formErrors.phone }"
              >
              <span v-if="formErrors.phone" class="error-text">{{ formErrors.phone }}</span>
            </div>

            <div class="form-group">
              <label for="course">Curso de Interesse</label>
              <select 
                id="course" 
                :value="form.course"
                @change="$emit('update-form', 'course', $event.target.value)"
                required
              >
                <option value="">Selecione um curso</option>
                <option v-for="course in courses" :key="course.name" :value="course.name">
                  {{ course.name }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="experience">Nível de Experiência</label>
              <select 
                id="experience" 
                :value="form.experience"
                @change="$emit('update-form', 'experience', $event.target.value)"
                required
              >
                <option value="">Selecione seu nível</option>
                <option value="iniciante">Iniciante - Nunca toquei</option>
                <option value="basico">Básico - Conheço o básico</option>
                <option value="intermediario">Intermediário - Já toco algumas músicas</option>
                <option value="avancado">Avançado - Quero me aperfeiçoar</option>
              </select>
            </div>

            <button type="submit" class="btn-submit" :disabled="formSubmitting">
              <span v-if="!formSubmitting">
                <i class="fas fa-calendar-plus"></i>
                Agendar Aula Gratuita
              </span>
              <span v-else>
                <i class="fas fa-spinner fa-spin"></i>
                Enviando...
              </span>
            </button>

            <div class="form-security">
              <i class="fas fa-lock"></i>
              <span>Seus dados estão seguros conosco</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  form: {
    type: Object,
    required: true
  },
  formErrors: {
    type: Object,
    required: true
  },
  formSubmitting: {
    type: Boolean,
    required: true
  },
  remainingSpots: {
    type: Number,
    required: true
  },
  courses: {
    type: Array,
    required: true
  }
})

defineEmits(['submit-form', 'update-form'])
</script>

<style scoped>
.contact {
  background: var(--gradient-hero);
  color: var(--white);
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="contact-pattern" patternUnits="userSpaceOnUse" width="50" height="50"><circle cx="25" cy="25" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="1000" height="1000" fill="url(%23contact-pattern)"/></svg>');
  opacity: 0.5;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.contact-info h2 {
  font-family: var(--font-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.contact-info p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.contact-benefits {
  margin-bottom: 2.5rem;
}

.benefit {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.benefit i {
  color: var(--accent-color);
  margin-right: 1rem;
  font-size: 1.3rem;
}

.urgency-banner {
  background: rgba(255, 212, 61, 0.2);
  border: 2px solid var(--accent-color);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: urgencyPulse 2s ease-in-out infinite;
}

@keyframes urgencyPulse {
  0%, 100% { 
    transform: scale(1); 
    box-shadow: 0 0 0 0 rgba(255, 212, 61, 0.7); 
  }
  50% { 
    transform: scale(1.02); 
    box-shadow: 0 0 20px 5px rgba(255, 212, 61, 0.3); 
  }
}

.urgency-banner i {
  color: var(--accent-color);
  font-size: 1.5rem;
}

.urgency-banner strong {
  display: block;
  margin-bottom: 0.3rem;
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-form h3 {
  font-family: var(--font-primary);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--white);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--white);
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--accent-color);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(255, 212, 61, 0.3);
}

.form-group input.error,
.form-group select.error {
  border-color: #ff4757;
  background: rgba(255, 71, 87, 0.1);
}

.error-text {
  color: #ff4757;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
}

.btn-submit {
  width: 100%;
  background: var(--white);
  color: var(--primary-color);
  border: none;
  padding: 1.3rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-primary);
  margin-bottom: 1rem;
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-heavy);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-security {
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.form-security i {
  color: var(--accent-color);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-form-container {
    padding: 2rem;
  }
  
  .contact-info h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .contact-info h2 {
    font-size: 1.8rem;
  }
}
</style>
