import Navbar from '../../components/navbar/navbar.jsx'
import styles from './home.module.css'

export default function Home() {

	return(
		<section className={styles.homeContainer}>
			<div className={styles.navBar}>
				<Navbar />
			</div>
		</section>
	)
}