import { Link } from "react-router-dom";
import logo from "../assets/AppLogo.png";

export default function AppLogo() {
  return (
     <span className='text-primary font-black  font-kufi text-3xl md:text-4xl lg:text-5xl'>
          <Link to="/" >
             <img src={logo} className="h-20 W" alt="" /> 
          </Link>             
     </span>
  )
}
