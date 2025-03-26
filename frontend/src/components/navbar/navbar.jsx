import styles from './navbar.module.css'

export default function Navbar() {

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
						<p>Home</p>
						<p>Projetos</p>
						<p>Sobre mim</p>
						<p>Experiência</p>
						<p>Fale comigo</p>
					</div>
				</section>
			</nav>
		</>
	)
}