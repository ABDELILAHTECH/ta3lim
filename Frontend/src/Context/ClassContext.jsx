import { useState } from "react";
import { createContext } from "react";

export const ClassContext = createContext();

export function ClassProvider ({ children }){
    const [classItem,setClassItem] = useState("");

    return(
        <ClassContext.Provider value={{classItem,setClassItem}}>
            {children}
        </ClassContext.Provider>
    )
}