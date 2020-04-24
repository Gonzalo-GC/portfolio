import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ButtonLink from './components/ButtonLink';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <ButtonLink />
        <About/>
        <Projects />
        <Contact/>

        <div className="footer">
          <h3>Designed by
          <a href="https://www.linkedin.com/in/gonzalo-gallego-cardo-754655151/"
              target="_blank"
              rel="noopener noreferrer"> me
              </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
