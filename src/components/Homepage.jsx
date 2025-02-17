import { useQuery } from '@tanstack/react-query'
import { Col, Row, Statistic, Typography } from 'antd'
import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'
import { fetchStats } from '../services/CryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
const { Title } = Typography
function Homepage() {
	const { isLoading, data } = useQuery({
		queryKey: ['coin'],
		queryFn: fetchStats,
	})

	const globalStats = data?.data

	if (isLoading) return <h1>Loading...</h1>
	return (
		<>
			<Title level={2} className='heading'>
				Global Crypto Stats
			</Title>
			<Row>
				<Col span={12}>
					<Statistic
						title='Total Cryptocurrencies'
						value={millify(globalStats.totalCoins)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Exchanges'
						value={millify(globalStats.totalExchanges)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Market Cap'
						value={millify(globalStats.totalMarketCap)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total 24h Volume'
						value={millify(globalStats.total24hVolume)}
					/>
				</Col>
				<Col span={12}>
					<Statistic
						title='Total Markets'
						value={millify(globalStats.totalMarkets)}
					/>
				</Col>
			</Row>
			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Top to 10 Cryptocurrencies in the world
				</Title>
				<Title level={2} className='show-more'>
					<Link to='/cryptocurrences'>Show More</Link>
				</Title>
			</div>
			<Cryptocurrencies simplified={true} />

			<div className='home-heading-container'>
				<Title level={2} className='home-title'>
					Latest Crypto News
				</Title>
				<Title level={2} className='show-more'>
					<Link to='/news'>Show More</Link>
				</Title>
			</div>
			<News simplified />
		</>
	)
}

export default Homepage
