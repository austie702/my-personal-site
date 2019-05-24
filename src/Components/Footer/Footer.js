import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <nav>
          <a href="#">Resume</a>
          <a href="#">About</a>
          <a href="#">Hire Me</a>
          <a href="#">Contact</a>
          <div>
            <a href="https://github.com/austie702"><FontAwesomeIcon icon={['fab', 'github']} /> </a>
            <a href="https://twitter.com/austie702"><FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
            <a href="https://vimeo.com/austinhowes/"><FontAwesomeIcon icon={['fab', 'vimeo']} /> </a>
          </div>
        </nav>
        <img src={ require('../../Images/LambdaLogo.png') } alt='Lambda Logo Grayscale' />
      </footer>
    )
  }
}

export default Footer;
