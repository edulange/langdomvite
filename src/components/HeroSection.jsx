import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

const HeroSection = () => {
	return (
		<div className='hero-container'>
			{/* supondo q eu quero um vídeo */}
			{/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
			<h1>Adventure AWAITS</h1>
			<p>What are you waiting for?</p>
			<div className='hero-btns'>
				<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
					GET STARTED
				</Button>
				<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
					WATCH TRAILER <i className='far fa-play-circle' />
				</Button>
			</div>
		</div>
	)
}

export default HeroSection
