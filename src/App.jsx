import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Presentation from './components/Presentation/Presentation'
import Shirts from './components/Gallery/Shirts'
import ContactForm from './components/Form/ContactForm'
import Footer from './components/Footer/Footer'
import shirtsData from "./components/Data/DataShirts";

function App() {

    const [shirts, setShirts] = useState(shirtsData);

    // Función para actualizar el descuento
    const updateDiscount = (newDiscount) => {
        const updatedShirts = shirts.map((shirt) => ({
        ...shirt,
        descuento: newDiscount, // Cambiar el descuento de todas las camisetas
        }));
        setShirts(updatedShirts);
    };

  return (
    <>
        <Header updateDiscount={updateDiscount} />
        <Presentation />
        <Shirts shirts={shirts} />
        <ContactForm />
        <Footer />
    </>
  )
}

export default App
