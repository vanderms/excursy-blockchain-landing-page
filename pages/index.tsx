import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/navbar/navbar';
import { Header } from '../components/sections/header/header';
import { SectionCompanies } from '../components/sections/companies/companies';
import { SectionAbout } from '../components/sections/about/about';

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
        <SectionCompanies />
        <SectionAbout/>
      </main>
      
    </>
  )
}

export default Home
