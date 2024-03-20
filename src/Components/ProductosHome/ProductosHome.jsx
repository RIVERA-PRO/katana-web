import React, { useState, useEffect, useRef } from 'react'
import './ProductosHome.css'
import { productos } from '../productos';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

export default function ProductosHome() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);








    return (
        <div className='productosHomeContain'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                id={"swiper_container_scroll"}
            >
                {
                    productos.map((item) => (
                        <SwiperSlide id={"swiperCardScroll"} >
                            <Link className='cardScroll' to={`/producto/${item.id}/${item.titulo.replace(/\s+/g, '-')}`}>

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
                                        item.img ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }

                                    {
                                        item.img2 ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img2} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }
                                    {
                                        item.img3 ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img3} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }

                                    {
                                        item.img4 ?
                                            (
                                                <SwiperSlide  >
                                                    <img src={item.img4} alt="imagen" />
                                                </SwiperSlide>
                                            ) : (
                                                <>
                                                </>
                                            )
                                    }


                                </Swiper>

                                <div className='cardText'>
                                    <h3>{item.titulo.slice(0, 30)}</h3>
                                    <p>{item.descripcion.slice(0, 50)}...</p>
                                    <h4>${Number(item?.precio).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>

                                </div>
                            </Link>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}
