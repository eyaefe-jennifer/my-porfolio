import Image from "next/image";
import project1 from "./Image/capturShr.png";
import project2 from "./Image/metron-capture.png";
import project3 from "./Image/resavation.png";

const Project = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <div className="flex justify-evenly">
        <div className="projectSample">
          <div className="lg:mt-20 xs:mt-5 project2 ">
            <Image
              src={project2}
              alt="sample of project"
              className="project-cap "
            />
          </div>
          <div className="featured-left">
            <p>
              Resavation dolor sit amet consectetur, adipisicing elit. Fugiat
              possimus est accusamus doloremque nulla minus iusto delectus
              incidunt, ullam, maxime praesentium animi consequuntur suscipit
              natus dolorem. Inventore, sed. Molestiae, ipsam.
            </p>
          </div>
          <div className="lg:mt-40 xs:mt-10 ">
            <Image
              src={project1}
              alt="sample of project"
              className="project-cap ml-28"
            />
          </div>
        </div>
        <div className="features">
          <div className="">
            <h1>Featured Projects</h1>
          </div>
          <div className="featured">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              possimus est accusamus doloremque nulla minus iusto delectus
              incidunt, ullam, maxime praesentium animi consequuntur suscipit
              natus dolorem. Inventore, sed. Molestiae, ipsam.
            </p>
          </div>
          <div className="mt-28">
            <Image
              src={project3}
              alt="sample of project"
              className="project-capture  "
            />
          </div>
          <div className="featured-project3 ">
            <p>
              project 3 dolor sit amet consectetur, adipisicing elit. Fugiat
              possimus est accusamus doloremque nulla minus iusto delectus
              incidunt, ullam, maxime praesentium animi consequuntur suscipit
              natus dolorem. Inventore, sed. Molestiae, ipsam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
