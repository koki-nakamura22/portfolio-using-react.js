import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../css/App.css';
import NavigationBar from './components/navigation-bar';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <NavigationBar />

        {/* Header */}
        <Header />
      </div>
    );
  }
}

export default App;
