import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import styles from './presentation.module.css'

export default function Presentation() {
	const [showText, setShowText] = useState('')
	const [cursorState, setCursorState] = useState('|')
	const [percent, setPercent] = useState(0)
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

		const loading = setInterval(() => {
			setPercent((prev) => {
				if (prev >= 100) {
					clearInterval(loading)
					return 100
				}
				return prev + 1
			})
		}, 100)

		// Efeito de cursor piscando
		const cursorInterval = setInterval(() => {
			setCursorState((prev) => (prev === '|' ? '' : '|')); 
		}, 500)
		
		// Timer para transição para a próxima página
		const timeoutId = setTimeout(() => {
			navigate('/content')
		}, 5900) 

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
						initial={{ opacity: 0, scale: 0.8, y: 80 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 2, delay: 2.5 }}
					/>
					<h1>
						{showText}
						<span className={styles.cursorBar}>{showText.length < fullText.length ? cursorState : ''}</span>
					</h1>
				</div>
				<div className={styles.subTitleContainer}>
					<motion.div
						className={styles.subTitle}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 2, delay: 2.5 }}
					>
						<h2>UX/UI</h2>
						<h3>Designer</h3>
					</motion.div>
					{/*<motion.p
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 2, delay: 3.5 }}
					>Apaixonada por transformar <span>problemas</span> em <span>soluções digitais</span> acessíveis e intuitivas.</motion.p>*/}
				</div>
			</div>
			<p className={styles.loadingPercent}>{percent}%</p>
			{/*<motion.h4
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2, delay: 4.5 }}
			>Vem conhecer meu cantinho!</motion.h4>
			<motion.img
				className={styles.arrowDown}
				onClick={() => navigate('/content')}
				src="/imgs/downarrow.svg"
				alt="flecha apontando para baixo"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2, delay: 4.5 }}
			/>*/}
		</motion.section>
	)
}