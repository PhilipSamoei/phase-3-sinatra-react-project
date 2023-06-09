import React, { useEffect, useState } from 'react';
import '../Css/Slideshow.css';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      showSlides();
    }, 7000);

    return () => clearTimeout(timer);
  }, [slideIndex]);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 6);
  };

  return (
    <div className="slideshow">
    <h3>Trending movies</h3>
      <div className="slideshow-container">
        <div className={`mySlides fade ${slideIndex === 0 ? 'active' : ''}`}>
          <img
            src="https://images.hdqwalls.com/wallpapers/captain-america-civil-war-movie-poster.jpg"
            alt="Slide 1"
          />
          <div className="text">CIVIL WARS</div>
        </div>

        <div className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}>
          <img
            src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg"
            alt="Slide 2"
          />
          <div className="text">WOOD</div>
        </div>

        <div className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}>
          <img
            src="https://marketplace.canva.com/EAE_E8rjFrI/1/0/1131w/canva-minimal-mystery-of-forest-movie-poster-ggHwd_WiPcI.jpg"
            alt="Slide 3"
          />
          <div className="text">MYSTERY OF FOREST</div>
        </div>

        <div className={`mySlides fade ${slideIndex === 3 ? 'active' : ''}`}>
          <img
            src="https://cdn.wallpapersafari.com/63/91/EGjUcK.jpg"
            alt="Slide 4"
          />
          <div className="text">LOOPER</div>
        </div>

        <div className={`mySlides fade ${slideIndex === 4 ? 'active' : ''}`}>
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Snowpiercer-Show-Differences-From-Film.jpg"
            alt="Slide 5"
          />
          <div className="text">SNOWPIERCER</div>
        </div>

        <div className={`mySlides fade ${slideIndex === 5 ? 'active' : ''}`}>
          <img
            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/01/911562-tenet.jpg"
            alt="Slide 6"
          />
          <div className="text">TENET</div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
