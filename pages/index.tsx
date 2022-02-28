import type { NextPage } from 'next'
import Head from 'next/head'
import MountainPass from '../components/mountain-pass'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => (
<div className={styles.container}>
  <Head>
    <title>Er Hunnedalen stengt?</title>
    <meta name="description" content="Kjapp og enkelt måte å finne ut om Fjellovergangen mellom Ålgård og Sirdal på Fylkesvei 45 er stengt." />
    <meta name="theme-color" content="#fff" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    </Head>

  <main className={styles.main}>
    <MountainPass />
  </main>

  <footer className={styles.footer}>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}Boon Technologies
    </a>
  </footer>
</div>
)

export default Home
