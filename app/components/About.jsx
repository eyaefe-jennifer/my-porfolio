import Image from "next/image"
import pix from "./Image/profilePix.jpg"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi"
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoFirebase } from "react-icons/bi";
import { FaSquareGithub } from "react-icons/fa6";

const About = () => {
  return (

    <div className='about'>
      <h2>About Me</h2>
      <div className="border"></div>
      <div className="flex pt-[-1100px] justify-evenly">
        <div className="img-section">
          <Image src={pix} alt="about profile" priority className="aboutPix" />
        </div>
        <div className="aboutme-section">
          <p><span>J</span>ennifer is a Frontend Engineer that pay  keen attention to detail and dedication to solving any problem at hand.</p>
          <p>Developed and Implemented project scope and timelines based on the design-develop-deploy process Collaborated with UX designers and Back End Developers and ensured coherence between all parties Tested feature prototypes for bugs and user experience.</p>
        </div>
      </div>
      <div className="skills">
        <h1>TECHNICAL SKILLS</h1>
        <h6>Tools, Framework and Libraries</h6>
        <ul className="flex justify-evenly mt-10">
          <div className="">
            <li><FaHtml5 className="icons" />
              HTML
              </li>
              <li><BiLogoTailwindCss className="icons" />
              Tailwind.css.</li>
              <li> <TbBrandNextjs className="icons" />Next.JS</li>
            
          </div>
          <div className=""> <li><FaCss3 className="icons" /> CSS</li>
           
            <li><SiJavascript className="icons" /> JavaScript</li>
            <li> <BiLogoFirebase className="icons" /> Firebase</li>
          </div>
          <div className="">
          <li><FaBootstrap className="icons" /> Bootstrap</li>
          <li><FaReact className="icons" /> React.JS</li>
            
            <li>
              <FaSquareGithub className="icons" /> Git</li>
          </div>
        </ul>
      </div>
    </div>




  )
}

export default About