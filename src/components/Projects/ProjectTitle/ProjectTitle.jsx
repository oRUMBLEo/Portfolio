import React from 'react'
import "./ProjectTitle.css"

const ProjectTitle = (props) => {
  const classes = "project-title " + props.className

  return (
    <h3 className={classes}>{props.children}</h3>
  )
}

export default ProjectTitle