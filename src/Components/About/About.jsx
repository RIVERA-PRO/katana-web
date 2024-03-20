import React from 'react'
import './About.css'
import logo from '../../images/logo.png'
import { Link as Anchor, } from "react-router-dom";
import Banner from '../../images/about.png'
export default function About() {
    return (
        <div className='abouContain'>
            <div className='imgAbout'>
                <img src={Banner} alt="Katana" />
            </div>
            <div className='aboutText'>
                <img src={logo} alt="logo" />
                <h1>Katana </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum vero in voluptatum enim beatae neque modi eos, aliquam delectus velit fugiat. Nesciunt aspernatur odit ipsam placeat! Aspernatur, ab tempore.</p>
                <Anchor to={`/`} className='btn'>
                    Contactar
                </Anchor>
            </div>
        </div>
    )
}
