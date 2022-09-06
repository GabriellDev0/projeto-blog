import Image from 'next/image';
import React from 'react';
import styles from './footer.styles.module.scss';
import logo from '../../../public/images/logo.svg';
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.left}>
          <Image
            src={logo}
            alt="Minha marca Dev Resiliente"
            width={248}
            height={72}
          />
          <div className={styles.footerNavigation}>
                <p>Páginas</p>
                <a href="https://www.devresiliente.com/" target="_blank" rel="noopener noreferrer">Início</a>
                <a href="https://www.devresiliente.com/posts" target="_blank" rel="noopener noreferrer">Postagens</a>
                <a href="https://www.devresiliente.com/sobre" target="_blank" rel="noopener noreferrer">Sobre mim</a>
          </div>
        </div>
      <div className={styles.footerCompany}>
          <p>Copyright©2022-2023, Dev Resiliente. Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
