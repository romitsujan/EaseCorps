import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/common.css';
import '../assets/css/about.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';

const About = () => {
	return <>
		<div className="container">
		<div className="row content">
		  <div className="col-lg-6">
		    <h2>About Us</h2>
		    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
		  </div>
		  <div className="col-lg-6 pt-4 pt-lg-0">
		    <p>
		      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		      culpa qui officia deserunt mollit anim id est laborum
		    </p>
		    <ul>
		      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
		      <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
		      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
		    </ul>
		    <p className="fst-italic">
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
		      magna aliqua.
		    </p>
		  </div>
		</div>

      </div>
	<section id="services" className="services">
		<div className="container">
			<div className="section-title">
			  <h2>Our Services</h2>
			</div>
			<div className="row">

			  <div className="col-md-6">
			    <div className="icon-box">
			      <i className="bi bi-briefcase"></i>
			      <h4><a href="#">HR Consulting</a></h4>
			      <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
			    </div>
			  </div>
			  <div className="col-md-6 mt-4 mt-md-0">
			    <div className="icon-box">
			      <i className="bi bi-card-checklist"></i>
			      <h4><a href="#">RPO</a></h4>
			      <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
			    </div>
			  </div>
			  <div className="col-md-6 mt-4 mt-md-0">
			    <div className="icon-box">
			      <i className="bi bi-bar-chart"></i>
			      <h4><a href="#">Permanent Staffing</a></h4>
			      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
			    </div>

			  </div>
			</div>
		</div>
	</section>
	</>

}

export default About
