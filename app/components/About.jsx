import Image from "next/image"
import pix from "./Image/profilePix.jpg"

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
        <ul className= "flex justify-evenly">
          <div className="">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind.css.</li>
          </div>
          <div className="">
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React.JS</li>
          </div>
          <div className="">
             <li>Next.JS</li>
            <li>Firebase</li>
            </div>
        </ul>
      </div>
    </div>




  )
}

export default About