import Head from 'next/head';

import styles from './posts.styles.module.scss';
import Link from 'next/link';

import Image from 'next/image';
import thumb from '../../../public/images/thumb.png';

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from 'react-icons/fi'

const index = () => {
  return (
    <>
      <Head>
        <title>Blog | Dev Resiliente</title>
        <meta
          name="description"
          content="Página onde possui todas as postagens do meu Blog, aprenda bastante sobre programação."
        />
        <link rel="canonical" href="http://localhost:3000/posts" />
      </Head>
      <main className={`${styles.container} container`}>
        <section className={styles.posts}>
          <Link href="/">
            <a>
              <div className={styles.img}>
              <Image
                src={thumb}
                alt="Post titulo 1"
                width={720}
                height={410}
                quality={100}
              />
              </div>  
              <strong>Criando meu primeiro sistema web.</strong>
              <time>01 SETEMBRO 2022</time>
              <p>Hoje vamos criar o controle de mostrar a senha no input, uma opção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!</p>
            </a>
          </Link>

          <div className={styles.buttonNavigate}>
              <div>
                <button>
                    <FiChevronsLeft size={25} color="#FFF"/>
                </button>
                <button>
                    <FiChevronLeft size={25} color="#FFF"/>
                </button>
              </div>
              
              <div>
                <button>
                    <FiChevronsRight size={25} color="#FFF"/>
                </button>
                <button>
                    <FiChevronRight size={25} color="#FFF"/>
                </button>
              </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default index;
