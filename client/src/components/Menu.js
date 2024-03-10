import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		 <header id="header" className="fixed-top d-flex align-items-center">
		    <div className="container d-flex align-items-center">

		      <h1 className="logo me-auto"><a href="/"><img src="images/logo.png" alt="EaseCorps" title="EaseCorps"/></a></h1>
		    <nav className="navbar" id="navbar">
		      <ul>
			<li>
			  <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
			</li>
			<li>
			  <NavLink to="/about" activeclassname="active">About</NavLink>
			</li>
			<li>
			  <NavLink to="/contact" activeclassname="active">Contact</NavLink>
			</li>
			{/* Add more navigation links as needed */}
		      </ul>
		    </nav>
			</div>
		</header>
	  );
}

export default Menu
