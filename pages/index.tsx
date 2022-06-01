import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/navbar/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Excursy - Blockchain Tech</title>       
        <link rel="icon" type="image/png" href="./ico.png" />
      </Head>
      <Navbar/>
      
    </>
  )
}

export default Home
