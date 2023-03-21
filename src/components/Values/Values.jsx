// import css
import './Values.css';
// import functions
import React from 'react';
import { values } from '../../data';
// import images
import Image from '../../assets/images/values.jpg';
// import components
import SectionHead from '../SectionHead/SectionHead';
import Card from '../../UI/Card/Card';
// import icons
import {GiCutDiamond} from 'react-icons/gi';

function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="ValuesImage" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quidem aperiam sapiente?
          </p>
          <div className="values__wrapper">
            {
              values.map(({id, icon, title, desc}) => {
                return <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values;