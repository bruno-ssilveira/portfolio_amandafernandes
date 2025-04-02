import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import { AiFillBehanceCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Navbar({ setPage, page, setProject }) {
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
						<NavLink onClick={ () => { setPage('projetos'); setProject('myProjects'); } } className={page === 'projetos' ? styles.active : ''}>Projetos</NavLink>
						<NavLink onClick={ () => setPage('sobremim') } className={page === 'sobremim' ? styles.active : ''}>Sobre mim</NavLink>
						<NavLink onClick={ () => setPage('experiencia') } className={page === 'experiencia' ? styles.active : ''}>Experiência</NavLink>
						<NavLink onClick={ () => setPage('falecomigo') } className={page === 'falecomigo' ? styles.active : ''}>Fale comigo</NavLink>
					</div>

					<hr className={styles.line}/>

					<div className={styles.socialMedia}>
						<h1>Minhas redes sociais:</h1>
						<div className={styles.socialMediaLinks}>
							<a href="https://www.behance.net/amandagpf" target='_blank' title='Behance'> <AiFillBehanceCircle className={styles.logoSocialMedia}/> Behance </a>
							<a href="https://www.linkedin.com/in/amanda-pfernandes/" target='_blank' title='LinkedIn'> <AiFillLinkedin className={styles.logoSocialMedia}/> Linkedin </a>
							<a href="https://github.com/amandagpf" target='_blank' title='GitHub'> <AiFillGithub className={styles.logoSocialMedia}/> GitHub </a>
						</div>
					</div>

				</section>
			</nav>
		</>
	)
}