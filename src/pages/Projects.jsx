import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard';
import style from './main.module.css';
import DumyData from "../dumydata/DumyData";
const Projects = () => {
return (
    <div className={style.project__style}>


        {/* {DumyData.map((project, index) => (
            <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                link={project.link}
            />
        ))} */}

    </div>
);

}

export default Projects