import { GetStaticProps } from 'next';

import Head from 'next/head';

import styles from '../styles/home.module.scss';

import Image from 'next/image';
import techsImage from '../../public/images/techs.svg';

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Content = {
  title: string;
  titleContent: string;
  linkAction: string;
  mobileTitle: string;
  mobileContent: string;
  mobileBanner: string;
  webTitle: string;
  webContent: string;
  webBanner: string;
};

interface ContentProps {
  content: Content;
}

export default function Home({ content }: ContentProps) {
  return (
    <>
      <Head>
        <title>DevResiliente - Programador e Apaixonado por tecnologia.</title>
        <meta
          name="description"
          content="Página inicial do meu Blog, venha conhecer um pouco e aprenda diversos conteúdos relacionados a programação."
        />
        <link rel="canonical" href="https://www.devresiliente.com/" />
      </Head>
      <main className={`${styles.containerMain} `}>
        <section className={`${styles.sectionCTA} container`}>
          <div className={styles.ctaText}>
            <h1>{content.title}</h1>
            <p>{content.titleContent}</p>
            <a
              href={content.linkAction}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="button">COMEÇAR AGORA!</button>
            </a>
          </div>
          <img
            src="/images/banner-content.png"
            alt="Conteúdos Dev Resiliente"
            width="640px"
            height="640px"
          />
        </section>
        <hr className={styles.division} />
        <section className={`${styles.sectionContent} container`}>
          <div className={styles.sectionText}>
            <h2>{content.mobileTitle}</h2>
            <p>{content.mobileContent}</p>
          </div>
          <img
            src={content.mobileBanner}
            alt="Conteúdos para desenvolvimento de Apps"
          />
        </section>
        <hr className={styles.division} />
        <section className={`${styles.sectionContent} container`}>
          <img
            src={content.webBanner}
            alt="Desenvolvimento de aplicações Web"
          />
          <div className={styles.sectionText}>
            <h2>{content.webTitle}</h2>
            <p>{content.webContent}</p>
          </div>
        </section>

        <footer className={`${styles.nextLevelContent} container`}>
          <Image src={techsImage} alt="Tecnologias" width={300} height={60} />
          <h2>
            Mais de <span>15 mil</span> já levaram sua carreira ao próximo
            nivel.
          </h2>
          <p>E você vai perder a chance de evoluir de uma vez por todas?</p>
          <a
            href={content.linkAction}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="button">ACESSAR TURMA!</button>
          </a>
        </footer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home'),
  ]);
  // Desestruturando cada item que vem do response
  const {
    title,
    sub_title,
    link_action,
    mobile,
    mobile_content,
    mobile_banner,
    title_web,
    web_content,
    web_banner,
  } = response.results[0].data;

  // Transformando os items para texto, pois a maioria vem em ARRAY.
  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle: RichText.asText(mobile),
    mobileContent: RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle: RichText.asText(title_web),
    webContent: RichText.asText(web_content),
    webBanner: web_banner.url,
  };
  return {
    props: {
      content,
    },
    revalidate: 60 * 60 * 24, // A cada 24horas
  };
};
