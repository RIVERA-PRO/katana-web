import React, { useState } from 'react';
import './Contact.css';
import logo from '../../images/logo.png'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        console.log(formData);
        // Reiniciar el estado del formulario después del envío
        setFormData({
            name: '',
            email: '',
            message: ''

        });
    };

    return (
        <div className='contactContain'>
            <form onSubmit={handleSubmit} className='form'>
                <img src={logo} alt="logo" />
                <label htmlFor="">Hace tu consulta</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Nombre'
                />
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    required
                />

                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Consulta'
                    required
                ></textarea>

                <button type="submit" className='btn'>Enviar</button>
            </form>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115903.57678092191!2d-65.51303049239486!3d-24.795906396607652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151b7f9%3A0xa5cd992cd587f206!2sSalta!5e0!3m2!1ses-419!2sar!4v1710882537548!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
