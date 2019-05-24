import React, { Component } from 'react';
import '../../Images/profilePic.png';
import '../../Images/atxbw.jpg';

class Banner extends Component {
  render() {
    return (
      <section className="banner">

        <div className="header-elements">
          <div className="austin-from-austin">
            <h1>Austin from Austin</h1>
          </div>

          {/* <div className="profile-pic">
            <img src={ require('../../Images/profilePic.png') } alt="Austin getting punched." />
          </div> */}
        </div>

        <div className="problem-solving">
          <section class="rw-wrapper">
            <h2 class="rw-sentence">
              <span>I love solving problems with </span>
              <div class="rw-words rw-words-2">
                <span>design.</span>
                <span>process improvement.</span>
                <span>strong relationships.</span>
                <span>project management.</span>
                <span>data.</span>
                <span>code.</span>
                <span>listening.</span>
              </div>
            </h2>
          </section>
        </div>
{/* good collaboration leads to great projects */}
      </section>
    )
  }
}

export default Banner;
