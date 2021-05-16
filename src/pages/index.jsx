import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { useEffect, useState } from 'react'



export default function Home() {
  const [count, setCount] = useState(1);
  // (1)はfooに反映されている
  
  const handleClick  = (e) =>  {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    
    
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "";

    }
  },[]);

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
