import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const NavWithSocialMedia = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/resume'>Resume</Link>
    <Link to='/about'>About</Link>
    <div className="social-media">
      <a href="https://github.com/austie702" target="blank"><FontAwesomeIcon icon={['fab', 'github']} /> </a>
      <a href="https://twitter.com/austie702" target="blank"><FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
      <a href="https://vimeo.com/austinhowes/" target="blank"><FontAwesomeIcon icon={['fab', 'vimeo']} /> </a>
    </div>
  </nav>
)

export default NavWithSocialMedia;
