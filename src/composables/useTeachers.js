import { reactive } from 'vue'

export function useTeachers() {
  const teachers = reactive([
    {
      name: 'Carlos Silva',
      specialty: 'Violão & Guitarra',
      description: 'Especialista em música popular brasileira com 12 anos de experiência.',
      experience: '12 anos de experiência',
      icon: 'fas fa-user-graduate'
    },
    {
      name: 'Ana Santos',
      specialty: 'Piano & Teclado',
      description: 'Formada em conservatório, especialista em música clássica e popular.',
      experience: '15 anos de experiência',
      icon: 'fas fa-user-graduate'
    },
    {
      name: 'Ricardo Lima',
      specialty: 'Bateria',
      description: 'Baterista profissional com passagem por grandes bandas nacionais.',
      experience: '10 anos de experiência',
      icon: 'fas fa-user-graduate'
    },
    {
      name: 'Juliana Costa',
      specialty: 'Canto',
      description: 'Cantora lírica e popular, professora de técnica vocal há 8 anos.',
      experience: '8 anos de experiência',
      icon: 'fas fa-user-graduate'
    }
  ])

  return {
    teachers
  }
}
