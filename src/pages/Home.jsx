import React, { useEffect, useState } from 'react'
import Section from '../components/layout/sections/Section'
import { getAllCategories } from '../service/getAllCategory'
import { getAllMenu } from '../service/getAllMenu'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import {menu, categories} from "../../../data"
function Home() {


    const [menuData, setMenu] = useState(null)
    const [categoriesData, setCategories] = useState(null)
    useEffect(() => {
        setMenu(menu)
        setCategories(categories)
       
    }, [])

  
    return (
        <div className='container mx-auto px-[15px]'>
            {categoriesData && categoriesData.map(category => {
                const filteredMenu = menu.filter(item => item.category_slug == category.slug)
                console.log(filteredMenu);
                return <Section key={category.id} {...category} menu={filteredMenu} />
            })}

        </div>
    )
}

export default Home