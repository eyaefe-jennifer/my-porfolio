import Image from "next/image"
import logo from '../../public/je-logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-400 h-[70px]">
      <div className="logo">
        <Image src ={logo} alt ="eyaefe Jennifer" className="img" />
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