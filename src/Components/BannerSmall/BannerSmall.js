import React from 'react';
import { Link } from 'react-router-dom';
// import NavPages from '../Nav/NavPages.js';

const BannerSmall = () => (
  <div className="banner-small"> 
    <div className="austin-from-austin">
      <Link to='/'>Austin from Austin</Link>
    </div>
    {/* <NavPages /> */}
  </div>
)

export default BannerSmall;
