import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './Carousel.css'; // Import your custom CSS file
import '/Users/kaustubhsagale/Desktop/carproject/src/styles/Carousel.css';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Enable auto-sliding
    autoplaySpeed: 2000, 
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    prevArrow: <div className="slick-arrow slick-prev">Prev</div>,
  };

  const carouselStyle = {
    height: '500px', // Adjust the height as needed
  };

  const imageStyle = {
    width: '100%', // Set the width to 100% to fill the slide
    height: '570px', // Set the height to 100% to fill the slide
    objectFit: 'cover', // Maintain aspect ratio and cover the entire slide
  };

  return (
    <Slider {...settings} style={carouselStyle}>
      <div>
        <img src="https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?size=626&ext=jpg" alt="Image 1" style={imageStyle} />
        <div className="carousel-text">
          <h3>DRIVING AT THE BEST TRACKS FOR BEGINNERS</h3>
          <p>Forever is the best driving school. We have very well trained instructors.</p>
        </div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1596649714492-a8f90ecb3776?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpdmluZyUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D" alt="Image 2" style={imageStyle} />
        <div className="carousel-text">
          <h3>PROFESSIONAL AND FRIENDLY INSTRUCTORS</h3>
          <p>Forever is the best driving school. We have very well trained instructors.</p>
        </div>
      </div>
      <div>
        <img src="https://www.1stinformationideas.com/wp-content/uploads/2020/11/dri4.jpg" alt="Image 3" style={imageStyle} />
        <div className="carousel-text">
          <h3>LEARN SAFE AND GET YOUR LICENSE QUICK</h3>
          <p>Forever is the best driving school. We have very well trained instructors.</p>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
