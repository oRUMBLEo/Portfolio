import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import { ProjectData } from './ProjectsData'


import "./Projects.css"
import ProjectInfo from './ProjectInfo/ProjectInfo'
import ProjectTitle from './ProjectTitle/ProjectTitle'
import ProjectButtons from './ProjectButtons/ProjectButtons'

const Projects = () => {
  return (
    <div className='projects' data-aos="fade-up">
      <h1>/Projects</h1>
      <div className="projects__container">
        {ProjectData.map((project, index) => {
          return (
            <div data-aos="zoom-in" data-aos-duration={800} key={index}>
              <ProjectCard className="col-3" img={project.image}>
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectButtons webLink={project.webLink} />
                </ProjectInfo>
              </ProjectCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects