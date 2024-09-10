import {
	AreaChartOutlined,
	BulbOutlined,
	HomeOutlined,
	MoneyCollectOutlined,
} from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
	const navigate = useNavigate()

	const handleClick = (key) => {
		navigate(key)
	}

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Avatar src={icon} size='large' />
				<Typography.Title level={3} className='logo'>
					<Link to='/'>Cryptoverse</Link>
				</Typography.Title>
				<Menu
					theme='dark'
					mode='inline'
					items={[
						{
							label: 'Home',
							key: 'home',
							icon: <HomeOutlined />,
							onClick: () => handleClick('/'),
						},
						{
							label: 'Cryptocurrencies',
							key: '/cryptocurrences',
							icon: <AreaChartOutlined />,
							onClick: () => handleClick('/cryptocurrences'),
						},
						{
							label: 'Exchanges',
							key: '/exchanges',
							icon: <MoneyCollectOutlined />,
							onClick: () => handleClick('/exchanges'),
						},
						{
							label: 'News',
							key: '/news',
							icon: <BulbOutlined />,
							onClick: () => handleClick('/news'),
						},
					]}></Menu>
				<Button className='menu-control-container'></Button>
			</div>
		</div>
	)
}

export default Navbar
