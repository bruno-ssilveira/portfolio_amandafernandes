import styles from './home.module.css'
import { motion } from 'framer-motion'
import { AiFillBehanceCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
	return (
		<section className={styles.homeContainer}>
			<div className={styles.mainContent}>
				<div className={styles.whoAmIContainer}>
					<div className={styles.whoAmI}>
						<motion.h1
							initial={{ opacity: 0, scale: 0.8, y: 80 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ duration: 2, delay: 0 }}
						>Sou Amanda Passos,</motion.h1>
						<h2>UX/UI Designer</h2>
					</div>
					<h3>
						Apaixonada por criar interfaces intuitivas, acessíveis e 
						centradas no usuário. Meu objetivo é <span>transformar experiências </span> 
						digitais em algo fluido, envolvente e funcional.
					</h3>
					<div className={styles.network}>
						<a href="https://www.behance.net/amandagpf" target='_blank' title='Behance'> <AiFillBehanceCircle /> </a>
						<a href=""> <AiFillLinkedin /> </a>
						<a href=""> <AiFillGithub /> </a>
					</div>
				</div>

				<div className={styles.lastProjectsContainer}>
					<h1>Últimos projetos publicados:</h1>
					<div className={styles.lastProjects}>
						<div className={styles.projectCardIos}>
							<h2>Habilita Já</h2>
							
						</div>
						<div className={styles.projectCardAndroid}>

						</div>
					</div>
				</div>
			</div>
		</section>
	)
}