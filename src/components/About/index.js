import React from 'react';
import profileImage from "../../assets/images/pProfile-picture.jpg";

function About() {
    return (
      <section className="AboutMe">
        <img className="align-self-center" alt="Darrik in a suit" src={profileImage}/>
        <p className="about align-self-center">Hi, I’m Darrik Crawford. I am a full-stack developer living in Austin, TX and and currently work at Indeed.com as a Senior Account Executive. Working at Indeed has exposed me to many different technical roles including SWEs, Developers and more. Solving problems has always excited me, so I started to lean into this coding path. I’m excited for this next journey. Please reach out with any questions or comments.</p>
      </section>
    );
}

export default About;