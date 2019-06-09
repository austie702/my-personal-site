import React from 'react';
import ResumeComponent from '../Components/ResumeComponent/ResumeComponent.js';
import Footer from '../Components/Footer/Footer.js';
import BannerSmall from '../Components/BannerSmall/BannerSmall.js';

const Resume = () => {
  return (
    <div className="resume-page">
      <BannerSmall />
      <ResumeComponent />
      <Footer />
    </div>
  )
}

export default Resume;
