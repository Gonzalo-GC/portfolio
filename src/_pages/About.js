import React from 'react';
import "../_styles/About.scss";
import { myInformation } from '../_config/myInformation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import LaptopIcon from '@material-ui/icons/Laptop';

const About = () => {
  
  return (
    <div className="root-container-about">
      <section id="about">
        <div className="about-container">   
          {/* ABOUT */} 
          <h1 className="title">{myInformation.ABOUT_ME}</h1> 
          <p className="text">          
            I am a very curious guy and passionate about programming. I read several 
            <a href="https://medium.com/@gonzalogallegocardo" target="_blanK" rel="noopener noreferrer"> Medium</a> articles daily (I love learning something new every day)  or even occasionally test languages ​​/ libraries / frameworks in personal mini-projects. For example, I have used this portfolio to learn / improve my CSS knowledge. I have also "played" with the mobile applications although I did not publish any of the two that I did. The first was a platform game (developed in Java and 
            <a href="https://libgdx.badlogicgames.com/" target="_blanK" rel="noopener noreferrer"> LibGDX</a>). In the second I made a part of the FE of a booking management app (using 
            <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer"> Flutter</a>)           
            <br></br><br></br>
            In May (2020) I started programming in JS (using 
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React</a> and 
            <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer"> Node</a>). As a future software engineer I consider that it is necessary to have a deep knowledge about JS and to know the source of certain behaviors. That's why I am reading (and rereading) 
            <a href="https://github.com/getify/You-Dont-Know-JS" target="_blank" rel="noopener noreferrer"> YDKJSY series by Kyle Simpson</a>. 
            I also love following the clean-code philosophy that characterizes JS (JS tips articles are required !)            
            <br></br><br></br>
            My favorite language is Java. Although JS is earning a place in my heart. I would be interested in learning Go and Swift when time allows
          </p>   
        </div> 
      </section>

      <section id="skills">        
        <div className="skills-container">
          {/* SKILLS */}
          <h1 className="skills-title">{myInformation.SKILLS}</h1>
          <div className="title-line"></div>

          {/* PROGRESS BARS */}
          <div className="row">
            <div className="left-progress">
              <p>Java</p>
            </div>
            <div className="right-progress">
              <div className="progress-container">  
                <div className="progress progress-moved">
                  <div className="progress-bar" ></div>                       
                </div> 
              </div>        
            </div>
          </div>

          <div className="row">
            <div className="left-progress">
              <p>C/C++</p>
            </div>
            <div className="right-progress">
              <div className="progress-container">  
                <div className="progress progress-moved">
                  <div className="progress-bar progress-bar2" ></div>                       
                </div> 
              </div>        
            </div>
          </div>

          <div className="row">
            <div className="left-progress">
              <p>JS</p>
            </div>
            <div className="right-progress">
              <div className="progress-container">  
                <div className="progress progress-moved">
                  <div className="progress-bar progress-bar3" ></div>                       
                </div> 
              </div>        
            </div>
          </div>

          <div className="row">
            <div className="left-progress">
              <p>SQL</p>
            </div>
            <div className="right-progress">
              <div className="progress-container">  
                <div className="progress progress-moved">
                  <div className="progress-bar progress-bar4" ></div>                       
                </div> 
              </div>        
            </div>
          </div>

          <div className="row">
            <div className="left-progress">
              <p>Python</p>
            </div>
            <div className="right-progress">
              <div className="progress-container">  
                <div className="progress progress-moved">
                  <div className="progress-bar progress-bar5" ></div>                       
                </div> 
              </div>        
            </div>
          </div>
        </div>
      </section>

      <section id="workEducation">
        <div className="workEducation-container">
            {/* WORK-EDUCATION */}                  
            <h1 className="w-e-title">{myInformation.WORK_EDUCATION}</h1>
            <div className="title-line"></div>   
            <div className="timeLine-line"></div>   
            <div className="timeLine-container">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"              
                date="2016 - 2019"
                dateClassName="date-white"
                iconStyle={{ background: '#fff', color: '#000' }}
                icon={<SchoolIcon />}
                position="right"
              >
                <h3 className="vertical-timeline-element-title">University of Murcia</h3>
                <h4 className="vertical-timeline-element-subtitle">Double Degree: Mathematics + Software Engineering</h4>
                <p>
                  Left Mathematics Degree (40% passed)
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#436f8e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  3436f8e' }}
                date="2019 - Present"
                iconStyle={{ background: '#436f8e', color: '#fff' }}
                icon={<SchoolIcon />}
                position="right"
              >
                <h3 className="vertical-timeline-element-title">University of Murcia</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Engineering</h4>
                <p>
                  I am in the last course
                </p>
              </VerticalTimelineElement>    
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019 (OCT) - 2019 (DEC)"
                dateClassName="date-white"
                iconStyle={{ background: '#fff', color: '#000' }}
                icon={<LaptopIcon />}
                position="left"
              >
                <h3 className="vertical-timeline-element-title">Openred Soluciones, S.L</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Developer (intership)</h4>
                <p>
                  Google Web Designer, Laravel, Ionic
                </p>
              </VerticalTimelineElement>   
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#436f8e', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #436f8e' }}
                date="2020 (MAY) - Present"
                iconStyle={{ background: '#436f8e', color: '#fff' }}
                icon={<LaptopIcon />}
                position="left"
              >
                <h3 className="vertical-timeline-element-title">Baaldev</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Developer (intership)</h4>
                <p>
                  React, Node.js
                </p>
              </VerticalTimelineElement>       
            </VerticalTimeline>
            </div>
            <div className="timeLine-line"></div>           
        </div>      
      </section>  
    </div>        
  );
}

export default About;