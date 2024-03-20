import React, { useState, useEffect } from 'react';
import './BtnWhatsapp.css';
import whatsappIcon from '../../images/wpp.png';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function BtnWhatsapp() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [noteText, setNoteText] = useState('¡Hola! Estoy interesado en..');

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleWhatsappMessage = () => {

        const phoneNumber = '3875683101';

        let noteMessage = '';
        if (noteText.trim() !== '') {
            noteMessage += `\n ${noteText}`;
        }

        const message = `${noteMessage}`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');

        setNoteText('');
        closeModal();

    };

    return (
        <div className='containWpp'>
            <button className='btnWhatsapp' onClick={openModal}>
                <img src={whatsappIcon} alt="whatsappIcon" />
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal-wpp"
                overlayClassName="overlay-wpp"
            >
                <div className='containModalWpp'>


                    <div className='headerWpp'>
                        <span>
                            Envíanos un mensaje
                        </span>

                        <button onClick={closeModal} className='closeBtn'>
                            X
                        </button>
                    </div>
                    <div className='mensaje'>
                        <p>Hola, ¿en qué podemos ayudarte? 👋</p>
                    </div>

                    <div className='sendWpp'>
                        <textarea
                            placeholder="Envíanos un mensaje"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                        />
                        <button onClick={handleWhatsappMessage}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
