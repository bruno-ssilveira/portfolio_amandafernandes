import { useState } from 'react'
import Navbar from '../../components/navbar/navbar.jsx'
import styles from './content.module.css'
import Home from '../home/home.jsx'
import Projetos from '../projetos/projetos.jsx'
import AboutMe from '../aboutme/aboutme.jsx'
import Experiencia from '../experiencia/experiencia.jsx'

export default function Content() {
	const [page, setPage] = useState('home')
	const [project, setProject] = useState('myProjects')

	return(
		<section className={styles.contentContainer}>
			<Navbar setPage={setPage} page={page} setProject={setProject}/>

			{page === 'home' && <Home setPage={setPage} setProject={setProject} />}
			{page === 'projetos' && <Projetos project={project} setProject={setProject} />}
			{page === 'sobremim' && <AboutMe />}
			{page === 'experiencia' && <Experiencia />}
			{page === 'falecomigo' && <Falecomigo />}
		</section>
	)
}