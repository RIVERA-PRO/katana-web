import React from 'react'
import Contact from '../../Components/Contact/Contact'
import './Contacto.css'
import { Link as Anchor, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
export default function Contacto() {
    return (
        <div className='contact'>

            <div className='bg'>
                <Anchor to={`/`}>
                    <FontAwesomeIcon icon={faHome} /> Inicio
                </Anchor>
                |
                <Anchor to=''>
                    Contacto
                </Anchor>
            </div>
            <Contact />

        </div>
    )
}
