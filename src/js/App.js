import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../css/App.css';
import NavigationBar from './components/navigation-bar';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Header */}
        <Header />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
