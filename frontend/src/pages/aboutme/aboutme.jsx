import { useState } from 'react';
import styles from './aboutme.module.css';
import { motion } from 'framer-motion'

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
							<p
							onClick={() => setProcess('imersao')}
							className={proccess === 'imersao' ? styles.myProccessActive : ''}
							> Imersão </p>

							<p
							onClick={() => setProcess('ideacao')}
							className={proccess === 'ideacao' ? styles.myProccessActive : ''}
							> Ideação </p>

							<p
							onClick={() => setProcess('prototipacao')}
							className={proccess === 'prototipacao' ? styles.myProccessActive : ''}
							> Prototipação </p>

							<p
							onClick={() => setProcess('auprovacao')}
							className={proccess === 'auprovacao' ? styles.myProccessActive : ''}
							> AUprovação </p>
						</div>

						<div className={styles.myProccessContentContainer}>
							<div className={styles.myProccessContent}>
								{proccess === 'imersao' &&
									<motion.div
										className={styles.myProccessContentMotion}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 2.5 }}
									>
										<h1>
											Aqui, o foco é entender profundamente o problema. Quais são as dores do usuário? O que ele precisa? O que deseja? Analiso diferentes perfis, seus comportamentos e o contexto em que estão inseridos. Também investigo o mercado para identificar oportunidades e possíveis diferenciais.
										</h1>

										<div className={styles.myProccessImersao}>
											<div className={styles.imersaoTopics}>
												<h2>Como faço isso?</h2>

												<div className={styles.imersaoTopicsList}>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Pesquisa Desk
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Matriz CSD
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Benchmarking
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Entrevistas
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Mapa de Empatia
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Personas
													</p>
												</div>
											</div>
											<img
												className={styles.imgImersao} src="/imgs/imersaoImg.svg" alt="Foto Imersão" />
										</div>
									</motion.div>
								}

								{proccess === 'ideacao' &&
									<motion.div
										className={styles.myProccessContentMotion}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 2.5 }}
									>
										<h1>
											Essa é a fase de explorar e validar soluções. Muitas ideias já começam a surgir durante a imersão, mas aqui eu filtro as que realmente fazem sentido tanto para o usuário quanto para o negócio.
										</h1>

										<div className={styles.myProccessImersao}>
											<div className={styles.imersaoTopics}>
												<h2>O que uso para isso?</h2>

												<div className={styles.imersaoTopicsList}>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Brainstorming
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Fluxo do Usuário
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Crazy Eights
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Matriz de posicionamento
													</p>
												</div>
											</div>
											<img className={styles.imgIdeacao} src="/imgs/ideacaoImg.svg" alt="Foto Ideação" />
										</div>
									</motion.div>
								}

								{proccess === 'prototipacao' &&
									<motion.div
										className={styles.myProccessContentMotion}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 2.5 }}
									>
										<h1>
											Depois de definir as ideias que vão para frente, é hora de dar forma ao design. Crio telas de alta fidelidade, Style Guide e organizo um Design System quando necessário. Se o projeto incluir testes de usabilidade, essa é a fase em que são coletados insights valiosos para ajustes. Por fim, realizo o handoff para garantir que o desenvolvimento aconteça com fluidez e sem muitas dúvidas.
										</h1>

										<div className={styles.myProccessImersao}>
											<div className={styles.imersaoTopics}>
												<h2>O que entra nessa etapa?</h2>

												<div className={styles.imersaoTopicsList}>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Protótipo de alta fidelidade
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Style Guide
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Design System
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Testes de Usabilidade
													</p>
													<p>
														<img src="/imgs/pinkArrow.svg" alt="Flecha rosa >" /> Handoff
													</p>
												</div>
											</div>
											<img className={styles.prototipationImg} src="/imgs/prototipationImg.svg" alt="Foto Prototipação" />
										</div>
									</motion.div>
								}

								{proccess === 'auprovacao' &&
									<motion.div
										className={styles.myProccessAuprovacao}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 2.5 }}
									>
										<img src="" alt="" />
										<h1>
											E por último, mas não menos importante... temos a AUprovação! Enquanto desenvolvo as telas, conto com a supervisão rigorosa do Mark, um caramelo muito amoroso, e da Estrela, minha branquinha cheia de energia. Eles garantem que tudo esteja no caminho certo - ou pelo menos que eu faça pausas estratégicas para carinho e brincadeiras.
										</h1>
									</motion.div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}