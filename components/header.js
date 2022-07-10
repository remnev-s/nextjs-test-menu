import React, { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <header className={styles.header}>
      <ul
        onClick={() => setVisible(!visible)}
        className={`${styles.nav} ${visible ? styles.nav__open : ''}`}
      >
        <li className={styles.list}>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/contact">
            <a className={styles.link}>Contact</a>
          </Link>
        </li>
      </ul>
      <div className={styles.burger} onClick={() => setVisible(!visible)}>
        menu
      </div>
    </header>
  );
};
