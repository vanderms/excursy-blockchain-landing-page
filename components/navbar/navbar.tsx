import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState<{ open: boolean }>({ open: false });
  const closeSidebar = () => setSidebar({ open: false });
  const openSidebar = () => setSidebar({ open: true });

  return (
    <nav className="nv__navbar">
      <Link href='/'>
        <a className="logo">
          <div className="wrapper-image">
            <Image width={76} height={76} src='/assets/logo.svg' alt=''/>
          </div>
          <span>Excursy</span>
        </a>
      </Link>
      <div className="sidebar-mobile" data-open={sidebar.open}>
        <button className="close-btn" aria-label="close sidebar menu" onClick={closeSidebar}>
          <Image src='/assets/icon/close.svg' width={20} height={20} alt='' />
        </button>       
        <ul className="navlink-list">
          <li><Link href='/'><a className="navlink">Home</a></Link></li>
          <li><a className="navlink" href="#about-us">About us</a></li>
          <li><a className="navlink" href="#our-interests">Our interests</a></li>
          <li><a className="navlink" href="#values">Values</a></li>
          <li><a className="navlink" href="#current-projects">Current projects</a></li>
        </ul>
        <Link href='/'><a className="call-to-action">Sign Up</a></Link>
      </div>
      <div className="backdrop" data-open={sidebar.open} onClick={closeSidebar}></div>
      <button className="btn-menu" aria-label="menu" onClick={openSidebar}>
        <Image src='/assets/icon/hamburger.svg' width={29} height={24} alt=''/>
      </button>
    </nav>
  )
}

