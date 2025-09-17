# 🎵 Landing Page Harmony - Vue.js

Uma moderna landing page para a Escola de Música Harmony, construída com Vue.js 3, Vite e tecnologias modernas.

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## ✨ Características

- **Vue.js 3** com Composition API
- **Vite** para desenvolvimento e build rápidos
- **Componentes modulares** e reutilizáveis
- **SCSS** para estilização avançada
- **Design responsivo** para todos os dispositivos
- **Animações AOS** (Animate On Scroll)
- **Composables** para lógica reutilizável
- **Otimizações de performance**
- **SEO otimizado**

## 🚀 Tecnologias Utilizadas

### Core
- Vue.js 3.4+
- Vite 5.0+
- JavaScript ES6+

### Estilização
- SCSS/Sass
- CSS Variables
- Flexbox & CSS Grid
- Mobile-first design

### Bibliotecas
- AOS (Animate On Scroll)
- Font Awesome 6
- Google Fonts (Poppins & Inter)

### Ferramentas de Desenvolvimento
- Vite Dev Server
- Hot Module Replacement
- Source Maps
- Build otimizado

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd lp-harmony-vue
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview do build de produção |

## 📂 Estrutura do Projeto

```
lp-harmony-vue/
├── public/                     # Arquivos estáticos
├── src/
│   ├── assets/
│   │   └── styles/            # Estilos globais SCSS
│   │       ├── main.scss      # Arquivo principal de estilos
│   │       └── variables.scss # Variáveis CSS
│   ├── components/            # Componentes Vue
│   │   ├── AppHeader.vue      # Header/Navegação
│   │   ├── HeroSection.vue    # Seção hero
│   │   ├── AboutSection.vue   # Seção sobre
│   │   ├── CoursesSection.vue # Seção cursos
│   │   ├── TeachersSection.vue # Seção professores
│   │   ├── TestimonialsSection.vue # Depoimentos
│   │   ├── ContactSection.vue # Formulário de contato
│   │   ├── SuccessModal.vue   # Modal de sucesso
│   │   └── AppFooter.vue      # Footer
│   ├── composables/           # Composables (lógica reutilizável)
│   │   ├── useScrollBehavior.js
│   │   ├── useStats.js
│   │   ├── useCourses.js
│   │   ├── useTeachers.js
│   │   ├── useTestimonials.js
│   │   ├── useContactForm.js
│   │   └── useUrgency.js
│   ├── App.vue               # Componente raiz
│   └── main.js              # Ponto de entrada
├── index.html               # Template HTML
├── package.json
├── vite.config.js          # Configuração do Vite
└── README.md
```

## 🎨 Funcionalidades

### Seções da Landing Page
- **Header** - Navegação responsiva com menu mobile
- **Hero** - Chamada principal com animações
- **Sobre** - Diferenciais e estatísticas animadas
- **Cursos** - Grid de cursos com preços
- **Professores** - Apresentação da equipe
- **Depoimentos** - Carousel de depoimentos
- **Contato** - Formulário de lead com validação
- **Footer** - Links e informações de contato

### Recursos Técnicos
- ✅ Scroll suave entre seções
- ✅ Animações de entrada (AOS)
- ✅ Estatísticas animadas
- ✅ Carousel automático de depoimentos
- ✅ Formulário com validação
- ✅ Sistema de urgência dinâmica
- ✅ Responsive design completo
- ✅ Otimizações de performance
- ✅ SEO meta tags

## 🎯 Composables

### useScrollBehavior
- Controla scroll da página
- Menu mobile
- Navegação suave

### useStats
- Animação de estatísticas
- Intersection Observer

### useCourses
- Gestão de cursos
- Seleção de curso

### useContactForm
- Validação de formulário
- Envio de dados
- Estados de loading

### useUrgency
- Mensagens dinâmicas
- Contador de vagas

## 🚀 Build e Deploy

### Build para Produção
```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Deploy
O projeto pode ser deployado em qualquer serviço de hospedagem estática:
- **Vercel** - Recomendado para projetos Vue.js
- **Netlify** - Deploy automático com Git
- **GitHub Pages** - Hospedagem gratuita
- **AWS S3 + CloudFront**
- **Servidor tradicional**

## 🔧 Customização

### Cores e Temas
Edite as variáveis CSS em `src/assets/styles/variables.scss`:

```scss
:root {
  --primary-color: #ff6b35;
  --secondary-color: #4ecdc4;
  --accent-color: #ffd93d;
  // ... outras variáveis
}
```

### Conteúdo
- **Cursos**: Edite o array em `src/composables/useCourses.js`
- **Professores**: Edite o array em `src/composables/useTeachers.js`  
- **Depoimentos**: Edite o array em `src/composables/useTestimonials.js`

### Integração com Backend
Para conectar com um backend:

1. **Formulário de Contato**: Edite `simulateFormSubmission()` em `src/composables/useContactForm.js`
2. **Analytics**: Configure Google Analytics/Facebook Pixel em `src/composables/useContactForm.js`

## 🧪 Melhorias Futuras

- [ ] Testes unitários com Vitest
- [ ] TypeScript support
- [ ] Vue Router para múltiplas páginas  
- [ ] Internacionalização (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Lazy loading de imagens
- [ ] Dark mode
- [ ] CMS integration

## 👨‍💻 Desenvolvedor

Desenvolvido por **Murilo** com ❤️

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**🎵 Harmony - Transformando paixão em talento!**
