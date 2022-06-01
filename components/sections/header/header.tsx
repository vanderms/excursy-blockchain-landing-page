import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="nv__header">
      <h1 className="title">Let's take a tour to <strong>Blockchain</strong> Technology</h1>
      <p className="description">We are highly focused by blockchain technology that will lead positively to the future web.</p>
      <div className="wrapper-image">
        <Image src='/assets/hero-image.svg' width={739} height={390}/>
      </div>
      <div className="cta-container">
        <Link href='/'>
          <a className="cta-primary">Get Started
            <Image src='/assets/icon/arrow.svg' width={8} height={12} alt=''/>
          </a>     
        </Link>
        <Link href='/'>
          <a className="cta-secondary">Learn more</a>
        </Link>
      </div>
    </header>
  )
}