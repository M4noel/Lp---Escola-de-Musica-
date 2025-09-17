<template>
  <div id="app">
    <!-- Header/Navigation -->
    <AppHeader 
      :scrolled="scrolled"
      :mobileMenuOpen="mobileMenuOpen"
      @toggle-mobile-menu="toggleMobileMenu"
      @close-mobile-menu="closeMobileMenu"
      @scroll-to-section="scrollToSection"
    />

    <!-- Hero Section -->
    <HeroSection 
      :urgencyMessage="urgencyMessage"
      @scroll-to-section="scrollToSection"
    />

    <!-- About Section -->
    <AboutSection :stats="stats" :animatedStats="animatedStats" />

    <!-- Courses Section -->
    <CoursesSection 
      :courses="courses" 
      @select-course="selectCourse"
    />

    <!-- Teachers Section -->
    <TeachersSection :teachers="teachers" />

    <!-- Testimonials Section -->
    <TestimonialsSection 
      :testimonials="testimonials"
      :currentTestimonial="currentTestimonial"
      @next-testimonial="nextTestimonial"
      @prev-testimonial="prevTestimonial"
      @set-testimonial="currentTestimonial = $event"
    />

    <!-- Contact Section -->
    <ContactSection 
      :form="form"
      :formErrors="formErrors"
      :formSubmitting="formSubmitting"
      :remainingSpots="remainingSpots"
      :courses="courses"
      @submit-form="submitForm"
      @update-form="updateForm"
    />

    <!-- Success Modal -->
    <SuccessModal 
      :show="showSuccessModal"
      @close="showSuccessModal = false"
    />

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import CoursesSection from './components/CoursesSection.vue'
import TeachersSection from './components/TeachersSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SuccessModal from './components/SuccessModal.vue'
import AppFooter from './components/AppFooter.vue'

// Importar composables
import { useScrollBehavior } from './composables/useScrollBehavior'
import { useStats } from './composables/useStats'
import { useCourses } from './composables/useCourses'
import { useTeachers } from './composables/useTeachers'
import { useTestimonials } from './composables/useTestimonials'
import { useContactForm } from './composables/useContactForm'
import { useUrgency } from './composables/useUrgency'

// Usar composables
const { scrolled, mobileMenuOpen, toggleMobileMenu, closeMobileMenu, scrollToSection } = useScrollBehavior()
const { stats, animatedStats } = useStats()
const { courses, selectCourse } = useCourses()
const { teachers } = useTeachers()
const { testimonials, currentTestimonial, nextTestimonial, prevTestimonial } = useTestimonials()
const { form, formErrors, formSubmitting, showSuccessModal, submitForm, updateForm } = useContactForm()
const { urgencyMessage, remainingSpots } = useUrgency()

// Lifecycle hooks
onMounted(() => {
  // Qualquer inicialização adicional se necessária
})

onUnmounted(() => {
  // Cleanup se necessário
})
</script>

<style scoped>
#app {
  font-family: var(--font-secondary);
  line-height: 1.6;
  color: var(--dark-color);
  overflow-x: hidden;
}
</style>
