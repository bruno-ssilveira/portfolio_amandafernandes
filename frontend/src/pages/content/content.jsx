import { useState } from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
import styles from './content.module.css'
import { motion } from 'framer-motion'
import Home from '../home/home.jsx'
import Projetos from '../projetos/projetos.jsx'


export default function Content() {
	const [page, setPage] = useState('home')

	return(
		<section className={styles.contentContainer}>
			<Navbar setPage={setPage} page={page}/>

			{page === 'home' && <Home />}
			{page === 'projetos' && <Projetos />}
			{page === 'sobremim' && <Sobremim />}
			{page === 'experiencia' && <Experiencia />}
			{page === 'falecomigo' && <Falecomigo />}
		</section>
	)
}