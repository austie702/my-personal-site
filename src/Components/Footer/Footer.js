import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Resume from '../../Pages/Resume.js';
import About from '../../Pages/About.js';
import Contact from '../../Pages/Contact.js';
class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <nav>
          <Link to='/resume'>Resume</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <div className="social-media">
            <a href="https://github.com/austie702"><FontAwesomeIcon icon={['fab', 'github']} /> </a>
            <a href="https://twitter.com/austie702"><FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
            <a href="https://vimeo.com/austinhowes/"><FontAwesomeIcon icon={['fab', 'vimeo']} /> </a>
          </div>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/resume' component={Resume} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </nav>
        <img src={ require('../../Images/LambdaLogo.png') } alt='Lambda Logo Grayscale' />
      </footer>
    )
  }
}

export default Footer;
