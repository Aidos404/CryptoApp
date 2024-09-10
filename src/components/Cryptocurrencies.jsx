import { useQuery } from '@tanstack/react-query'
import { Card, Col, Input, Row } from 'antd'
import millify from 'millify'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCoin } from '../services/CryptoApi'

const Cryptocurrencies = ({ simplified }) => {
	const { data, isLoading } = useQuery({
		queryKey: ['data'],
		queryFn: fetchCoin,
	})
	const Coins = data?.data?.coins
	const [cryptos, setCryptos] = useState(Coins || [])

	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		if (Coins) {
			const filteredData = Coins.filter((coin) =>
				coin.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
			setCryptos(filteredData)
		}
	}, [Coins, searchTerm])

	if (isLoading) return <h1>Loading...</h1>

	return (
		<div>
			<div className='search-crypto'>
				{simplified ? (
					''
				) : (
					<Input
						placeholder='Search Cryptocurrency'
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				)}
			</div>
			<Row gutter={[32, 32]} className='crypto-card-container'>
				{simplified
					? cryptos.slice(0, 10).map((currency) => (
							<Col
								xs={24}
								sm={12}
								lg={6}
								className='crypto-card'
								key={currency.uuid}>
								<Link to={`/crypto/${currency.uuid}`}>
									<Card
										title={`${currency.rank}. ${currency.name}`}
										extra={
											<img
												className='crypto-image'
												src={`${currency.iconUrl}`}
												alt={currency.name}
											/>
										}
										hoverable>
										<p>Price: {millify(currency.price)}</p>
										<p>Market Cap: {millify(currency.marketCap)}</p>
									</Card>
								</Link>
							</Col>
					  ))
					: cryptos.map((currency) => (
							<Col
								xs={24}
								sm={12}
								lg={6}
								className='crypto-card'
								key={currency.uuid}>
								<Link to={`/crypto/${currency.uuid}`}>
									<Card
										title={`${currency.rank}. ${currency.name}`}
										extra={
											<img
												className='crypto-image'
												src={`${currency.iconUrl}`}
												alt={currency.name}
											/>
										}
										hoverable>
										<p>Price: {millify(currency.price)}</p>
										<p>Market Cap: {millify(currency.marketCap)}</p>
									</Card>
								</Link>
							</Col>
					  ))}
			</Row>
		</div>
	)
}
export default Cryptocurrencies
