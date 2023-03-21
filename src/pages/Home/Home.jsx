// import css
import './Home.css';
// import functions
import React from 'react';
// import components
import Header from '../../components/MainHeader/MainHeader';
import Programs from '../../components/Programs/Programs';
import Values from '../../components/Values/Values';
import FAQs from './../../components/FAQs/FAQs';
import Testimonials from '../../components/Testimonials/Testimonials';

function Home() {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home;