// import css
import './Card.css';
// import functions
import React from 'react';

function Card({className, children}) {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  )
}

export default Card;