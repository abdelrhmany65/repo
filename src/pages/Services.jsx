import React from 'react'
import style from './main.module.css';
import DumyData from "../dumydata/DumyData";
import ProjectCard from '../components/ProjectCard/ProjectCard';
const Services = () => {
  return (
    <div className={style.Services__style}>


        {DumyData.map((project, index) => (
            <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                link={project.link}
            />
        ))}

    </div>
  )
}

export default Services