import React from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Image from 'next/image'
import techsImage from '../../public/images/techs.svg'
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
            <p>
              Uma plataforma com cursos que vão do zero até o profissional na
              pratica, direto ao ponto aplicando o que usamos no mercado de
              trabalho. 👊
            </p>
            <a>
              <button className='button'>COMEÇAR AGORA!</button>
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
            <p>
              Você vai descobrir o jeito mais moderno de desenvolver apps
              nativos para iOS e Android, construindo aplicativos do zero até
              aplicativos.
            </p>
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
            <p>
            Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.
            </p>
          </div>
        </section>

        <footer className={`${styles.nextLevelContent} container`}>
            <Image src={techsImage} alt="Tecnologias"/>
            <h2>Mais de <span>15 mil</span> já levaram sua carreira ao próximo nivel.</h2>
            <p>E você vai perder a chance de evoluir de uma vez por todas?</p>
            <a>
              <button className='button'>ACESSAR TURMA!</button>
            </a>
        </footer>
      </main>
    </>
  );
}
