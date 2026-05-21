import './Gritmove.css'

const productItems = [
  {
    name: 'Camisas deportivas',
    description: 'Tela transpirable para entrenamientos intensos y uso diario.',
    cta: 'Ver en Amazon',
  },
  {
    name: 'Hoodies',
    description: 'Comodidad premium con corte moderno para antes y despues del gym.',
    cta: 'Ver en TikTok',
  },
  {
    name: 'Joggers',
    description: 'Ajuste atletico con movilidad total para cualquier rutina.',
    cta: 'Ver en Amazon',
  },
  {
    name: 'Gorras',
    description: 'Estilo deportivo para completar tu look con identidad GritMove.',
    cta: 'Ver en TikTok',
  },
]

function Navbar() {
  return (
    <header className="gm-navbar">
      <div className="gm-container gm-navbar-inner">
        <a className="gm-brand" href="#inicio">GritMove</a>
        <nav className="gm-nav" aria-label="Navegacion principal">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre Nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="gm-hero">
      <div className="gm-container">
        <p className="gm-kicker">Disciplina que se nota</p>
        <h1>Eleva tu rendimiento con actitud GritMove</h1>
        <p className="gm-hero-copy">
          Ropa deportiva creada para quienes entrenan con enfoque, se mueven sin excusas
          y proyectan estilo dentro y fuera del gym.
        </p>
        <div className="gm-hero-actions">
          <a className="gm-btn gm-btn-primary" href="#productos">Ver productos</a>
          <a className="gm-btn gm-btn-secondary" href="#contacto">Siguenos</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="gm-section">
      <div className="gm-container gm-panel">
        <h2>Sobre GritMove</h2>
        <p>
          GritMove es una marca de ropa deportiva enfocada en disciplina, movimiento y estilo.
          Disenamos prendas funcionales para personas que viven el entrenamiento como parte de
          su identidad y su crecimiento diario.
        </p>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="productos" className="gm-section">
      <div className="gm-container">
        <h2>Productos</h2>
        <div className="gm-grid">
          {productItems.map((item) => (
            <article className="gm-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <a className="gm-btn gm-btn-secondary" href="#">{item.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section id="contacto" className="gm-section">
      <div className="gm-container gm-cta">
        <h2>Tu mejor version empieza con el primer movimiento</h2>
        <p>Entrena con intensidad. Viste con proposito. Representa el mindset GritMove.</p>
        <a className="gm-btn gm-btn-primary" href="#">Contactar / Redes</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="gm-footer">
      <div className="gm-container gm-footer-inner">
        <p>GritMove © {new Date().getFullYear()}</p>
        <nav aria-label="Enlaces de pie de pagina">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}

export default function Gritmove() {
  return (
    <div className="gm-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}