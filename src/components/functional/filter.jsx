import React from 'react'
import { CategorySelect } from '../ui/selects/category-select'
import CategorySlider from '../ui/sliders/category-slider'

function Filter() {
    return (
        <div  className='flex items-center px-[15px] border-[#555] border-b pt-[15px] pb-[8px] w-full gap-[20px] flex-col justify-between '>
            <CategorySlider/>
        </div>
    )
}

export default Filter