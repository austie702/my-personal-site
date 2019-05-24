import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Banner from './Components/Banner/Banner.js';
import IAM from './Components/IAM/IAM.js';
import Work from './Components/Work/Work.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

library.add(fab)

function App() {
  return (
    <div className="App">
      <Banner />
      <IAM />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
