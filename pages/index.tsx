import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/navbar/navbar';
import { Header } from '../components/sections/header/header';
import { SectionCompanies } from '../components/sections/companies/companies';
import { SectionAbout } from '../components/sections/about/about';
import { SectionOurInterests } from '../components/sections/interests/interests';
import { SectionOurValues } from '../components/sections/ values/values';
import { SectionProjects } from '../components/sections/projects/projects';
import { Footer } from '../components/sections/footer/footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>     
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta
          property="og:site_name"
          content="Excursy - Blockchain tech"
        />
        <meta property="og:title" content="Pod Request Landing Page" />
        <meta
          property="og:description"
          content="Excursy is a landing page designed for blockchain tech companies"
        />
        {/* <!-- Image to display -->  */}
        {/* <!-- Replace   «example.com/image01.jpg» with your own -->  */}
        <meta
          property="og:image"
          content="https://precious-platypus-443963.netlify.app/preview.jpg"
        />

        {/* <!-- No need to change anything here -->  */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Website to visit when clicked social medias-->  */}
        <meta
          property="og:url"
          content="https://precious-platypus-443963.netlify.app/"
        ></meta>
        
        <title>Excursy - Blockchain Tech</title>       
        
      </Head>
      <Navbar />
      <main>
        <Header />
        <SectionCompanies />
        <SectionAbout />
        <SectionOurInterests />
        <SectionOurValues />
        <SectionProjects />
        <Footer/>
      </main>      
    </>
  )
}

export default Home
