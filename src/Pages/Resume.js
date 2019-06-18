import React from 'react';
import ResumeComponent from '../Components/ResumeComponent/ResumeComponent.js';
import Footer from '../Components/Footer/Footer.js';
import Banner from '../Components/Banner/Banner.js';

const Resume = () => {
  return (
    <div className="resume-page">
      <Banner />
      <ResumeComponent />
      <Footer />
    </div>
  )
}

export default Resume;
