import React, { useEffect } from 'react'
import MenuSlider from '../../ui/sliders/menu-slider'
import { Link, useParams } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section({ name, slug, menu }) {
    const params = useParams()

    useEffect(() => { AOS.init() }, [])
    useEffect(() => { AOS.refresh() }, [params.name])


    return (
        <section className='pb-[20px]'>
            <div className='flex items-center mb-[10px] justify-between'>
                <h2 data-aos='fade-right' className='section-title'>{name}</h2>
                <Link to={`/category/${slug}`} data-aos='fade-left' className='text-[15px] flex items-center text-[#fff] gap-[3px]'><span>Daha ətraflı </span> <span className='text-[18px]'>››</span> </Link>
            </div>
            <div>
                <MenuSlider menu={menu} />
            </div>
        </section>
    )
}

export default Section