import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		 <header id="header" className="fixed-top d-flex align-items-center">
		    <div className="container d-flex align-items-center">

		      <h1 className="logo me-auto"><a href="/">Recruitmemt</a></h1>
		    <nav className="navbar" id="navbar">
		      <ul>
			<li>
			  <NavLink exact to="/" activeClassName="active">Home</NavLink>
			</li>
			<li>
			  <NavLink to="/about" activeClassName="active">About</NavLink>
			</li>
			<li>
			  <NavLink to="/contact" activeClassName="active">Contact</NavLink>
			</li>
			{/* Add more navigation links as needed */}
		      </ul>
		    </nav>
			</div>
		</header>
	  );
}

export default Menu
