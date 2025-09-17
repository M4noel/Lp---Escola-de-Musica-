<template>
  <section id="depoimentos" class="testimonials">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>O que nossos <span class="highlight">alunos</span> falam</h2>
        <p>Histórias reais de transformação musical</p>
      </div>
      <div class="testimonials-slider">
        <div 
          class="testimonial-card active" 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          v-show="currentTestimonial === index" 
          data-aos="fade-up"
        >
          <div class="testimonial-content">
            <div class="stars">
              <i class="fas fa-star" v-for="n in 5" :key="n"></i>
            </div>
            <p>"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <span>{{ testimonial.course }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-nav">
          <button @click="$emit('prev-testimonial')" class="nav-btn">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div class="testimonial-dots">
            <span 
              v-for="(testimonial, index) in testimonials" 
              :key="index" 
              :class="{ active: currentTestimonial === index }"
              @click="$emit('set-testimonial', index)"
            ></span>
          </div>
          <button @click="$emit('next-testimonial')" class="nav-btn">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  testimonials: {
    type: Array,
    required: true
  },
  currentTestimonial: {
    type: Number,
    required: true
  }
})

defineEmits(['next-testimonial', 'prev-testimonial', 'set-testimonial'])
</script>

<style scoped>
.testimonials {
  background: var(--white);
  position: relative;
}

.testimonials-slider {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-card {
  background: var(--light-color);
  border-radius: 25px;
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow-light);
  position: relative;
}

.stars {
  margin-bottom: 2rem;
}

.stars i {
  color: var(--accent-color);
  font-size: 1.3rem;
  margin: 0 0.2rem;
}

.testimonial-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--dark-color);
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author h4 {
  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark-color);
  margin-bottom: 0.3rem;
}

.testimonial-author span {
  color: var(--primary-color);
  font-weight: 500;
}

.testimonial-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
}

.nav-btn {
  background: var(--gradient-primary);
  color: var(--white);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-medium);
}

.testimonial-dots {
  display: flex;
  gap: 1rem;
}

.testimonial-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gray-light);
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonial-dots span.active {
  background: var(--primary-color);
  transform: scale(1.2);
}
</style>
