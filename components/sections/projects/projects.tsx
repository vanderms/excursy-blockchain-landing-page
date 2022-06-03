import { CardProject as Card } from "./card"


export const SectionProjects: React.FC = () => {
  return (
    <section className="nv__section-projects">
      <h2 className="title">Current Projects</h2>
      <div className="container-card">
        <Card
          title="Certified Great Expectations Lover"
          imgSrc="/assets/project02.svg"
          summary="Certified Great Expectations Lover - To add value to An outstanding team can build a product in any industry"
          link="/"        
        />
         <Card
          title="BlockSpace - A solar System"
          imgSrc="/assets/project01.svg"
          summary="Certified Great Expectations Lover - To add value to An outstanding team can build a product in any industry"
          link="/"        
        />
         <Card
          title="0xProxy - A web 3.0 Website"
          imgSrc="/assets/project02.svg"
          summary="Certified Great Expectations Lover - To add value to An outstanding team can build a product in any industry"
          link="/"        
        />
      </div>
    </section>
  )
}