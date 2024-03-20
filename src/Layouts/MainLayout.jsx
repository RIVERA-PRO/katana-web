import React from 'react'
import Header from '../Pages/Header/Header'
import { Outlet } from "react-router-dom";
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp'
import Footer from '../Components/Footer/Footer'
export default function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />

            <Footer />
            <BtnWhatsapp />
        </div>
    )
}
