import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return  Component.getLayout(<Component {...pageProps} />) 
  }

  return (
  <>
  <Head>
        <title>Pok Phoenix</title>
        <meta name='description' content='Next tutorial' />
    </Head>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp
