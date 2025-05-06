import React from 'react'
import Filter from '../functional/filter'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import SearchBar from '../functional/input'

function Header() {
    return (
        <header className=' py-[15px] text-[#fff]'>
            <div className='border-b border-[#555] px-[15px] pb-[15px]'>
                <div className='container '>
                    <div className='flex items-center justify-between '>
                        <Link to={"/"} className='font-semibold text-[22px] text-gold inline-block'>MEDUZA</Link>
                        <SearchBar />
                    </div>
                </div>
            </div>
            <Filter />


        </header>
    )
}

export default Header