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
  
  const name = "Excursy - Blockchain tech";
  const title = name;
  const description = "Excursy is a landing page designed for blockchain tech companies";
  const url = "https://precious-platypus-443963.netlify.app/";

  return (
    <>
      <Head>     
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta
          property="og:site_name"
          content={ name }
        />
        <meta property="og:title" content={ title } />
        <meta
          property="og:description"
          content={ description }
        />
        {/* <!-- Image to display -->  */}
        <meta
          property="og:image"
          content={ url + "preview.jpg" }
        />

        {/* <!-- No need to change anything here -->  */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Website to visit when clicked social medias-->  */}
        <meta
          property="og:url"
          content={ url }
        ></meta>  
        
        <title>{ title }</title>       
        
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
