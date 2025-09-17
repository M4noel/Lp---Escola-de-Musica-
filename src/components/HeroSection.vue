<template>
  <section id="inicio" class="hero">
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <div class="floating-notes">
        <i class="fas fa-music note-1" data-aos="fade-up" data-aos-delay="100"></i>
        <i class="fas fa-music note-2" data-aos="fade-up" data-aos-delay="300"></i>
        <i class="fas fa-music note-3" data-aos="fade-up" data-aos-delay="500"></i>
        <i class="fas fa-music note-4" data-aos="fade-up" data-aos-delay="700"></i>
      </div>
    </div>
    <div class="hero-container">
      <div class="hero-content" data-aos="fade-up" data-aos-duration="1000">
        <h1 class="hero-title">
          <span class="highlight">Desperte</span> Seu Talento Musical
        </h1>
        <p class="hero-subtitle">
          Transforme sua paixão pela música em habilidade real com nossos professores qualificados e método exclusivo
        </p>
        <div class="hero-features">
          <div class="feature" data-aos="fade-right" data-aos-delay="200">
            <i class="fas fa-star"></i>
            <span>+500 Alunos Satisfeitos</span>
          </div>
          <div class="feature" data-aos="fade-right" data-aos-delay="400">
            <i class="fas fa-award"></i>
            <span>Professores Certificados</span>
          </div>
          <div class="feature" data-aos="fade-right" data-aos-delay="600">
            <i class="fas fa-clock"></i>
            <span>Horários Flexíveis</span>
          </div>
        </div>
        <div class="hero-cta" data-aos="fade-up" data-aos-delay="800">
          <button class="btn-primary pulse" @click="$emit('scroll-to-section', '#contato')">
            <i class="fas fa-play"></i>
            Comece Agora - Aula Gratuita
          </button>
          <div class="urgency-text">
            <i class="fas fa-fire"></i>
            <span>{{ urgencyMessage }}</span>
          </div>
        </div>
      </div>
      <div class="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
        <div class="image-container">
          <div class="music-wave">
            <div 
              class="wave-line" 
              v-for="n in 20" 
              :key="n" 
              :style="{ animationDelay: n * 0.1 + 's' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props
defineProps({
  urgencyMessage: {
    type: String,
    default: 'Últimas 24h para garantir desconto de 50%'
  }
})

// Emits
defineEmits(['scroll-to-section'])
</script>

<style scoped>
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="music-pattern" patternUnits="userSpaceOnUse" width="100" height="100"><path d="M20,20 Q40,10 60,20 T100,20" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/></pattern></defs><rect width="1000" height="1000" fill="url(%23music-pattern)"/></svg>');
  opacity: 0.3;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.1) 100%);
}

.floating-notes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-notes i {
  position: absolute;
  color: rgba(255, 255, 255, 0.2);
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

.note-1 { top: 20%; left: 10%; animation-delay: 0s; }
.note-2 { top: 60%; left: 85%; animation-delay: 2s; }
.note-3 { top: 30%; left: 70%; animation-delay: 4s; }
.note-4 { top: 80%; left: 20%; animation-delay: 1s; }

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
    opacity: 0.2; 
  }
  50% { 
    transform: translateY(-30px) rotate(10deg); 
    opacity: 0.4; 
  }
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  color: var(--white);
}

.hero-title {
  font-family: var(--font-primary);
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.highlight {
  background: linear-gradient(45deg, var(--accent-color), #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.hero-features .feature {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.hero-features .feature:hover {
  transform: translateX(10px);
  background: rgba(255, 255, 255, 0.2);
}

.hero-features .feature i {
  color: var(--accent-color);
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.btn-primary {
  background: var(--white);
  color: var(--primary-color);
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-medium);
  text-decoration: none;
  font-family: var(--font-primary);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-heavy);
}

.btn-primary.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.urgency-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 212, 61, 0.2);
  color: var(--accent-color);
  padding: 0.7rem 1.2rem;
  border-radius: 25px;
  font-weight: 600;
  border: 1px solid var(--accent-color);
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { box-shadow: 0 0 10px rgba(255, 212, 61, 0.5); }
  to { box-shadow: 0 0 20px rgba(255, 212, 61, 0.8); }
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.image-container {
  position: relative;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.music-wave {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}

.wave-line {
  width: 4px;
  background: linear-gradient(to top, var(--accent-color), var(--white));
  border-radius: 2px;
  animation: wave 1.5s ease-in-out infinite;
  opacity: 0.8;
}

.wave-line:nth-child(odd) { height: 30px; }
.wave-line:nth-child(even) { height: 20px; }
.wave-line:nth-child(3n) { height: 40px; }
.wave-line:nth-child(5n) { height: 25px; }

@keyframes wave {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-features {
    justify-content: center;
  }

  .image-container {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }
}
</style>
