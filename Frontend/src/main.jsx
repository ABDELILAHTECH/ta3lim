import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Favorites from "./Pages/Favorites.jsx";
import Ressources from "./Pages/Ressources.jsx"
import { ThemeProvider } from './Context/ThemeContext.jsx' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import { LevelProvider } from './Context/LevelContext.jsx';
import { DocumentsTypesContext, DocumentsTypesProvider } from './Context/DocumentsTypesContext.jsx';
import { RessourcesProvider } from './Context/RessourcesContext.jsx';
createRoot(document.getElementById('root')).render(
  <RessourcesProvider>
    <ThemeProvider>
      <LevelProvider>
        <DocumentsTypesProvider>
          <BrowserRouter>
              <App />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ressources' element={<Ressources />}/>
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/*' />
              </Routes>    
          </BrowserRouter>
        </DocumentsTypesProvider>  
      </LevelProvider>  
    </ThemeProvider>
  </RessourcesProvider>  
)
