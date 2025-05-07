import React, { useContext, useEffect, useRef, useState } from 'react'
import { getAllMenu } from '../service/getAllMenu'
import { Link, useParams } from 'react-router-dom'

import CategoryItem from '../components/layout/category/item'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { menu, categories } from "../../../data.js"
import { LayoutContext } from '../context/LayoutContext';


function Category() {

  const { search } = useContext(LayoutContext)
  const [menuData, setMenu] = useState(null)
  const { name } = useParams()

  useEffect(() => {

    setMenu(menu)

  }, [])

  // useEffect(() => { AOS.refresh() }, [name])




  const catName = menuData && menuData.find(item => item.category_slug == name).category

{
    return (
      <section className='px-[15px] pb-[10px] container'>
        <h3 data-aos='fade-right' className='section-title'> <Link to='/' className='text-[#808080]'>Ana səhifə › </Link> {catName}</h3>
        <div className='flex flex-col gap-[20px] py-[15px]'>
          {menuData && menuData.filter(cat => cat.category_slug == name).map((item, index) => (
            <CategoryItem key={item.id} index={index + 1} {...item} />
          ))}
        </div>

      </section>
    )
  }
}

export default Category