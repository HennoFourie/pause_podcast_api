import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <>
    <div className='bg-dark h-screen overflow-hidden'>
      <Head>
        <title>Pause</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/meta/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/meta/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/meta/favicon-16x16.png" />
        <link rel="manifest" href="/assets/meta/site.webmanifest" />
        <link rel="mask-icon" href="/assets/meta/safari-pinned-tab.svg" color="#488b49" />
        <link rel="shortcut icon" href="/assets/meta/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Pause" />
        <meta name="application-name" content="Pause" />
        <meta name="msapplication-TileColor" content="#488b49" />
        <meta name="msapplication-config" content="/assets/meta/browserconfig.xml" />
        <meta name="theme-color" content="#488b49" />
      </Head>

      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  </>
  )
}

export default Home
