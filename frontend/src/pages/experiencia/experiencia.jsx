import styles from './experiencia.module.css';
import React, { useEffect, useState } from "react";

export default function Experiencia() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.experienciaContainer}>
            <div className={styles.experienciaContent}>

            <div className={styles.experienciaContainerTeste}>
            <h2 className={styles.titulo}>Experiência</h2>

<div className={styles.timelineContainer}>
  <div className={styles.verticalLine} />

  <div
    className={styles.fotoFlutuante}
    style={{ transform: `translateY(${scrollY}px)` }}
  >
    <img src="/perfil.png" alt="Perfil" className={styles.perfilImg} />
  </div>

  <div className={styles.card}>
    <span>Setembro de 2024 - atual</span>
    <h3>UX/UI Designer</h3>
    <strong>Amanda Passos</strong>
    <p>
      Atendo meus clientes, criando interfaces digitais que equilibram{" "}
      <strong>estética e funcionalidade</strong>, sempre focando na{" "}
      <strong>experiência do usuário</strong>. Meu objetivo é transformar
      ideias complexas em soluções simples e práticas...
    </p>
  </div>

  <div className={styles.card}>
    <span>Janeiro de 2024 - atual</span>
    <h3>UX/UI Designer</h3>
    <strong>Delta Global - Rands</strong>
    <p>
      Crio telas e fluxos para produtos de rastreamento e gestão de frotas,
      tanto para web quanto mobile...
    </p>
  </div>
</div>
    </div>

            </div>
        </section>
    )
}