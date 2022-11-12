import React from 'react'
import "./ProjectInfo.css"

const ProjectInfo = (props) => {
  const classes = "project-info " + props.className

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default ProjectInfo