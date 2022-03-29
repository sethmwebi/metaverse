import React from 'react'
import Head from 'next/head'
import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'
import { useMoralis } from 'react-moralis'

const Home = () => {
  const { isAuthenticated } = useMoralis()

  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse</title>
      </Head>
      <h1>Welcome to the app</h1>
      <div className="mx-auto max-w-screen-2xl">
        <Header />
        <Messages />
      </div>

    </div>
  )
}

export default Home
