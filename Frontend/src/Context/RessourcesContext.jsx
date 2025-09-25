import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RessourcesContext = createContext();

export function RessourcesProvider({ children }) {
  const [ressources, setRessources] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/ressources")
      .then(res => setRessources(res.data))
      .catch(err => console.log(err)); 
  }, []);

  return (
    <RessourcesContext.Provider value={{ ressources }}>
      {children}
    </RessourcesContext.Provider>
  );
}
