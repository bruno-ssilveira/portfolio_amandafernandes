import styles from './myprojects.module.css'
import { motion } from 'framer-motion'

export default function MyProjects({setProject}) {

	return(
		<div className={styles.projetosContainer}>
			<div className={styles.mainContent}>
				<motion.h1
					className={styles.projetosTitle}
				>
					Meus projetos
				</motion.h1>

				<div className={styles.projetosCardsContainer}>
					<div className={styles.projetosCard} onClick={() => setProject('teste')}>
						<div className={styles.projetosCardContent}>
							<div className={styles.projetosCardInfo}>
								<div className={styles.projetosCardTitle}>
									<h1>Habilita Já</h1>
									<h2 className={styles.tagiOS}>iOS</h2>
								</div>
								<h3>Junho, 2024.</h3>
							</div>
							<img src="./imgs/habilitaja.svg" alt="" />
						</div>
					</div>
					<div className={styles.projetosCard}>
						<div className={styles.projetosCardContent}>
							<div className={styles.projetosCardInfo}>
								<div className={styles.projetosCardTitle}>
									<h1>Habilita Já</h1>
									<h2 className={styles.tagiOS}>iOS</h2>
								</div>
								<h3>Junho, 2024.</h3>
							</div>
							<img src="./imgs/habilitaja.svg" alt="" />
						</div>
					</div>
					<div className={styles.projetosCard}>
						<div className={styles.projetosCardContent}>
							<div className={styles.projetosCardInfo}>
								<div className={styles.projetosCardTitle}>
									<h1>Habilita Já</h1>
									<h2 className={styles.tagiOS}>iOS</h2>
								</div>
								<h3>Junho, 2024.</h3>
							</div>
							<img src="./imgs/habilitaja.svg" alt="" />
						</div>
					</div>
					<div className={styles.projetosCard}>
						<div className={styles.projetosCardContent}>
							<div className={styles.projetosCardInfo}>
								<div className={styles.projetosCardTitle}>
									<h1>Habilita Já</h1>
									<h2 className={styles.tagiOS}>iOS</h2>
								</div>
								<h3>Junho, 2024.</h3>
							</div>
							<img src="./imgs/habilitaja.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}