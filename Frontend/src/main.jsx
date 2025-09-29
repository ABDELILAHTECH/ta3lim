import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx' 

import { LevelProvider } from './Context/LevelContext.jsx';
import { DocumentsTypesProvider } from './Context/DocumentsTypesContext.jsx';
import { RessourcesProvider } from './Context/RessourcesContext.jsx';
import { FavoritesProvider } from './Context/FavoritesContext.jsx';
import { ClassProvider } from './Context/ClassContext.jsx';
import { SubjectProvider } from './Context/SubjectContext.jsx';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <BrowserRouter >
  <RessourcesProvider>
    <ThemeProvider>
      <ClassProvider>
         <LevelProvider>   
           <DocumentsTypesProvider>
             <SubjectProvider>
               <FavoritesProvider>
                  <App />
                  
               </FavoritesProvider>
             </SubjectProvider>
           </DocumentsTypesProvider>
          </LevelProvider>  
       </ClassProvider>      
    </ThemeProvider>
  </RessourcesProvider>  
  </BrowserRouter>
)
