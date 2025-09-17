<template>
  <section id="sobre" class="about">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Por que escolher a <span class="highlight">Harmony</span>?</h2>
        <p>Somos referência em educação musical com metodologia exclusiva</p>
      </div>
      <div class="about-grid">
        <div class="about-content" data-aos="fade-right">
          <div class="about-item">
            <div class="about-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="about-text">
              <h3>Método Exclusivo</h3>
              <p>Nossa metodologia acelera seu aprendizado em 70% comparado ao método tradicional</p>
            </div>
          </div>
          <div class="about-item">
            <div class="about-icon">
              <i class="fas fa-users"></i>
            </div>
            <div class="about-text">
              <h3>Aulas Personalizadas</h3>
              <p>Cada aluno tem um plano individual baseado em seus objetivos e ritmo de aprendizado</p>
            </div>
          </div>
          <div class="about-item">
            <div class="about-icon">
              <i class="fas fa-trophy"></i>
            </div>
            <div class="about-text">
              <h3>Resultados Comprovados</h3>
              <p>95% dos nossos alunos conseguem tocar sua primeira música em apenas 30 dias</p>
            </div>
          </div>
        </div>
        <div class="about-stats" data-aos="fade-left">
          <div class="stat-item" v-for="(stat, index) in stats" :key="index">
            <div class="stat-number">
              <span>{{ animatedStats[index] }}</span>
              <span class="stat-plus" v-if="stat.showPlus">+</span>
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props
defineProps({
  stats: {
    type: Array,
    required: true
  },
  animatedStats: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.about {
  background: var(--light-color);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.about-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 2rem;
  background: var(--white);
  border-radius: 20px;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
}

.about-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.about-icon {
  background: var(--gradient-primary);
  color: var(--white);
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.about-text h3 {
  font-family: var(--font-primary);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2.5rem 2rem;
  background: var(--white);
  border-radius: 20px;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-primary);
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.stat-number {
  font-family: var(--font-primary);
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
}

.stat-plus {
  font-size: 2rem;
  margin-left: 0.2rem;
}

.stat-label {
  font-weight: 600;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
  }
  
  .about-item {
    padding: 1.5rem;
  }
  
  .stat-item {
    padding: 2rem 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
