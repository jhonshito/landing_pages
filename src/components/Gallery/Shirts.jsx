import React from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import shirtsData from "../Data/DataShirts";

const Shirts = ({ shirts }) => {
  return (
    <section className='mt-5'>
        <h3 className="text-xl font-semibold text-center mb-6">Productos Destacados</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4 mx-4">
        {shirts.map((shirt, index) => (
            <div
            key={index}
            className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 transition-all transform hover:scale-105 hover:shadow-xl hover:opacity-90 duration-300 ease-in-out mx-auto"
            >
            <a href="#">
                <img
                className="rounded-t-lg w-full h-40 object-contain"
                src={shirt.imagen} // Utiliza la imagen importada desde el JSON
                alt={shirt.nombre}
                />
            </a>
            <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                <h5 className="text-md font-bold tracking-tight text-gray-900 dark:text-white">
                    {shirt.nombre}
                </h5>
                <div className="flex items-center">
                    {/* Estrellas de valoración */}
                    {Array(5)
                    .fill(0)
                    .map((_, index) => (
                        <FaStar key={index} className="text-yellow-500 w-4 h-4 mx-0.5" />
                    ))}
                </div>
                </div>
                <p className="mb-4 text-xs font-normal text-gray-700 dark:text-gray-400">
                {shirt.descripcion}
                </p>
                <p className="mb-4 text-xs font-bold text-red-500">
                {shirt.descuento} de descuento
                </p>
                <div className="flex items-center justify-between">
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Ver detalles
                </a>
                <button
                    className="inline-flex items-center p-2 text-sm font-medium text-white bg-green-600 rounded-full hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
                >
                    <FaShoppingCart className="w-5 h-5" />
                </button>
                </div>
            </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Shirts
