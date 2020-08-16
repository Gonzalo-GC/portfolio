import React from "react";
import Header from './_pages/Header';
import About from './_pages/About';
import Contact from './_pages/Contact';
/* import ButtonLink from './_components/ButtonLink';
import Projects from './_pages/Projects';*/
import Footer from './_pages/Footer'; 

const App = () => (
      <div className="App">
        <Header/>
        <About/>
        <Contact/>
        {/*<ButtonLink />        
        <Projects />
        <Contact/>*/}
        <Footer />
      </div>
);


export default App;
