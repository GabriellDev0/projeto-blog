import React from 'react';

import styles from './header.styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import ActiveLink from '../ActiveLink/index';

const header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.headerContent} container`}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Image src={logo} alt="Dev Resiliente Logo" />
          </a>
        </ActiveLink>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>
        <a
          className={`${styles.readyButton} button`}
          href="https://www.instagram.com/gabriel.dev_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          COMEÇAR
        </a>
      </div>
    </header>
  );
};

export default header;
