import styles from './home.module.css'

export default function Home() {

	return (
		<div className={styles.homeContainer}>
			<img src="" alt="" />
			<div className={styles.title}>
				<h3>Amanda Fernandes</h3>
				<div className={styles.subTitle}>
					<h2>UX/UI</h2>
					<h4>Designer</h4>
				</div>
			</div>
			<p>Apaixonada por transformar <span></span>problemas em soluções digitais acessíveis e intuitivas.</p>
			<p>Vem conhecer meu cantinho!</p>
		</div>
	)
}