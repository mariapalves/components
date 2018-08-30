import projects from '../data/projects.json';
import React, { Component } from 'react';
import Project from './Project'

export default class Projects extends Component {
  constructor(){
    super()

  }
  renderProjects(){
    let myProjects = [];
    projects.allProjects.forEach((proj)=>{
      myProjects.push(<Project imgName={proj.imgName} description={proj.description} title={proj.title} />)
    });
    return myProjects;
  }
  render() {

    return(
      <section id="portfolio">
      {this.renderProjects()}
      </section>
    )
  }
}
