<template>
  <section id="professores" class="teachers">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Nossos <span class="highlight">Professores</span></h2>
        <p>Profissionais qualificados e apaixonados pela música</p>
      </div>
      <div class="teachers-grid">
        <div 
          class="teacher-card" 
          v-for="(teacher, index) in teachers" 
          :key="index"
          data-aos="zoom-in" 
          :data-aos-delay="index * 200"
        >
          <div class="teacher-image">
            <div class="teacher-photo">
              <i :class="teacher.icon"></i>
            </div>
          </div>
          <div class="teacher-info">
            <h3>{{ teacher.name }}</h3>
            <span class="teacher-specialty">{{ teacher.specialty }}</span>
            <p>{{ teacher.description }}</p>
            <div class="teacher-experience">
              <i class="fas fa-star"></i>
              <span>{{ teacher.experience }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  teachers: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.teachers {
  background: var(--light-color);
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.teacher-card {
  background: var(--white);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  text-align: center;
}

.teacher-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-heavy);
}

.teacher-image {
  height: 250px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.teacher-photo {
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--white);
}

.teacher-photo i {
  font-size: 3rem;
  color: var(--white);
}

.teacher-info {
  padding: 2rem;
}

.teacher-info h3 {
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
}

.teacher-specialty {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
}

.teacher-info p {
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.teacher-experience {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--secondary-color);
  font-weight: 600;
}
</style>
