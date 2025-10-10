import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard 
        img="/img/projects/ToTheApp.jpeg" 
        title="To Do App" />
        <ProjectCard 
        img="/img/projects/sejukPool.png" 
        title="SejukPool" />
        <ProjectCard 
        img="/img/projects/ShirkanStore.png" 
        title="Shirkan Store" />
        <ProjectCard
          img="/img/projects/noorShop.webp"
          title="Noor Shopping"
          link="https://orebishopping.reactbd.com/"
        />
        <ProjectCard
          img="/img/projects/dynamicPortfolio.png"
          title="Dynamic Portfolio"
          link="https://amazonclone.reactbd.com/"
        />
        <ProjectCard
          img="/img/projects/dashboard.webp"
          title="Dashboard"
          link="https://orebishopping.reactbd.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
