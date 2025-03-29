import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar({ setPage, page }) {
	return(
		<>
			<nav className={styles.navbarContainer}>
				<section className={styles.myIdNavigation}>
					<div className={styles.myId}>
						<img src="./imgs/amanda.svg" alt="foto de perfil" />
						<div className={styles.nameJob}>
							<h1>Amanda Passos</h1>
							<h2>UX/UI Designer</h2>
						</div>
					</div>
					<div className={styles.navigation}>
						<NavLink onClick={ () => setPage('home') } className={page === 'home' ? styles.active : ''}>Home</NavLink>
						<NavLink onClick={ () => setPage('projetos') } className={page === 'projetos' ? styles.active : ''}>Projetos</NavLink>
						<NavLink onClick={ () => setPage('sobremim') } className={page === 'sobremim' ? styles.active : ''}>Sobre mim</NavLink>
						<NavLink onClick={ () => setPage('experiencia') } className={page === 'experiencia' ? styles.active : ''}>Experiência</NavLink>
						<NavLink onClick={ () => setPage('falecomigo') } className={page === 'falecomigo' ? styles.active : ''}>Fale comigo</NavLink>
					</div>
				</section>
			</nav>
		</>
	)
}