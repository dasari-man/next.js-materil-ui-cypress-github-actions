import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/card'
// import HomePage from '../components/home'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <HomePage /> */}
        <Card>
          hello dasari
        </Card>
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  )
}
