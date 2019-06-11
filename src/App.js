import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Resume from './Pages/Resume.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import BibleInFive from './Pages/BibleInFive';

const App = () => (
  <div className='app'>
    <Route exact path='/' component={Home} />
    <Route path='/resume' component={Resume} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/portfolio/BibleInFive' component={BibleInFive} />
  </div>
);

export default App;
