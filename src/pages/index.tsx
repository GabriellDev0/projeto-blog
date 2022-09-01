import React from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.scss';
export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Dev Resiliente</title>
        <meta
          name="description"
          content="Página inicial do meu Blog, venha conhecer um pouco e aprenda diversos conteúdos."
        />
        <link rel="canonical" href="http://localhost:3000/" />
      </Head>
      <main className={`${styles.containerMain} `}>
        <section className={`${styles.sectionCTA} container`}>
          <div className={styles.ctaText}>
            <h1>Levando você ao próximo nível!</h1>
            <span>
              Uma plataforma com cursos que vão do zero até o profissional na
              pratica, direto ao ponto aplicando o que usamos no mercado de
              trabalho. 👊
            </span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
          </div>
          <img
            src="/images/banner-content.png"
            alt="Conteúdos Dev Resiliente"
          />
        </section>
        <hr className={styles.division} />
        <section className={`${styles.sectionContent} container`}>
          <div className={styles.sectionText}>
            <h2>Aprenda criar aplicativos para Android e iOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver apps
              nativos para iOS e Android, construindo aplicativos do zero até
              aplicativos.
            </span>
          </div>
          <img
            src="/images/financasApp.png"
            alt="Conteúdos para desenvolvimento de Apps"
          />
        </section>
        <hr className={styles.division} />
        <section className={`${styles.sectionContent} container`}>
          <img
            src="/images/webDev.png"
            alt="Desenvolvimento de aplicações Web"
          />
          <div className={styles.sectionText}>
            <h2>Aprenda criar sistemas web</h2>
            <span>
            Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
