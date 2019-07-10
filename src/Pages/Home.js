import React, { Component } from 'react';
import '../App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Banner from '../Components/Banner/Banner.js';
import IAM from '../Components/IAM/IAM.js';
import Work from '../Components/Work/Work.js';
import Footer from '../Components/Footer/Footer.js';

library.add(fab)

class App extends Component {
  constructor() {
    super();
    this.state = {
      showDev: true,
      showArt: false
    }
    
    this.artToggleHidden = this.artToggleHidden.bind(this);
    this.devToggleHidden = this.devToggleHidden.bind(this);
  }

  artToggleHidden = () => {
    if (this.state.showDev) this.setState({ showDev: false })
    this.setState({showArt: !this.state.showArt});
  }

  devToggleHidden = () => {
    if (this.state.showArt) this.setState({ showArt: false })
    this.setState({showDev: !this.state.showDev});
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <IAM 
          artToggleHidden={this.artToggleHidden}
          devToggleHidden={this.devToggleHidden}
        />
        <Work
          showDev={this.state.showDev} 
          showArt={this.state.showArt} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
