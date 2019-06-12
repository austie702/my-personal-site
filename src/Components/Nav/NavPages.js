import React from 'react';
import { Link } from 'react-router-dom';

const NavPages = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/resume'>Resume</Link>
    <Link to='/about'>About</Link>
  </nav>
)

export default NavPages;
