import { Search } from 'lucide-react';
import React, { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';

function SearchBar() {
  const { search, setSearch, handleToggle } = useContext(LayoutContext);

  const handleChange = (e) => {
    const value = e.target.value
    if (value.length <= 18) {
      setSearch(prev => ({
        ...prev,
        value: e.target.value
      }));
    }
    else{
      return
    }
  };


  return (
    <div className={`flex  rounded-[6px] items-center transition-all duration-300
      ${search.isActive ? 'bg-[#201E2C] text-[#fff] w-[240px]' : 'w-[54px]'}
    `}>
      <div className={`w-full transition-all  duration-300 ${search.isActive ? 'opacity-100' : 'opacity-0 w-[0px]'} overflow-hidden`}>
        <input
          type="text"
          placeholder="Search"
          value={search.value}
          onChange={handleChange}
          className="text-[#fff] outline-0 placeholder:text-[#808080] w-full px-[15px] text-[15px] py-[6px]"
        />
      </div>

      <button onClick={handleToggle} className="rounded-[6px] bg-[#fff] px-[10px] py-[3px]">
        <Search className="w-[17px] text-[#000]" />
      </button>
    </div>
  );
}

export default SearchBar;
