import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
 
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.ibb.co/5x550J4/Blue-And-Yellow-Simple-Travel-Agency-Logo.png" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark  w-full min-h-screen`}>
        <Navbar></Navbar>

    
          <Component    {...pageProps} />

       

        <Footer />
      </main>
    </>
  )
}
