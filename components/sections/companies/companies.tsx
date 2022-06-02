import Image from "next/image";

export const SectionCompanies: React.FC = () => {
  return (
    <div className="nv__section-companies">
      <Image src='/assets/companies/slack.svg' width={169} height={43} alt=''/>
      <div className="sep"></div>
      <Image src='/assets/companies/woo-commerce.svg' width={234} height={47} alt=''/>
      <div className="sep"></div>
      <Image src='/assets/companies/amazon.svg' width={169} height={51} alt=''/>
      <div className="sep"></div>
      <Image src='/assets/companies/microsoft.svg' width={175} height={37} alt=''/>
    </div>
  )
}
  