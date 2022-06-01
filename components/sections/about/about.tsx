import Image from "next/image";

export const SectionAbout: React.FC = () => {
  return (
    <section className="nv__section-about" id='about-us'>
      <h2 className="title">About Us</h2>
      <p className="description">We generated names based on a multitude of factors and picked the one that resonated with us the most. Our founder first engaged with the blockchain in 2013</p>
      <div className="wrapper-image">
        <Image src='/assets/about-us-illustration.svg' width={546} height={331} alt=''/>
      </div>
      <div className="indicators-group">
        <p className="indicator">
          <span className="value">600+</span>
          <span className="text">Projects done</span>
        </p>
        <p className="indicator">
          <span className="value">950+</span>
          <span className="text">Happy Clients</span>
        </p>
        <p className="indicator">
          <span className="value">30+</span>
          <span className="text">Employee</span>
        </p>
      </div>
    </section>
  )
}