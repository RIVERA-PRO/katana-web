import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'
import { Link as Anchor } from "react-router-dom";
import { productos } from '../productos'
import { contacto } from '../contacto'
export default function Footer() {

    return (
        <div className='foter'>


            <div className='contact-footer'>
                <div className='deColumnsText'>
                    <Anchor to={`/`}>
                        <img src={logo} alt="logo" />
                    </Anchor>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas delectus
                    </p>
                </div>
                <div className='deColumnsText'>
                    <h5>Teléfono</h5>
                    {
                        contacto?.map(item => (
                            <>
                                <Anchor href={`tel:${item?.telefono}`}>
                                    {item?.telefono}
                                </Anchor>
                                <Anchor href={`mailto:${item?.email}`}>
                                    {item?.email}
                                </Anchor>
                                <Anchor to={`/${item?.direccion}`}>
                                    {item?.direccion}
                                </Anchor>
                                <div class="redes-sociales">
                                    <a href="#"><i class='fa fa-facebook'></i></a>
                                    <a href="#"><i class='fa fa-instagram'></i></a>
                                    <a href="#"> <i class='fa fa-linkedin'></i></a>
                                    <a href="#"> <i class='fa fa-whatsapp'></i></a>
                                </div>
                            </>
                        ))
                    }

                </div>
                <div className='deColumnsText'>
                    <h5>Productos</h5>
                    {
                        productos?.slice(0, 4).map(item => (
                            <Anchor to={`/producto/${item.id}/${item.titulo.replace(/\s+/g, '-')}`}>
                                {item.titulo}
                            </Anchor>
                        ))
                    }

                </div>
                <div className='deColumnsText'>
                    <h5>Categorias</h5>
                    {
                        productos?.slice(0, 4).map(item => (
                            <Anchor to={``}>
                                {item.categoria}
                            </Anchor>
                        ))
                    }

                </div>
            </div>

            <div className='Copyright'>
                <p>Copyright © 2024 </p>

            </div>



        </div>
    )
}
