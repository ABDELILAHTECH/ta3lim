import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <BrowserRouter>
          <App />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/lessons'/>
            <Route path='/exercises'/>
            <Route path='/exams'/>
            <Route path='/favorite'/>
            <Route path='/*' />
          </Routes>
        </BrowserRouter>
        
    </ThemeProvider>
)
