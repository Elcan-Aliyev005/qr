import React, { useEffect } from 'react'
import Header from '../components/layout/header'
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
import LayoutProvider from '../context/LayoutContext';

function MainLayout() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <LayoutProvider>
            {/* <div className='wrapper'> */}
                <Header />
                <Outlet />
                <footer></footer>
            {/* </div> */}
        </LayoutProvider>
    )
}

export default MainLayout













