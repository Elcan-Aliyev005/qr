import { createContext, useCallback, useState } from "react";
export const LayoutContext = createContext()
import {menu, categories} from "../../../data.js"

function LayoutProvider({ children }) {



    const [search, setSearch] = useState({
        value: "",
        isActive: false
    })

    const [data, setData]=useState({menu, categories})

    const handleToggle = useCallback(() => {
        setSearch(prev => ({
            ...prev,
            isActive: !prev.isActive
        }));
        console.log(search);
    }, []);
    
    const obj = { search, setSearch, data, handleToggle }

    return (
        <LayoutContext.Provider value={obj}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider