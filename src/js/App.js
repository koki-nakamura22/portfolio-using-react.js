import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../css/App.css';
import NavigationBar from './components/navigation-bar';
import Header from './components/header';
import About from './components/about'
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Header />

        <About />

        <Footer />
      </div>
    );
  }
}

export default App;
