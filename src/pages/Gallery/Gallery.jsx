// import css
import './Gallery.css';
// import functions
import React from 'react';
// import components
import Header from './../../components/Header/Header';
// import images
import HeaderImage from '../../assets/images/header_bg_3.jpg';

function Gallery() {

  const galleryLength = 15;
  const images = [];
  for(let i = 1; i < galleryLength; i++) {
    images.push(require(`../../assets/images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam, architecto nostrum nobis, est, deserunt odio illum perspiciatis.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`GalleryImage ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery;