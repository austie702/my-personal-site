import React from 'react';
import { Link } from 'react-router-dom';

const BannerSmall = () => {
  return (
    <div className="banner-small"> 
      <div className="austin-from-austin">
        <Link to='/'>Austin from Austin</Link>
      </div>
    </div>
  )
}

export default BannerSmall;
