import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simula un envío exitoso
        Swal.fire({
            icon: 'success',
            title: '¡Envío exitoso!',
            text: 'Gracias por ponerte en contacto con nosotros.',
            confirmButtonText: 'Aceptar',
            background: '#f0f4f8',
            color: '#333',
        });

        // Limpiar el formulario después del envío
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

  return (
    <section className="py-8 bg-gray-200" id="contact">
      <h3 className="text-xl font-semibold text-center mb-6">Contáctanos</h3>
      <div className='mx-4'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {/* Nombre */}
            <input
                type="text"
                placeholder="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            />

            {/* Correo */}
            <input
                type="email"
                placeholder="Correo"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            />

            {/* Mensaje */}
            <textarea
                placeholder="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            ></textarea>

            {/* Botón de Enviar */}
            <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Enviar
                <FaPaperPlane className="text-white w-4 h-4" />
            </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
