import React, { Component } from 'react';

class WorkCard extends Component {
  render() {
    return (
      <div className="work-card">
        <h3>{this.props.title}</h3>
        <img src={ require('../../Images/300x200.png') } alt="placeholder image" />
        <p>{this.props.desc}</p>
        <div className="work-card-bottom">
          <a href={this.props.url}>Visit Site</a>
          <p className="tech-stack">{this.props.techStack}</p>
        </div>
      </div>
    )
  }
}

export default WorkCard;
