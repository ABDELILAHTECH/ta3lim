import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LevelContext = createContext();

export function LevelProvider ({ children }){
    const [level,setLevel] = useState(localStorage.getItem("level") || "");
     
    const toggleLevel = (newLevel) => {
        setLevel(newLevel)
    };

    const clearLevel = () => {
        setLevel("");
    };

    useEffect(()=>{
        localStorage.setItem("level",level);
    },[level]);

    return(
        <LevelContext.Provider value={{level,toggleLevel,clearLevel}}>
            {children}
        </LevelContext.Provider>
    )
}