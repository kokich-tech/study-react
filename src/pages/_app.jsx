import 'src/styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
  <Component {...pageProps} />
}

export default MyApp
