import React from 'react'
import "./ProjectButtons.css"

const ProjectButtons = (props) => {
  const webLink = props.webLink
  const classes = "project-buttons " + props.className

  return (
    <div className={classes}>
      <a href={webLink}><button>Visit</button></a>
    </div>
  )
}

export default ProjectButtons