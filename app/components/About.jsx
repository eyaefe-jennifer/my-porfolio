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
      <div className="flex pt-16 ">
        <div className="img-section">
          <Image src={pix} alt="about profile" priority className="aboutPix" />
        </div>
        <div className="aboutme-section">
          <p><span>J</span>ennifer is a Frontend Engineer that pay  keen attention to detail and dedication to solving any problem at hand.</p>
          <p>Developed and Implemented project scope and timelines based on the design-develop-deploy process Collaborated with UX designers and Back End Developers and ensured coherence between all parties Tested feature prototypes for bugs and user experience.</p>
        </div>
      </div>
      <div className="skils">
        <h2>TECHNICAL SKILLS</h2>
        <h6>Tools, Framework and Libraries</h6>
        <ul className="flex justify-evenly">
          <div className="">
            <li><FaHtml5 />
              HTML</li>
            <li><FaCss3 /> CSS</li>
            <li><BiLogoTailwindCss />
              Tailwind.css.</li>
          </div>
          <div className="">
            <li><FaBootstrap /> Bootstrap</li>
            <li><SiJavascript /> JavaScript</li>
            <li><FaReact /> React.JS</li>
          </div>
          <div className="">
            <li> <TbBrandNextjs />Next.JS</li>
            <li> <BiLogoFirebase /> Firebase</li>
            <li>
              <FaSquareGithub /> Git</li>
          </div>
        </ul>
      </div>
    </div>




  )
}

export default About