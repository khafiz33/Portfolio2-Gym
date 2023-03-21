// import css
import './About.css';
// import functions
import React from 'react';
// import components
import Header from '../../components/Header/Header';
// import images
import HeaderImage from '../../assets/images/header_bg_1.jpg';
import StoryImage from '../../assets/images/about1.jpg'
// import VisionImage from '../../assets/images/about2.jpg'
// import MissionImage from '../../assets/images/about3.jpg'

function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maiores doloribus, eligendi incidunt modi rerum debitis consequatur molestias?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our StoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntue?
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntue?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntue?
            </p>
          </div>
          {/* <div className="about__section-image">
            <img src={VisionImage} alt="Our VisionImage" />
          </div> */}
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          {/* <div className="about__section-image">
            <img src={MissionImage} alt="Our MissionImage" />
          </div> */}
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores fugit ad neque quo, quas eius quam at sunt quod in atque nulla minus nam impedit tempore consectetur esse quibusdam voluptatum optio nemo! Aperiam veritatis delectus commodi. Minima tempora voluptates natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam harum corrupti quas voluptate, perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntue?
            </p>
            <p>
              Perferendis consectetur veritatis veniam, ratione, distinctio iste dignissimos alias ipsum minima consequuntue?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;