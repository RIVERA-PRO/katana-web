import React from 'react'
import './Nosotros.css'
import About from '../../Components/About/About'
import { Link as Anchor, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
export default function Nosotros() {
    return (
        <div>
            <div className='bg'>
                <Anchor to={`/`}>
                    <FontAwesomeIcon icon={faHome} /> Inicio
                </Anchor>
                |
                <Anchor to=''>
                    Nosotros
                </Anchor>
            </div>
            <About />
        </div>
    )
}
