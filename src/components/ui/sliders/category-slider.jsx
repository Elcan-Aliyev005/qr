
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { getAllCategories } from '../../../service/getAllCategory';
import { NavLink, useLocation } from 'react-router-dom';
import { menu, categories } from "../../../data.js"

export default function CategorySlider() {
    const [categoriesData, setCategories] = useState(null);
    const { pathname } = useLocation();
    const swiperRef = useRef(null); // Swiper referansı

    useEffect(() => {
        setCategories(categoriesData);
    }, []);

    useEffect(() => {
        pathname == '/' ? swiperRef.current?.slideTo(0) : null
    }, [pathname])

    return (
        <div className="container">
            <Swiper
                slidesPerView={2.4}
                spaceBetween={8}
                navigation={true}
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="mySwiper"
            >
               

                {categories &&
                    categories.map((item, index) => (
                        <SwiperSlide key={item.slug}>
                            <NavLink
                                to={`/category/${item.slug}`}
                                onClick={() => swiperRef.current?.slideTo(index)}
                                className={
                                    `inline-block nav-link h-full w-full whitespace-nowrap rounded-[8px] py-[3px] text-center text-[16px] overflow-hidden transition`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

