import React, { Component } from 'react';

import Header from './components/Header';
import GUI from './components/GUI';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GUI />
        <Footer />
      </div>
    );
  }
}

export default App;
