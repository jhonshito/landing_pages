import React from 'react'
import sale from "../../assets/image/sale.jpg";

const Presentation = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-6 md:space-y-0">
        {/* Descripción y botón */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold leading-tight">
            CyberQuest - ¡Descuentos de Locura!
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Aprovecha las mejores ofertas del año con descuentos increíbles en toda nuestra
            colección. ¡Es el momento perfecto para renovar tu guardarropa y ahorrar en grande!
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            Contáctanos
          </button>
        </div>
        {/* Imagen de descuentos con tamaño ajustado */}
        <div className="mt-6 md:mt-0 w-full md:w-1/3 flex justify-center">
          <img
            src={sale}
            alt="Descuentos"
            className="rounded-lg shadow-xl max-w-[300px] h-auto"  // Tamaño más pequeño de la imagen
          />
        </div>
      </div>
    </section>
  )
}

export default Presentation
