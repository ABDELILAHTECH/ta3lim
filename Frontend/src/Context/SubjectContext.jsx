import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const SubjectContext = createContext();

export function SubjectProvider ({ children }){
    const [subject,setSubject] = useState(localStorage.getItem("subject") || "");

    const toggleSubject = (newSubject) => {
        setSubject(newSubject);
    };

    useEffect(()=>{
        localStorage.setItem("subject",subject);
    },[subject]);

    return(
        <SubjectContext.Provider value={{subject,toggleSubject}}>
            {children}
        </SubjectContext.Provider>
    )
}
