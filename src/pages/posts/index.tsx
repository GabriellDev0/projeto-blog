import { GetStaticProps } from 'next';
import { useState } from 'react';

import Head from 'next/head';

import styles from './posts.styles.module.scss';
import Link from 'next/link';

import Image from 'next/image';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Post = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
  page: string;
  totalPage: string;
}

import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from 'react-icons/fi';

const index = ({ posts: postsBlog, page, totalPage }: PostsProps) => {

  const [currentPage, setCurrentPage] = useState(Number(page));
  const [posts, setPosts] = useState(postsBlog || []);

  //Buscar novos posts
  async function reqPost(pageNumber: number){
    const prismic = getPrismicClient()

    const response = await prismic.query([
      Prismic.Predicates.at('document.type', 'post')
    ], {
      orderings: '[document.last_publication_date desc]', // Ordenar pelo mais recente
      fetch: ['post.title', 'post.description', 'post.cover'],
      pageSize: 3,
      page: String(pageNumber)
    })
    return response;
  }

  async function navigatePage(pageNumber: number){
    const response = await reqPost(pageNumber)
    if(response.results.length === 0 ){
      return
    }

    const getPosts = response.results.map((post) => {
      return {
        slug: post.uid,
        title: RichText.asText(post.data.title),
        description:
          post.data.description.find((content) => content.type === 'paragraph')
            ?.text ?? '',
        cover: post.data.cover.url,
        updatedAt: new Date(post.last_publication_date).toLocaleDateString(
          'pt-BR',
          {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          },
        ),
      };
    });
      setCurrentPage(pageNumber)
      setPosts(getPosts)
  }


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
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a key={post.slug}>
                <div className={styles.img}>
                  <Image
                    src={post.cover}
                    alt={post.title}
                    width={720}
                    height={410}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0tbOfDQAC8QFfIUsEkAAAAABJRU5ErkJggg=="
                  />
                </div>
                <strong>{post.title}</strong>
                <time>{post.updatedAt}</time>
                <p>{post.description}</p>
              </a>
            </Link>
          ))}

          <div className={styles.buttonNavigate}>
            {Number(currentPage) >= 2 && (
              <div>
                <button aria-label='First Page' onClick={() => navigatePage(1)}>
                  <FiChevronsLeft size={25} color="#FFF" />
                </button>
                <button aria-label='Previous Page' onClick={() => navigatePage(Number(currentPage - 1))}>
                  <FiChevronLeft size={25} color="#FFF" />
                </button>
              </div>
            )}

            {Number(currentPage) < Number(totalPage) && (
              <div>
                <button aria-label='Next Page' onClick={() => navigatePage(Number(currentPage+1))}>
                  <FiChevronRight size={25} color="#FFF" />
                </button>
                <button aria-label='Last Page' onClick={() => navigatePage(Number(totalPage))}>
                  <FiChevronsRight size={25} color="#FFF" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      orderings: '[document.last_publication_date desc]', // Ordenar pelo mais recente
      fetch: ['post.title', 'post.description', 'post.cover'],
      pageSize: 3,
    },
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description:
        post.data.description.find((content) => content.type === 'paragraph')
          ?.text ?? '',
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });

  return {
    props: {
      posts,
      page: response.page,
      totalPage: response.total_pages,
    },
    revalidate: 60 * 30, // Atualiza a cada 30 minutos.
  };
};
