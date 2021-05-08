import Head from 'next/head'
import styles from 'src/components/styles/Home.module.css'
import {Footer} from 'src/components/components/Footer'
import { Main } from 'src/components/components/Main'
import { Header } from 'src/components/components/Header'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  )
}
