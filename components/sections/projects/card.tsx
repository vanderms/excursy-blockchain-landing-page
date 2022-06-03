import Image from "next/image";
import Link from "next/link";

interface Props {
  imgSrc: string;
  title: string;
  summary: string;
  link: string;
}

export const CardProject: React.FC<Props> = (props) => {
  return (
    <article className="card">
      <div className="card__wrapper-image">
        <Image src={props.imgSrc} layout='fill' objectFit="cover" alt='thumbnail'/>
      </div>
      <h3 className="card__title">{props.title}</h3>
      <p className="card__summary">{props.summary}</p>
      <Link href={props.link}>
        <a className="card__cta">Learn more...</a>
      </Link>
    </article>
  )
}
