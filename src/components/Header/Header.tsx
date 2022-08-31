import React from 'react';

import styles from './header.styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import Link from 'next/link';

const header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a>
          <Image src={logo} alt="Dev Resiliente Logo" />
        </a>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Conteúdos</a>
          </Link>
          <Link href="/">
            <a>Quem somos?</a>
          </Link>
        </nav>
        <a className={styles.readyButton} type="button" href="www.instagram.com/gabriel.dev_">COMEÇAR</a>
      </div>
    </header>
  );
};

export default header;
