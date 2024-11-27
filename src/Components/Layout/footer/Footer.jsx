import React from 'react'
import LogoPage from '../../logo/LogoPage'

const Footer = () => {
  return (
    <footer className="bg-primary_color text-secondary_color py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo e información */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-2xl font-semibold">Artesanías de Cucaita</h1>
          <p className="text-sm text-secondary_color/80 text-center md:text-left">
            Creando tradición y arte desde el corazón de Boyacá. Apoya el talento local y lleva un pedazo de nuestra historia contigo.
          </p>
          <div className='flex w-full justify-center'>
            <LogoPage />
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="font-semibold">Navegación</h2>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline hover:text-secondary_color/90">Inicio</a></li>
              <li><a href="#" className="hover:underline hover:text-secondary_color/90">Productos</a></li>
              <li><a href="#" className="hover:underline hover:text-secondary_color/90">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:underline hover:text-secondary_color/90">Contacto</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="font-semibold">Contacto</h2>
            <ul className="space-y-1">
              <li>Tel: +57 123 456 7890</li>
              <li>Email: artesanias@cucaita.co</li>
              <li>Ubicación: Cucaita, Boyacá</li>
            </ul>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-semibold">Síguenos</h2>
          <div className="flex gap-4">
            <a href="#" className="text-secondary_color/90 hover:text-secondary_color">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-secondary_color/90 hover:text-secondary_color">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-secondary_color/90 hover:text-secondary_color">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="mt-8 text-center text-sm text-secondary_color/80">
        © {new Date().getFullYear()} Artesanías de Cucaita. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer