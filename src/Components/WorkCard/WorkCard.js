import React, { Component } from 'react';
import LogoReact from '../../Images/Logo_React.png';
import LogoJavaScript from '../../Images/Logo_JavaScript.png';

const path={
  JS: LogoJavaScript,
  React: LogoReact
}

class WorkCard extends Component {
  render() {
    return (
      <div className="work-card">
        <h3>{this.props.title}</h3>
        <img src={ require('../../Images/300x200.png') } alt="placeholder image" />
        <p>{this.props.desc}</p>
        <div className="work-card-bottom">
          <a href={this.props.url}>Visit Site</a>
          {this.props.techStack.map(tech => (
            <img src={path[tech]} />
          ))}
        </div>
      </div>
    )
  }
}

export default WorkCard;
