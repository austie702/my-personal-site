import React, { Component } from 'react';

class IAM extends Component {
  render() {
    return (
      <section className="i-am-section">
        <div className="i-am-section-title">
          <h1>Who am I?</h1>
        </div>
        <div className="i-am-choices">

          <div className="i-am-a">
            <h2>A Software Developer</h2>
            <br></br>
            <p>An exciting new chapter in my life! I got into software engineering because of my love for building things in my previous career. Development is simply another tool in the toolchest to solve problems.</p>
          </div>

          <div className="i-am-line"></div>

          <div className="i-am-a">
            <h2>A 3D Modeler</h2>
            <br></br>
            <p>As a 3D artist, I strive for accuracy and fidelity. My dream project would be a flawless sub-millimeter recreation of a complex machine or building. Previous work in films, games, commercials, and arch-viz.</p>
          </div>
          
        </div>
      </section>
    )
  }
}

export default IAM;
