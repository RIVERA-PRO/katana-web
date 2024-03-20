import { React, useEffect, useRef } from 'react'
import './Hero.css'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import img from '../../images/banner1.png'
import img2 from '../../images/banner2.png'
import img3 from '../../images/banner3.png'
export default function Hero() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='heroContain'>


            <SwiperSlide id={"swiperHome"} >


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
                    <SwiperSlide  >
                        <img src={img} alt="" />

                    </SwiperSlide>
                    <SwiperSlide   >
                        <img src={img2} alt="" />

                    </SwiperSlide>
                    <SwiperSlide   >
                        <img src={img3} alt="" />

                    </SwiperSlide>


                </Swiper>


            </SwiperSlide>


        </div>
    )
}
