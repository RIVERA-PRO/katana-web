import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Modal from 'react-modal';
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'
import logo from '../../images/logo.png'
import fondo from '../../images/banner1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCube, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesites
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <header>
            <nav >





                <Anchor to={`/`} className='logo'>
                    <img src={logo} alt="logo" />
                </Anchor>
                <div className='enlaces'>
                    <Anchor to={`/`} >Inico</Anchor>
                    <Anchor to={`/productos`} >Productos</Anchor>
                    <Anchor to={`/nosotros`} >Nosotros</Anchor>
                    <Anchor to={`/contacto`} >Contacto</Anchor>
                </div>

                <div className='deFLexNav'>
                    <InputSearch />
                    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className="modalNav-content">
                        <div className='fondo'>
                            <img src={fondo} alt={`imagen`} />

                        </div>
                        <div className='enlaces2'>
                            <Anchor to={`/`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faHome} /> Inicio
                            </Anchor>
                            <Anchor to={`/productos`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faCube} /> Productos
                            </Anchor>
                            <Anchor to={`/nosotros`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faUsers} /> Nosotros
                            </Anchor>
                            <Anchor to={`/contacto`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faEnvelope} /> Contacto
                            </Anchor>
                        </div>
                        <div class="redes-sociales-nav">
                            <a href="#"><i class='fa fa-facebook'></i></a>
                            <a href="#"><i class='fa fa-instagram'></i></a>
                            <a href="#"> <i class='fa fa-linkedin'></i></a>
                            <a href="#"> <i class='fa fa-whatsapp'></i></a>
                        </div>
                    </div>
                </Modal>

            </nav>
        </header>
    );
}
