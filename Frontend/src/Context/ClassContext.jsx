import { useState } from "react";
import { createContext } from "react";

export const ClassContext = createContext();

export function ClassProvider ({ children }){
    const [classItem,setClassItem] = useState("");

    const clearClass = () => {
        setClassItem("");
    };

    return(
        <ClassContext.Provider value={{classItem,setClassItem,clearClass}}>
            {children}
        </ClassContext.Provider>
    )
}