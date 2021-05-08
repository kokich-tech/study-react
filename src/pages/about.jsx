import Head from 'next/head'
import { Footer } from 'src/components/components/Footer'
import { Header } from 'src/components/components/Header'
import { Main } from 'src/components/components/Main'
import styles from 'src/components/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about"/>
      <Footer />
    </div>
  )
}
