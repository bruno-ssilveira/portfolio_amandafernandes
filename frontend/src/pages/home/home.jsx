import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'

export default function Home() {
	const [showText, setShowText] = useState('')
	const [cursorState, setCursorState] = useState('|')
	const navigate = useNavigate()
	const fullText = 'Amanda Passos'

	useEffect(() => {
		let index = 0

		// Efeito de digitação
		const typingInterval = setInterval(() => {
			setShowText(fullText.slice(0, index + 1))
			index++

			if (index >= fullText.length) {
				clearInterval(typingInterval)
			}
		}, 200)

		// Efeito de cursor piscando
		const cursorInterval = setInterval(() => {
			setCursorState((prev) => (prev === '|' ? '' : '|')); 
		}, 500)

		// Timer para transição para a próxima página
		const timeoutId = setTimeout(() => {
			navigate('/main')
		}, 155000)

		// Cleanup
		return () => {
			clearInterval(typingInterval)
			clearInterval(cursorInterval)
			clearTimeout(timeoutId)
		}
	}, [navigate])

	return (
		<motion.section
			className={styles.homeContainer}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<div className={styles.title}>
				<div className={styles.namePhoto}>
					<motion.img
						src='/imgs/amanda.svg'
						alt="foto de perfil"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 10 }}
					/>
					<h1>
						{showText}
						{showText.length < fullText.length ? cursorState : ''}
					</h1>
				</div>
				<div className={styles.subTitleContainer}>
					<div className={styles.subTitle}>
						<h2>UX/UI</h2>
						<h3>Designer</h3>
					</div>
					<p>Apaixonada por transformar <span>problemas</span> em <span>soluções digitais</span> acessíveis e intuitivas.</p>
				</div>
			</div>
			<h4>Vem conhecer meu cantinho!</h4>
			<img className={styles.arrowDown} src="/imgs/downarrow.svg" alt="flecha apontando para baixo" />
		</motion.section>
	)
}