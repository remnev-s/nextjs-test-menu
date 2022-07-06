import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { Header } from '../components/header';

const Contact = () => {
  return (
    <>
      {/* <Header /> */}
      <h1> Contact page </h1>
      <Link href="/">
        <a className={styles.link}> ← Home page</a>
      </Link>
    </>
  );
};

export default Contact;
