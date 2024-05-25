import Image from "next/image"
import logo from '../../public/je-logo.png'
import { FaBars} from "react-icons/fa";
import { FaTimes} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-gray-300  h-[90px]
     xs:h-[80px] sm:h-[80px] md:h-[80px]">
      <div className="logo">
        <Image src ={logo} alt ="eyaefe Jennifer" priority className="img" />
      </div>
      <div className="navlist">
        <div className="mobile-menu">
          <FaBars className= "menu-icon" /> 
        </div>
        <ul> 
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
         <button>Resume</button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar