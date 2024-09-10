import { useQuery } from '@tanstack/react-query'
import { Card, Col, Row, Select, Typography } from 'antd'
import React from 'react'
import newsImg from '../images/news.png'
import { fetchNews } from '../services/CryptoApi'

const { Text, Title } = Typography
const { option } = Select
function News() {
	const { data, isLoading } = useQuery({
		queryKey: ['news'],
		queryFn: fetchNews,
	})
	const News = data?.articles
	if (isLoading) return <h1>Loading...</h1>

	return (
		<div>
			<Row gutter={[24, 24]}>
				{News.map((news) => (
					<Col xs={24} sm={12} lg={8}>
						<Card hoverable className='news-card'>
							<a href={news.url} target='_blank' rel='noreferrer'>
								<div className='news-image-container'>
									<Title className='news-title' level={4}>
										{news.title}
									</Title>
									<img
										src={news.urlToImage == null ? newsImg : news.urlToImage}
										alt=''
										style={{ width: '200px' }}
									/>
								</div>
								<p>{news.description}</p>
							</a>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	)
}

export default News
