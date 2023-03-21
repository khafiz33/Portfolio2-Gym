// import css
import './Trainer.css';
// import functions
import React from 'react';
// import components
import Card from '../../UI/Card/Card';

function Trainer({image, name, job, socials}) {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer__socials">
        {
          socials.map(({icon, link}, index) => {
            return <a key={index} href={link} rel='noreffer noopener' target='blank'>{icon}</a>
          })
        }
      </div>
    </Card>
  )
}

export default Trainer;