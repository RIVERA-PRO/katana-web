import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../productos";
import './Detail.css'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShare, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import whatsappIcon from '../../images/wpp.png';
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
export default function Detail() {
    const navigate = useNavigate();

    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        const inmueble = productos.find((e) => e.id === parseInt(id));
        setProducto(inmueble);
    }, [id, productos]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!producto) {
        return <div>Cargando...</div>;
    }



    function handleCompartirClick() {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Echa un vistazo a este producto',
                url: window.location.href,
            })
                .then(() => console.log('Contenido compartido correctamente'))
                .catch((error) => console.error('Error al compartir:', error));
        } else {
            console.error('La API de compartir no está disponible en este navegador.');
        }
    }

    const handleWhatsappMessage = () => {
        const phoneNumber = '3875683101';
        const title = encodeURIComponent(producto?.titulo?.replace(/\s+/g, '-'));
        const formattedPrice = Number(producto?.precio).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const price = encodeURIComponent(formattedPrice);
        const category = encodeURIComponent(producto.categoria);

        const message = `Hola, quisiera más información sobre\n\nTítulo: ${title}\nCategoría: ${category}\n$${formattedPrice}`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="detail">


            <div className="deFlexDetail">
                <button className="back" onClick={goBack}> <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <button className="share" onClick={handleCompartirClick}> <FontAwesomeIcon icon={faExternalLinkAlt} /> </button>
            </div>
            <div className="detail-contain">
                <SwiperSlide id={"swiperDetail"} >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                        autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias
                        pagination={{ clickable: true, }}
                        onSwiper={(swiper) => {
                            console.log(swiper);
                            swiperRef.current = swiper;
                        }}

                    >



                        {
                            producto.img ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }

                        {
                            producto.img2 ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img2}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img2);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }
                        {
                            producto.img3 ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img3}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img3);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }
                        {
                            producto.img4 ?
                                (
                                    <SwiperSlide  >
                                        <img
                                            src={producto.img4}
                                            alt={producto.titulo}
                                            className="img"
                                            onClick={() => {
                                                setModalImage(producto.img4);
                                                setIsModalOpen(true);
                                            }}
                                        />
                                    </SwiperSlide>
                                ) : (
                                    <>
                                    </>
                                )
                        }

                    </Swiper>


                </SwiperSlide>

                <div className="textDetail">

                    <h2 className="title">{producto.titulo}</h2>

                    <hr />
                    <h5 className="price">${producto.precio.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h5>


                    <p>{producto.descripcion}</p>
                    <button className="wpp" onClick={handleWhatsappMessage}>
                        WhatsApp
                        <img src={whatsappIcon} alt="whatsappIcon" />
                    </button>

                </div>
            </div>

            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                center
                classNames={{
                    modal: 'custom-modal',
                }}
            >
                <img src={modalImage} alt={producto.titulo} />
            </Modal>
        </div>
    );
}
