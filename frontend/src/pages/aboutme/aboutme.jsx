import { useState } from 'react';
import styles from './aboutme.module.css';

export default function AboutMe() {
	const [proccess, setProcess] = useState('imersao');

	return(
		<section className={styles.aboutMeContainer}>
			<div className={styles.aboutMeContent}>
				<div className={styles.aboutMe}>
					<h1>Sobre mim</h1>
					<h2>Sou Amanda Passos, uma UX/UI Designer completamente apaixonada por tecnologia e experiência do usuário. Amo jogar, tanto os jogos digitais quanto os de tabuleiro. Nos finais de semana, gosto de andar de patins na orla, aquele momento em que o vento bate e parece que a liberdade tem forma. E, de vez em quando, brinco de escrever umas poesias.</h2>
				</div>

				<div className={styles.degreesContainer}>
					<h1>Formações</h1>
					<div className={styles.degrees}>
						<div className={styles.degreeCard1}>
							<img src="/imgs/logoUniasselvi.svg" alt="Logo Uniasselvi" />
							<div className={styles.degreeInfo}>
								<p>Período: 2023 - atual</p>
								<p>Graduação - Design Gráfico</p>
								<p>Faculdade UNIASSELVI</p>
							</div>
						</div>
						<div className={styles.degreeCard2}>
							<img src="/imgs/logoTicTrilhas.svg" alt="Logo Uniasselvi" />
							<div className={styles.degreeInfo}>
								<p>Período: 2024</p>
								<p>Mini Residência UX Design</p>
								<p>Tic em Trilhas - PUCRS</p>
							</div>
						</div>
						<div className={styles.degreeCard3}>
							<img src="/imgs/logoGC.svg" alt="Logo Uniasselvi" />
							<div className={styles.degreeInfo}>
								<p>Período: 2023</p>
								<p>UX/UI - Geração Caldeira</p>
								<p>Instituto Caldeira</p>
							</div>
						</div>
						<div className={styles.degreeCard4}>
							<img src="/imgs/logoLiberato.svg" alt="Logo Uniasselvi" />
							<div className={styles.degreeInfo}>
								<p>Período: 2017 - 2021</p>
								<p>Técnico em Química</p>
								<p>Fundação Liberato</p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.usedToolsContainer}>
					<h1>Ferramentas e tecnologias utilizadas:</h1>
					<div className={styles.tools}>
						<img src="/imgs/logoFigma.svg" alt="Logo Figma" />
						<img src="/imgs/logoIlustrator.svg" alt="Logo Illustrator" />
						<img src="/imgs/logoPhotoshop.svg" alt="Logo Photoshop" />
						<img src="/imgs/logoAfterEffects.svg" alt="Logo Photoshop" />
						<img src="/imgs/logoAcrobat.svg" alt="Logo Photoshop" />
						<img src="/imgs/logoJs.svg" alt="Logo Photoshop" />
						<img src="/imgs/logoReact.svg" alt="Logo Photoshop" />
						
					</div>
				</div>

				<div className={styles.myProccessContainer}>
					<div className={styles.myProccessTitle}>
						<h1>Meu processo:</h1>
						<p>Desenvolvo meus fluxos de tela com base no <span>Design Thinking</span>, passando por empatia, definição, ideação, prototipação e testes. O ciclo nunca para, e as ferramentas variam conforme o projeto. Sempre buco a melhor <span>experiência para o usuário</span> e <span>resultados estratégicos para o negócio</span>.</p>
					</div>

					<div className={styles.myProccessTopicsContainer}>
						<div className={styles.myProccessTopics}>
							<p>Imersão</p>
							<p>Ideação</p>
							<p>Prototipação</p>
							<p>AUprovação</p>
						</div>
						<div>
							<div>
								{proccess === 'imersao' &&
									<div>
										teste
									</div>
								}

								{proccess === 'ideacao' &&
									<div>
										oi
									</div>
								}

								{proccess === 'prototipacao' &&
									<div>

									</div>
								}

								{proccess === 'auprovacao' &&
									<div>

									</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}