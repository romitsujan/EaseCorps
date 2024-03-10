import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';	

const Hero = () => {
	const interval=5000;
	const slideImages = [
	  {'heading':'Unlock Your Dream','para':'<p>Take the next step of your career with us.</p><p>Join EaseCorps for a secure career.</p>','img':'images/1.jpg','hAnimation':'animate__animated animate__fadeInDown','pAnimation':'animate__animated animate__fadeInUp','textColor':'#000'},
	  {'heading':'Find Your Dream Job Now','para':'Job Search made easier, apply here for relevant positions.','img':'images/6.jpg','hAnimation':'animate__animated animate__backInDown','pAnimation':'animate__animated animate__fadeInRight','textColor':'#fff'},
	  {'heading':'Mobile & Web Application Development','para':'<p>We provide our customers world class technologies</p><p>and solutions to turn thier dreams into reality.</p>','img':'images/7.jpg','hAnimation':'animate__animated animate__backInUp','pAnimation':'animate__animated animate__fadeInLeft','textColor':'#000'},
	  {'heading':'Making IT Work Your Business','para':'<p>Helping you identify, implement & manage technology</p><p>based on your business requirements.</p>','img':'images/8.jpg','hAnimation':'animate__animated animate__fadeInRight','pAnimation':'animate__animated animate__fadeInRight','textColor':'#fff'},
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
		{slideImages.map((image,index) => (
		 <Carousel.Item style={{"backgroundImage": `url(${image.img})`}} key={index}>
		  <div className="carousel-container">
		    <div className="container">
			<div className="row" style={{"color":`${image.textColor}`}}>
				{index == 0 ? 
					<><div className="col-md-6 col-lg-4"></div>
					<div className="col-md-6 col-lg-8">
					      {image.heading ? <h2 className={image.hAnimation}>{image.heading}</h2>:null}
					      {image.para ? <div className={image.pAnimation} dangerouslySetInnerHTML={{__html: image.para}}></div>:null}
					</div></>
				: 
					<><div className="col-md-6 col-lg-8">
					      {image.heading ? <h2 className={image.hAnimation}>{image.heading}</h2>:null}
					      {image.para ? <div className={image.pAnimation} dangerouslySetInnerHTML={{__html: image.para}}></div>:null}
					</div>
					<div className="col-md-6 col-lg-4"></div></>
				}	
			</div>
		    </div>
		  </div>
	      </Carousel.Item>
		))}
	 </Carousel>
    </div></>
}

export default Hero
