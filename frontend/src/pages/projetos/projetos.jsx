import { useState } from 'react'
import MyProjects from './myprojects/myprojects.jsx'

export default function Projetos({ project, setProject }) {
	

	return(
		<>
			{project === 'myProjects' && <MyProjects setProject={setProject}/>}
			{project === 'teste' && <h1>teste</h1>}
		</>
	)
}