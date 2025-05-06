import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import 'swiper/css/navigation';

// import required modules

import { Navigation, Pagination } from 'swiper/modules';
import pomidorImg from '../../../assets/pomidor.jpg'


export default function MenuSlider({ menu }) {


    return (
        <div data-aos="fade-up">
            <Swiper
                slidesPerView={1.4}
                navigation={true}
                spaceBetween={10}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    menu.map(item => {
                        return <SwiperSlide>
                            <div className=' rounded-[8px]  overflow-hidden bg-[#201E2C] '>
                                <div className="slide-top h-[100px]">
                                    <img className='object-center h-full w-full' src={pomidorImg} alt="pomidor-img" />
                                </div>
                                <div className="slide-bottom text-[#fff] text-left p-[10px]">
                                    <h3 className='text-[18px] font-semibold leading-[18px] pb-[6px]' >{item.name}</h3>
                                    <p className='flex gap-[6px] text-[16px] items-center'><span className='font-semibold'>Qiymət:</span> <span>{item.price} ₼</span></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
}
