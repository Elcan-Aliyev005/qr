import React, { useEffect, useRef } from 'react'
// import AOS from 'aos';
import pomidorImg from '../../../assets/pomidor.jpg'
// import 'aos/dist/aos.css';
// import { useParams } from 'react-router-dom';


function CategoryItem({ price, name, index,img }) {

  return (

    <div data-aos="fade-up" data-aos-duration={500 + 100 * index} className='flex items-center gap-[10px] border-[#333] border rounded-[8px] bg-[#201E2C] text-[#fff]'>
      <div className='w-[120px] h-[90px] p-[5px]'>
        <img className='h-full w-full object-cover object-center rounded-[8px]' src={img ?? pomidorImg} alt={name} />
      </div>
      <div>
        <h3 className='text-[20px] font-semibold'>{name}</h3>
        <h3>Qiymət: {price} ₼ </h3>
      </div>
    </div>
  )
}

export default CategoryItem