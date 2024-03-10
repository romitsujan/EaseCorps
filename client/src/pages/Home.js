import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Footer from '../components/Footer';
import '../assets/css/common.css';
import '../assets/css/home.css';


const Home = () => {
	return <>
		<Menu/>
		<section id="hero"><Hero/></section>
		<main id="main">
			 <section id="about" className="about">
				<About/>
			</section>
		</main>
		<Footer/>
	</>
}

export default Home
