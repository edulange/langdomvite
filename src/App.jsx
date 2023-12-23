import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' exact Component={Home}/>
					<Route path='/products' exact Component={Products}/>
					<Route path='/services' exact Component={Services}/>
					<Route path='/sign-up' exact Component={SignUp}/>
				</Routes>
			</Router>
		</>
	)
}

export default App
