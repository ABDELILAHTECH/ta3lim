import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const RegionContext = createContext();

export function RegionProvider ({ children }){
    const [selectedRegion, setSelectedRegion] = useState(localStorage.getItem("selectedRegion") || "");
    const [selectedSubject, setSelectedSubject] = useState(localStorage.getItem("selectedSubject") || "");

    const toggleRegion = (newRegion) => {
        setSelectedRegion(newRegion);
    };

    const toggleSubject = (newSubject) => {
        setSelectedSubject(newSubject);
    };

    const clearFilters = () => {
        setSelectedRegion("");
        setSelectedSubject("");
    };

    useEffect(()=>{
        localStorage.setItem("selectedRegion", selectedRegion);
    },[selectedRegion]);

    useEffect(()=>{
        localStorage.setItem("selectedSubject", selectedSubject);
    },[selectedSubject]);

    return(
        <RegionContext.Provider value={{
            selectedRegion, 
            selectedSubject, 
            toggleRegion, 
            toggleSubject, 
            clearFilters
        }}>
            {children}
        </RegionContext.Provider>
    )
}
