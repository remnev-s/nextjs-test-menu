import Link from 'next/link';
import styles from '../styles/Home.module.css';

const AboutPage = () => {
  return (
    <>
      {/* <Header /> */}

      <h1> About page </h1>
      <Link href="/">
        <a className={styles.link}> ← Home page</a>
      </Link>
    </>
  );
};

export default AboutPage;
