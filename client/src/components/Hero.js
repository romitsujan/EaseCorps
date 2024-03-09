import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';	

const Hero = () => {
	const interval=5000;
	const slideImages = [
	  {'heading':'Unlock Your Dream','para':'<p>Take the next step of your career with us.</p><p>Join EaseCorps for a secure career.</p>','img':'images/1.jpg','hAnimation':'animate__animated animate__fadeInDown','pAnimation':'animate__animated animate__fadeInUp'},
	  {'heading':'Find Your Dream Job Now','para':'Job Search made easier, apply here for relevant positions.','img':'images/6.jpg','hAnimation':'animate__animated animate__backInDown','pAnimation':'animate__animated animate__fadeInRight'},
	  {'img':'images/7.jpg','hAnimation':'animate__animated animate__backInUp','pAnimation':'animate__animated animate__fadeInLeft'},
	  {'img':'images/8.jpg','hAnimation':'animate__animated animate__fadeInRight','pAnimation':'animate__animated animate__fadeInRight'},
	  // Add more images as needed
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [textColor, setTextColor] = useState('#000');
  	const [hAnimation, setHAnimation] = useState(slideImages[0].hAnimation); // Default animation
  	const [pAnimation, setPAnimation] = useState(slideImages[0].pAnimation); // Default animation

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
		if((currentIndex+1)%2!=0)
			setTextColor("#fff");
		else
			setTextColor("#000");
			
	  };

	useEffect(() => {
	    const slideInterval = setInterval(() => {
	      goToNext();
	    }, interval);
	 // Clean up the interval on component unmount
	    return () => clearInterval(slideInterval);
	  }, [currentIndex]); 

	return <><div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
	     <Carousel interval={interval}>
		 <Carousel.Item style={{"backgroundImage": `url(${slideImages[currentIndex].img})`}}>
		  <div className="carousel-container">
		    <div className="container">
			<div className="row" style={{"color":`${textColor}`}}>
				{currentIndex == 0 ? 
					<><div className="col-md-6 col-lg-4"></div>
					<div className="col-md-6 col-lg-8">
					      {slideImages[currentIndex].heading ? <h2 className={slideImages[currentIndex].hAnimation}>{slideImages[currentIndex].heading}</h2>:null}
					      {slideImages[currentIndex].para ? <div className={slideImages[currentIndex].pAnimation} dangerouslySetInnerHTML={{__html: slideImages[currentIndex].para}}></div>:null}
					</div></>
					: 
					<><div className="col-md-6 col-lg-8">
					      {slideImages[currentIndex].heading ? <h2 className={slideImages[currentIndex].hAnimation}>{slideImages[currentIndex].heading}</h2>:null}
					      {slideImages[currentIndex].para ? <div className={slideImages[currentIndex].pAnimation} dangerouslySetInnerHTML={{__html: slideImages[currentIndex].para}}></div>:null}
					</div>
					<div className="col-md-6 col-lg-4"></div></>
				}
			</div>
		    </div>
		  </div>
	      </Carousel.Item>
	 </Carousel>
    </div></>
}

export default Hero
