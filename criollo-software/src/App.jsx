import React from 'react'
import Header from './components/Header'
import ServiceSection from './components/ServiceSection'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4">
        <section id="inicio" className="mb-4">
          <h2 className="text-xl font-bold">Tu Tech Partner para tu proyecto</h2>
          <p>Convertimos ideas en productos con un estándar de calidad excepcional.</p>
        </section>
        <ServiceSection />
        <section id="casos-exito" className="mb-4">
          <h2 className="text-xl font-bold">Casos de Éxito</h2>
          <p>Descubre cómo nuestros proyectos innovadores nos han posicionado...</p>
        </section>
        <section id="contacto" className="mb-4">
          <h2 className="text-xl font-bold">Contacto</h2>
          <p>Agenda una llamada de 15 minutos con nuestro equipo...</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
