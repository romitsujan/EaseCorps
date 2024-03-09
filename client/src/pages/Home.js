import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import '../assets/css/common.css';
import '../assets/css/home.css';


const Home = () => {
	return <>
		<Menu/>
		<section id="hero"><Hero/></section>
	</>
}

export default Home
