import { createContext, useCallback, useState } from "react";
export const LayoutContext = createContext()


function LayoutProvider({ children }) {

    const [search, setSearch] = useState({
        value: "",
        isActive: false
    })

    const handleToggle = useCallback(() => {
        setSearch(prev => ({
            ...prev,
            isActive: !prev.isActive
        }));
        console.log(search);
    }, []);
    
    const obj = { search, setSearch, handleToggle }

    return (
        <LayoutContext.Provider value={obj}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider