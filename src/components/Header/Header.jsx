import React from 'react'

const Header = ({ updateDiscount  }) => {
  return (
    <header className="bg-blue-900 text-white py-4 text-center">
      <h1 className="text-3xl font-bold">CyberQuest - ¡Descuentos de Locura!</h1>
      <div className="mt-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded mx-2"
          onClick={() => updateDiscount("30%")}
        >
          30% OFF
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded mx-2"
          onClick={() => updateDiscount("50%")}
        >
          50% OFF
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mx-2"
          onClick={() => updateDiscount("60%")}
        >
          60% OFF
        </button>
      </div>
    </header>
  )
}

export default Header
