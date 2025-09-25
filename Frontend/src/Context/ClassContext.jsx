import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ClassContext = createContext();

export function ClassProvider ({ children }){
    const [classItem,setClassItem] = useState(localStorage.getItem("class") || "");

    useEffect(()=>{
        localStorage.setItem("class",classItem);
        console.log(classItem);
        
    },[classItem]);

    return(
        <ClassContext.Provider value={{classItem,setClassItem}}>
            {children}
        </ClassContext.Provider>
    )
}