// import css
import './Plans.css';
// import functions
import React from 'react';
import {plans} from '../../data';
// import components
import Header from './../../components/Header/Header';
import Card from './../../UI/Card/Card';
// import images
import HeaderImage from '../../assets/images/header_bg_4.jpg';

function Plans() {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Assumenda perspiciatis asperiores deserunt quisquam, sit iusto consectetur vero similique aliquam. 
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans;