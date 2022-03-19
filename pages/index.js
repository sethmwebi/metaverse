import React from 'react'
import Head from 'next/head'
import Login from "../components/Login"
import { useMoralis } from "react-moralis"

const Home = () => {
  const {isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
      </Head>
      <h1>Welcome to the app</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
