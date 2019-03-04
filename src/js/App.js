import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../css/App.css';
import NavigationBar from './components/navigation-bar';
import Header from './components/header';
import About from './components/about'
import SkillsTags from './components/skills-tags';
import Services from './components/services';
import Resume from './components/resume';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />

        <Header />

        <About />

        <SkillsTags />

        <Services />

        <Resume />

        <Footer />
      </div>
    );
  }
}

export default App;
