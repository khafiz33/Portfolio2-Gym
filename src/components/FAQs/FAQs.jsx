// import css
import './FAQs.css';
// import functions
import React from 'react';
import {faqs} from '../../data';
// import components
import SectionHead from './../SectionHead/SectionHead';
import FAQ from '../FAQ/FAQ';
// import icons
import {FaQuestion} from 'react-icons/fa';

function FAQs() {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {
            faqs.map(({id, question, answer}) => {
              return <FAQ key={id} question={question} answer={answer} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs;