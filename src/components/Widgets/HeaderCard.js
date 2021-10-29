/* eslint-disable @next/next/no-img-element */
import { format, getDate } from "date-fns";
import slug from "slug";
import Link from "next/link";
import Image from "next/image";
import SocialBox from "./SocialBox";

const HeaderCard = ({ author, date, size, href }) => {
  return (
    <header className="article-header">
      <div className="author-date">
        <span className="article-author">
          <Image
            src={`/images/author/${slug(
              author.name ? author.name : "admin"
            )}.jpg`}
            width="120"
            height="120"
            alt="avatar"
          />
        </span>
        <span className="article-author-time">
          <span className="article-name-author">
            <Link href={`/author/${slug(author.name ? author.name : "admin")}`}>
              <a>{author.name}</a>
            </Link>
          </span>
          <span className="article-date">
            <time>
              {format(date ? new Date(date) : new Date(), "dd-MM-yyyy")}
            </time>
          </span>
        </span>
      </div>
      <SocialBox size={size} href={href} />
    </header>
  );
};

export default HeaderCard;
