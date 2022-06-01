import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/navbar/navbar';
import { Header } from '../sections/header/header';
import { SectionCompanies } from '../sections/section-companies/companies';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Excursy - Blockchain Tech</title>       
        <link rel="icon" type="image/png" href="./ico.png" />
      </Head>
      <Navbar />
      <main>
        <Header />
        <SectionCompanies/>        
      </main>
      
    </>
  )
}

export default Home
