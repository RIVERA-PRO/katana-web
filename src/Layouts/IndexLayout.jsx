import React from 'react'
import Header from '../Pages/Header/Header'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import ProductosHome from '../Components/ProductosHome/ProductosHome'
import TilteSection from '../Components/TilteSection/TilteSection'
import Galery from '../Components/Galery/Galery'
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp'
export default function IndexLayout() {
    return (
        <div>
            <Header />

            <div className='espacio'>

            </div>
            <Hero />
            <TilteSection title="Algunos productos " more="Ver más" link="productos" />
            <ProductosHome />
            <TilteSection title="Galeria de Imagenes" more="Ver más" link="productos" />
            <Galery />
            <Footer />
            <BtnWhatsapp />
        </div>
    )
}
