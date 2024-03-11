import Image from "next/image"
import logo from '../../public/je-logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-skyBlue h-[100px]">
      <div className="logo">
        <Image src ={logo} alt ="eyaefe Jennifer" priority className="img" />
      </div>
      <div className="navlist">
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