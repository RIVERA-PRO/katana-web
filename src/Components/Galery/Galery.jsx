import { React, useEffect, useRef } from 'react'
import img from '../../images/banner1.png'
import img2 from '../../images/banner2.png'
import img3 from '../../images/banner3.png'
import img4 from '../../images/banner4.png'
import img5 from '../../images/banner5.jpeg'
import img6 from '../../images/banner6.jpeg'
import './Galery.css'
import { Link as Anchor } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

export default function Galery() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const imgs = [
        img, img2, img3, img4, img5, img6,
    ]
    return (
        <div className='galeryContain'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                id={"swiperGalery"}
            >
                {
                    imgs.map((item) => (
                        <SwiperSlide id={"swiperCardGalery"}>

                            <SwiperSlide   >
                                <Anchor to={`/propiedades`}>
                                    <img src={item} alt="" />
                                </Anchor>
                            </SwiperSlide>

                        </SwiperSlide>

                    ))
                }
            </Swiper>



        </div>
    )
}
