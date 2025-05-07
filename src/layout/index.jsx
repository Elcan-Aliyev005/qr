import React, { useContext, useEffect } from 'react'
import Header from '../components/layout/header'
import { Link, Outlet } from 'react-router-dom'
// import AOS from 'aos';
// import 'aos/dist/aos.css'
import { LayoutContext } from '../context/LayoutContext';
import CategoryItem from '../components/layout/category/item';

function MainLayout() {
    const { search, data } = useContext(LayoutContext)
    const { menu } = data
    const filteredMenu = menu.filter(item => item.name.toLowerCase().startsWith(search.value.trim().toLowerCase()))
    useEffect(() => {
        // AOS.init()
    }, [])
    return (
        <>
            <Header />
            {
                (search.value.trim() !== "") ?
                    (<section className='px-[15px] pb-[10px] container'>
                        <h3 data-aos='fade-right' className='section-title'>
                            <Link to='/' className='text-[#808080]'>Axtarış: › </Link> <span>{search.value}</span></h3>
                        <div className='flex flex-col gap-[20px] py-[15px]'>
                            {filteredMenu.length > 0 ?
                                filteredMenu
                                    .map((item, index) => (
                                        <CategoryItem key={item.id} index={index + 1} {...item} />
                                    )) : <div className='flex items-center justify-center h-[calc(80vh-120px)]'>
                                    <h3 className='section-title'>Axtarışa uyğun məhsul tapılmadı</h3>
                                </div>
                            }
                        </div>

                    </section>) : (<Outlet />)
            }
            <footer></footer>
        </>
    )
}

export default MainLayout













