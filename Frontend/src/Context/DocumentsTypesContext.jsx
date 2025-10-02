import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DocumentsTypesContext = createContext();

export function DocumentsTypesProvider ({ children }){
    const [docsType,setDocsType] = useState(localStorage.getItem("docsType") || "الدروس");

     
    const toggleDocsType = (docsType) => {
        setDocsType(docsType);
    };

    const clearDocsType = () => {
        setDocsType("");
    };

    useEffect(()=>{
        localStorage.setItem("docsType",docsType);
    },[docsType]);

    return(
        <DocumentsTypesContext.Provider value={{docsType,toggleDocsType,clearDocsType}}>
            {children}
        </DocumentsTypesContext.Provider>
    )
}