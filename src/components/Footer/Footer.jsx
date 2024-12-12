import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y descripción */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold">CyberQuest</h2>
            <p className="text-sm mt-2">
              ¡Aprovecha descuentos exclusivos en nuestra campaña promocional del año!
            </p>
          </div>

          {/* Navegación rápida */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-medium text-lg mb-2">Navegación</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#productos" className="hover:underline">
                  Productos destacados
                </a>
              </li>
              <li>
                <a href="#descuentos" className="hover:underline">
                  Descuentos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:underline">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-medium text-lg mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Línea de separación */}
        <hr className="my-6 border-gray-400" />

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>&copy; 2024 CyberQuest. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
