<template>
  <section id="cursos" class="courses">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>Nossos <span class="highlight">Cursos</span></h2>
        <p>Encontre o curso perfeito para seu estilo musical</p>
      </div>
      <div class="courses-grid">
        <div 
          class="course-card" 
          v-for="(course, index) in courses" 
          :key="index"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 100"
        >
          <div class="course-image">
            <i :class="course.icon"></i>
            <div class="course-overlay">
              <span class="course-level">{{ course.level }}</span>
            </div>
          </div>
          <div class="course-content">
            <h3>{{ course.name }}</h3>
            <p>{{ course.description }}</p>
            <div class="course-features">
              <div class="feature" v-for="feature in course.features" :key="feature">
                <i class="fas fa-check"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="course-footer">
              <div class="course-price">
                <span class="old-price">R$ {{ course.oldPrice }}</span>
                <span class="new-price">R$ {{ course.price }}</span>
              </div>
              <button class="btn-course" @click="$emit('select-course', course.name)">
                Matricular-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props
defineProps({
  courses: {
    type: Array,
    required: true
  }
})

// Emits
defineEmits(['select-course'])
</script>

<style scoped>
.courses {
  background: var(--white);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.course-card {
  background: var(--white);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: var(--shadow-light);
  transition: all 0.3s ease;
  border: 1px solid var(--gray-light);
}

.course-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-heavy);
}

.course-image {
  position: relative;
  height: 180px;
  background: var(--gradient-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.course-image i {
  font-size: 4rem;
  color: var(--white);
  opacity: 0.9;
  transition: all 0.3s ease;
}

.course-card:hover .course-image i {
  transform: scale(1.2) rotate(5deg);
}

.course-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--dark-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.course-content {
  padding: 2rem;
}

.course-content h3 {
  font-family: var(--font-primary);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--dark-color);
}

.course-content p {
  color: var(--gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.course-features {
  margin-bottom: 2rem;
}

.course-features .feature {
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
}

.course-features .feature i {
  color: var(--secondary-color);
  margin-right: 0.8rem;
  font-size: 0.9rem;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-price {
  display: flex;
  flex-direction: column;
}

.old-price {
  text-decoration: line-through;
  color: var(--gray);
  font-size: 0.9rem;
}

.new-price {
  font-family: var(--font-primary);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.btn-course {
  background: var(--gradient-primary);
  color: var(--white);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-course:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
