
import './styles.css';
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}