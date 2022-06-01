import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/navbar/navbar';
import { Header } from '../containers/header/header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Excursy - Blockchain Tech</title>       
        <link rel="icon" type="image/png" href="./ico.png" />
      </Head>
      <Navbar/>
      <Header/>
    </>
  )
}

export default Home
