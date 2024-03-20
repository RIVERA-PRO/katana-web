import React, { useState, useEffect, useRef } from 'react';
import './Productos.css';
import { productos } from '../productos';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Productos() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [propertiesToShow, setPropertiesToShow] = useState(9);
    const propertiesPerLoad = 9;

    const categoriasUnicas = [...new Set(productos.map(item => item.categoria))];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category === selectedCategory ? '' : category);
    };

    const isCategorySelected = (category) => {
        return category === selectedCategory ? 'selected' : '';
    };

    const [priceRange, setPriceRange] = useState({
        min: 1000,
        max: 10000
    });
    const filtered = productos.filter((item) => {
        const matchesSearch = item.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !selectedCategory || item.categoria === selectedCategory;

        const price = parseFloat(item.precio.toString().replace(/[^0-9.-]+/g, ''));
        const matchesPrice = price >= priceRange.min && price <= priceRange.max;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    const noResults = filtered.length === 0;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='propiedadesContain'>
            <div className='gridContain'>
                <div className='filtered'>
                    <fieldset className='inputFiltro'>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input"
                        />
                    </fieldset>
                    <fieldset className='filtros'>
                        <input
                            type="range"
                            min="1000"
                            max="10000" // Ajusta el rango máximo según tus necesidades
                            value={priceRange.min}
                            onChange={(e) =>
                                setPriceRange({ ...priceRange, min: e.target.value })
                            }
                        />
                        <input
                            type="range"
                            min="1000"
                            max="10000" // Ajusta el rango máximo según tus necesidades
                            value={priceRange.max}
                            onChange={(e) =>
                                setPriceRange({ ...priceRange, max: e.target.value })
                            }
                        />
                        <div className="price-range-labels">
                            <span>Min {priceRange.min} / </span>
                            <span>Max {priceRange.max}</span>
                        </div>
                    </fieldset>
                    <div className='filtross'>
                        {categoriasUnicas.map((category) => (
                            <label key={category} className={`deFlexInput ${isCategorySelected(category)}`} id='categoria'>
                                <input
                                    type="checkbox"
                                    value={category}
                                    checked={category === selectedCategory}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </label>
                        ))}

                    </div>
                </div>
                <div className='cardsContain'>
                    {noResults ? (

                        <p className='noresult'>No hay resultados</p>

                    ) : (
                        filtered.slice(0, propertiesToShow).map((item) => (
                            <Link className='card' to={`/producto/${item.id}/${item.titulo.replace(/\s+/g, '-')}`}>

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
                                    id={"swiper_container_scroll"}
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
                                    <p>{item.descripcion}</p>
                                    <h4>${Number(item?.precio).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>

                                </div>
                            </Link>
                        ))
                    )}
                </div>
                {propertiesToShow < filtered.length && (
                    <div className='moreBtn'>
                        <button onClick={() => setPropertiesToShow(propertiesToShow + propertiesPerLoad)}>
                            Mostrar más...
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
}
