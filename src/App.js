import React from 'react'
import './App.css'
// import { Switch, Route, Link } from 'react-router-dom'
// import { Layout, Typography, Space } from 'antd'
import { Layout, Space, Typography } from 'antd'
import { Link, Route, Routes } from 'react-router-dom'
import {
	Cryptocurrences,
	Exchanges,
	Homepage,
	Navbar,
	News,
} from './components/index.js'

const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Routes>
							<Route exact path='/' Component={Homepage}></Route>
							<Route exact path='/exchanges' Component={Exchanges}></Route>
							<Route
								exact
								path='/cryptocurrences'
								Component={Cryptocurrences}></Route>

							<Route exact path='/news' Component={News}></Route>
						</Routes>
					</div>
				</Layout>

				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ textAlign: 'center', color: 'white' }}>
						Cryptoverse <br />
						All rights reserved
					</Typography.Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/exchanges'>Exchanges</Link>
						<Link to='/cryptocurrences'>Cryptocurrences</Link>
						<Link to='/crypto/:coinId'>CryptoDetails</Link>
						<Link to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	)
}

export default App
