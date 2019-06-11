import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoReact from '../../Images/Logos/Logo_React.png';
import LogoJavaScript from '../../Images/Logos/Logo_JavaScript.png';
import LogoModo from '../../Images/Logos/Logo_Modo.png';
import LogoPhotoScan from '../../Images/Logos/Logo_PhotoScan.png';
import LogoSonyA99 from '../../Images/Logos/Logo_A99.png';
import LogoFaro from '../../Images/Logos/Logo_Faro.png';
import LogoPython from '../../Images/Logos/Logo_Python.png';
import LogoGolang from '../../Images/Logos/Logo_Golang.png';
import LogoNode from '../../Images/Logos/Logo_Node.png';
import LogoDjango from '../../Images/Logos/Logo_Django.png';
import LogoChartJS from '../../Images/Logos/Logo_ChartJS.png';
import LogoMaya from '../../Images/Logos/Logo_Maya.png';

const path={
  JS: LogoJavaScript,
  React: LogoReact,
  Modo: LogoModo,
  PhotoScan: LogoPhotoScan,
  Sony_a99: LogoSonyA99,
  Lidar: LogoFaro,
  Python: LogoPython,
  Go: LogoGolang,
  Node: LogoNode,
  Django: LogoDjango,
  ChartJS: LogoChartJS,
  Maya: LogoMaya
}

class WorkCard extends Component {
  render() {
    console.log(this.props.key);
    return (
      <div className="work-card">
        <h3 className="title">
          <Link to={`/portfolio/${this.props.path}`}>{this.props.title}</Link>
        </h3>
        <img 
          className="thumbnail"
          src={this.props.imageThumb} 
          alt="placeholder"
        />
        <p className="work-card-desc">{this.props.desc}</p>
        <div className="work-card-bottom">
          <div className="visit-site">
            <a href={this.props.url}>Visit Site</a>
          </div>
          <div className="tech-stack">
            {this.props.techStack.map(tech => (
              <img 
                key={path + 1}
                src={path[tech]} 
                alt="tech stack software logo"
                className="techstack-logo"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default WorkCard;
