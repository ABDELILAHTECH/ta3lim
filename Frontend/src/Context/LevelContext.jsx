import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LevelContext = createContext();

export function LevelProvider ({ children }){
    const [level,setLevel] = useState(localStorage.getItem("level") || "الابتدائي");
     
    const toggleLevel = (newLevel) => {
        setLevel(newLevel)
    };

    useEffect(()=>{
        localStorage.setItem("level",level);
    },[level]);

    return(
        <LevelContext.Provider value={{level,toggleLevel}}>
            {children}
        </LevelContext.Provider>
    )
}