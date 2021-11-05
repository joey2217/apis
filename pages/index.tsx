import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import 'rc-notification/assets/index.css'

const Home: NextPage = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      aaa
    </div>
  )
}

export default Home
