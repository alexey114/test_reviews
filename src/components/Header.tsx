import { Component } from 'react'
import Selector from './Selector'
import Watch from './Watch'

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<img
					src='https://cdnstatic.rg.ru/crop980x654/uploads/images/220/27/40/iStock-520889996.jpg'
					alt='Logo'
					className='header-logo'
				/>
				<Watch />
				<Selector />
			</header>
		)
	}
}

export default Header
