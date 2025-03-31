import styles from './home.module.css'
import { motion } from 'framer-motion'
import { AiFillBehanceCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {

	return (
		<section className={styles.homeContainer}>
			<div className={styles.mainContent}>
				<div className={styles.whoAmIContainer}>
					<div className={styles.whoAmI}>
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2, delay: 0 }}
						>
							Sou Amanda Passos,
						</motion.h1>
						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2, delay: 1 }}
						>
							UX/UI Designer
						</motion.h2>
					</div>
					<motion.h3
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 4, delay: 2 }}
					>
						Apaixonada por criar interfaces intuitivas, acessíveis e 
						centradas no usuário. Meu objetivo é <span>transformar experiências </span> 
						digitais em algo fluido, envolvente e funcional.
					</motion.h3>
					<div className={styles.network}>
						<motion.a
							href="https://www.behance.net/amandagpf"
							target='_blank'
							title='Behance'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2, delay: 3 }}
						> <AiFillBehanceCircle /> </motion.a>
						<motion.a
							href="https://www.linkedin.com/in/amanda-pfernandes/"
							target='_blank'
							title='LinkedIn'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2, delay: 3.2 }}
						> <AiFillLinkedin /> </motion.a>
						<motion.a
							href="https://github.com/amandagpf"
							target='_blank'
							title='GitHub'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 2, delay: 3.4 }}
						> <AiFillGithub /> </motion.a>
					</div>
				</div>

				<div className={styles.lastProjectsContainer}>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 4, delay: 4 }}
					>Últimos projetos publicados:</motion.h1>
					<div className={styles.lastProjects}>
						<motion.div 
							className={styles.projectCard}
							initial={{ opacity: 0, scale: 0.8, x: 400 }}
							animate={{ opacity: 1, scale: 1, x: 0 }}
							transition={{ duration: 2, delay: 6 }}
						>
							<div className={styles.cardContent}>
								<div className={styles.projectCardTitle}>
									<h2>Habilita Já</h2>
									<div className={styles.tags}>
										<h3>Maio, 2024.</h3>
										<h4 className={styles.tagIOS}>iOS</h4>
									</div>
								</div>
								<motion.img
									src="./imgs/habilitaja.svg"
									alt=""
									whileHover={{
										x: [0, -5, 5, -5, 5, 0], // Movimentos para a direita e esquerda
										transition: { duration: 0.4, ease: "easeInOut" }
									}}
								/>
							</div>
						</motion.div>
						<motion.div
							className={styles.projectCard}
							initial={{ opacity: 0, scale: 0.8, x: 200 }}
							animate={{ opacity: 1, scale: 1, x: 0 }}
							transition={{ duration: 2, delay: 5 }}
						>
							<div className={styles.cardContent}>
								<div className={styles.projectCardTitle}>
									<h2>Fintous</h2>
									<div className={styles.tags}>
										<h3>Fevereiro, 2024.</h3>
										<h4 className={styles.tagAndroid}>Android</h4>
									</div>
								</div>
								<motion.img
									src="./imgs/fintous.svg"
									alt=""
									whileHover={{
										x: [0, -5, 5, -5, 5, 0], // Movimentos para a direita e esquerda
										transition: { duration: 0.4, ease: "easeInOut" }
									}}
								/>
							</div>
						</motion.div>
						<motion.div
							className={styles.projectSeeAll}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 4, delay: 4.2 }}
						>
							<h5>Ver todos <FaArrowRight className={styles.arrowSeeAll}/></h5>
						</motion.div>
					</div>
				</div>

				<div className={styles.myServicesContainer}>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 7 }}
					>Serviços que ofereço:</motion.h1>
					<div className={styles.myServices}>
						<motion.p
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 2, delay: 7.5 }}
						>UX/UI Design</motion.p>
						<motion.p
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 2, delay: 8 }}
						>Mentoria para Júniors (gratuita)</motion.p>
						<motion.p
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 2, delay: 8.5 }}
						>Design System</motion.p>
					</div>
				</div>

				<div className={styles.contactMeContainer}>
					<motion.h1
						className={styles.contactMeTitle}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 9 }}
					>
						Vamos construir algo incrível em conjunto?
					</motion.h1>
					<motion.button
						className={styles.contactMeButton}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2, delay: 9.5 }}
					>
						Fale comigo!
					</motion.button>
				</div>
			</div>
		</section>
	)
}