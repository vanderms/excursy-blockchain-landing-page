import { Card } from "./card"

export const SectionOurInterests: React.FC = () => {
  return (
    <section className="nv__section-our-interests" id='our-interests'>
      <h2 className="title">Our Interests</h2>
      <p className="description">It&lsquo;s the norm these days to lay out a roadmap that gives stakeholders an indication of the direction that the project aspires to go. Inspired by Elon Musk&lsquo;s 2006 masterplan, these are our skeleton ambitions.</p>
      <div className="cards-group">
        <Card
          title="Blockchain product"
          description="Create something novel that has never been done on the blockchain before Build a product"
          iconSrc="/assets/icon/icon-blockchain.svg"
          href="/"        
        />
         <Card
          title="Quality product"
          description="Create something novel that has never been done on the blockchain before Build a product."
          iconSrc="/assets/icon/icon-quality.svg"
          href="/"        
        />
         <Card
          title="Viable product"
          description="Create something novel that has never been done on the blockchain before Build a product."
          iconSrc="/assets/icon/icon-viable.svg"
          href="/"
        />
      </div>
    </section>
  )
}