import { ArrowUp , Import } from "lucide-react";
import NavBar from "./Components/NavBar"
import { Route, Routes } from 'react-router-dom'
import Favorites from "./Pages/Favorites.jsx";
import Ressources from "./Pages/Ressources.jsx"
import Home from "./Pages/Home.jsx"
function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <NavBar />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/ressources' element={<Ressources />}/>
           <Route path='/favorites' element={<Favorites />} />
           <Route path='/*' />
         </Routes>    
       <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-500 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="العودة إلى الأعلى"
        >
          <ArrowUp size={20} />
        </button>
    </div>
  )
}

export default App;