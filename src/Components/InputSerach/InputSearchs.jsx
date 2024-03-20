import React, { useState } from "react";
import "./InputSearchs.css";
import { productos } from '../productos';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

export default function InputSearchs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducto, setFilteredProducto] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const results = productos.filter((producto) => {
            return (
                producto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                producto.categoria.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
        setFilteredProducto(results);
        setShowResults(searchTerm !== "");
        setNoResults(searchTerm !== "" && results.length === 0);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="fondo-input">
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={openModal} />



                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modalInput"
                    overlayClassName="overlayInput">
                    <fieldset className="inputSearch" >
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="input"
                        />
                    </fieldset>
                    {showResults && (
                        <div className="modal">
                            {filteredProducto.map((item) => (
                                <div key={item.id}>

                                    <Link to={`/producto/${item.id}/${item.titulo.replace(/\s+/g, '-')}`} onClick={closeModal}>
                                        <img src={item.img} alt="" /><p>{item.titulo} - {item.categoria}</p>
                                    </Link>
                                </div>
                            ))}
                            {noResults && <p>No se encontraron resultados.</p>}
                        </div>
                    )}
                </Modal>
            </div>
        </div>
    );
}
