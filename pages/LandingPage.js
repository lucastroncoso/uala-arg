import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/LandingPage.module.scss';
import Hero from '../components/Hero/Hero';
import ExampleComponent from '../components/Example/Example';
import BlockWrapper from '../components/BlockWrapper/BlockWrapper';
import classNames from 'classnames';
import pageContent from '../data/SiteMXContent.json';

export default function MainPageAr() {
  const locale = process.env.locale;

  console.log();
  return (
    <>
      <Head>
        <title>Uala Main Page AR</title>
        <meta name="description" content="Ualá" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BlockWrapper>
          <Hero content={pageContent[locale].hero} />
          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/LandingPage.js</code>
          </p>
          <ExampleComponent />
        </BlockWrapper>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
