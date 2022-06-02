import Image from "next/image";
import Link from "next/link";


export const SectionOurValues: React.FC = () => {
  return (
    <section className="nv__section-our-values" id='our-values'>
      <div className="wrapper-image">
        <Image src='/assets/our-values-illustration.svg' width={514} height={352} alt=''/>
      </div>
      <h2 className="title">Our Values</h2>
      <p className="description">anftw is a hallmark. The team members may change, but the quality of our project execution will not.An outstanding team can build a product in any industry. Don&lsquo;t be intimidated by incumbents.</p>
      <Link href='/'>
        <a className="cta">Read More</a>
      </Link>
    </section>
  );
}