import React from 'react';
import Foto from '../images/about_image.jpg';
import data from '../data';

const skillsList = data.skills;
const careerList = data.career;
const about_1 = data.about_1;
const about_2 = data.about_2;

export default function About() {

  var skills = skillsList.map(s => {
    return <div className="column-skills">
      <h3>{s.title}</h3>
      <p>{s.name_1}</p>
      <p>{s.name_2}</p>
      <p>{s.name_3}</p>
    </div>
  })
  var career = careerList.map(s => {
    return <div className="column-skills">
      <h3>{s.enterprise}</h3>
      <p className="date-career">{s.date}</p>
      <p>{s.comment_2}</p>
      <p>{s.comment_3}</p>
    </div>
  })

  return (
    <section id="about">
      <div className="about-content">
        <div className="about-row">
          <div className="about-col-left">
            <h1 className="title">About me</h1>
            <div className="about-description">
              <p>{about_1}</p>
              <p>{about_2}</p>
            </div>
          </div>

          <div className="about-col-right">
            <img className="about-foto" src={Foto} alt="Gonzalo Gallego" />
          </div>
        </div>

        <div className="skills-content">
          <h2>Skills</h2>
          <div class="row">
            <div className="skills-lane" />
            {skills}
          </div>
        </div>

        <div className="skills-content">
          <h2>Career</h2>
          <div class="row">
            <div className="skills-lane" />
            {career}
          </div>
        </div>

      </div>

    </section>
  );
}



