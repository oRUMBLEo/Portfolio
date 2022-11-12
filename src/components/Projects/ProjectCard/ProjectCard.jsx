import React from 'react'

import "./ProjectCard.css"

const ProjectCard = (props) => {
  const classes = "project-card " + props.className
  const img = props.img

  return (
    <div className={classes}>
      <img src={img} alt="" />
      {props.children}
    </div>
  )
}

export default ProjectCard