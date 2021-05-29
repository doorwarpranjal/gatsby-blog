import React from 'react'
import { Link } from 'gatsby'

import Spacer from '../../atoms/Spacer'
import NavBar from '../../molecules/NavBar'
import useWindowResize from '../../functions/useWindowResize'

import styles from './index.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const LOGO = '../../images/banner/Logo.png'
const SEARCH = '../../images/banner/search.svg'

const Header = () => {
	const [mobile] = useWindowResize()

	return (
		<>
			<header className={styles.container}>
				<Link to='/'>
					<div className='flex-row-space-between'>
						<StaticImage className={styles.logo} src={LOGO} alt='logo' />
						<Spacer x={mobile ? 10 : 20} />
						<h1 className={styles.title}>the intersectional feminist</h1>
					</div>
				</Link>
				<div className='flex-row-space-between'>
					{mobile || <NavBar />}
					{mobile || <Spacer x={40} />}
					<StaticImage
						className={styles.searchIcon}
						src={SEARCH}
						alt='search'
					/>
				</div>
			</header>
			{mobile && <NavBar />}
		</>
	)
}

export default Header
