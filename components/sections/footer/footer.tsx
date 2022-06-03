import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="nv__footer">
      <Link href='/'>
        <a className="logo-link">
          <Image src='/assets/logo.svg' width={62} height={62} alt='' />
          <span className="company">Excursy</span>
        </a>      
      </Link>
      <address className="social-media-contact">
        <Link href='/'>
          <a className="logo-link" aria-label="facebook">
            <Image src='/assets/icon/facebook.svg' width={36} height={36} alt=''/>
          </a>  
        </Link>
         <Link href='/'>
          <a className="logo-link" aria-label="facebook">
            <Image src='/assets/icon/twitch.svg' width={36} height={36} alt=''/>
          </a>  
        </Link>
         <Link href='/'>
          <a className="logo-link" aria-label="facebook">
            <Image src='/assets/icon/linkedin.svg' width={36} height={36} alt=''/>
          </a>  
        </Link>
         <Link href='/'>
          <a className="logo-link" aria-label="facebook">
            <Image src='/assets/icon/github.svg' width={36} height={36} alt=''/>
          </a>  
        </Link>
      </address>
      <ul className="navlink-list">
        <li><Link href='/'><a className="navlink">Home</a></Link></li>
        <li><a className="navlink" href="#about-us">About us</a></li>
        <li><a className="navlink" href="#our-interests">Our interests</a></li>
        <li><a className="navlink" href="#values">Values</a></li>
        <li><a className="navlink" href="#current-projects">Current projects</a></li>
      </ul>
    </footer>
  );
}