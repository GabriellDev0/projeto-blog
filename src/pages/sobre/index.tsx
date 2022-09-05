import { GetStaticProps } from 'next';

import Head from 'next/head';
import styles from './about.styles.module.scss';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

type Content = {
  title: string;
  description: string;
  banner: string;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
};

interface ContentProps {
  content: Content;
}

const About = ({ content }: ContentProps) => {
  return (
    <>
      <Head>
        <title>Dev Resiliente | Quem sou eu?</title>
        <meta
          name="description"
          content="Detalhes sobre quem sou eu e sobre a minha empresa."
        />
        <link rel="canonical" href={`https://www.devresiliente.com/sobre`} />
      </Head>
      <main className={styles.container}>
        <div className={`${styles.containerHeader} container`}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: content.description }}
            ></div>
            <a
              href={content.youtube}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube size={40} />
            </a>
            <a
              href={content.instagram}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href={content.facebook}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook size={40} />
            </a>
            <a
              href={content.linkedin}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin size={40} />
            </a>
          </section>
          <img src={content.banner} alt="Sobre o Dev Resiliente" />
        </div>
      </main>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'about'),
  ]);

  const { title, description, banner, facebook, instagram, youtube, linkedin } =
    response.results[0].data;

  const content = {
    title: RichText.asText(title),
    description: RichText.asHtml(description),
    banner: banner.url,
    facebook: facebook.url,
    instagram: instagram.url,
    youtube: youtube.url,
    linkedin: linkedin.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 60 * 24, // A cada 24 horas ele vai ser revalidado.
  };
};
