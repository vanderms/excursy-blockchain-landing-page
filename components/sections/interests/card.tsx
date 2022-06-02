import Image from "next/image";
import Link from "next/link";


interface Props {
  title: string;
  iconSrc: string;
  description: string;
  href: string;
}

export const Card: React.FC<Props> = (props) => {
  return (
    <article className="card">
      <div className="card__wrapper-image">
        <Image src={props.iconSrc} alt='' width={70} height={70}/>
      </div>
     
      <h3 className="card__title">{ props.title }</h3>
      <p className="card__description">{ props.description }</p>
      <Link href={props.href}>
        <a className="card__cta">
          Read More...
        </a>
      </Link>
    </article>
  );
}