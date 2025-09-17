<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <i class="fas fa-music"></i>
            <span>Harmony</span>
          </div>
          <p>Transformando paixão em talento desde 2015</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Cursos</h4>
          <ul>
            <li><a href="#cursos">Violão</a></li>
            <li><a href="#cursos">Piano</a></li>
            <li><a href="#cursos">Bateria</a></li>
            <li><a href="#cursos">Canto</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contato</h4>
          <div class="contact-info">
            <p><i class="fas fa-phone"></i> (11) 99999-9999</p>
            <p><i class="fas fa-envelope"></i> contato@harmonymusic.com</p>
            <p><i class="fas fa-map-marker-alt"></i> Rua da Música, 123 - São Paulo</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Harmony Escola de Música. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--dark-color);
  color: var(--white);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-logo i {
  color: var(--primary-color);
  margin-right: 0.5rem;
  font-size: 1.8rem;
}

.footer-section h4 {
  font-family: var(--font-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--white);
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.8rem;
}

.footer-section ul li a {
  color: var(--gray-light);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--primary-color);
  padding-left: 0.5rem;
}

.footer .contact-info p {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  color: var(--gray-light);
}

.footer .contact-info i {
  color: var(--primary-color);
  margin-right: 1rem;
  width: 20px;
}

.footer .social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.footer .social-links a {
  width: 45px;
  height: 45px;
  background: rgba(255, 107, 53, 0.1);
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.footer .social-links a:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: scale(1.1);
  border-color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
  color: var(--gray);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
