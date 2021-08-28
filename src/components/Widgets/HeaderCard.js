import Image from "next/image";
import SocialBox from "./SocialBox";
import slug from "slug";

const HeaderCard = ({author, date, size, href}) => {
    return(
        <header className="article-header">
            <div className="author-date">
                <span className="article-author">
                        <a>
                            <Image 
                                src={`/images/author/${slug(author)}.jpg`}
                                width={120}
                                height={120}
                                alt={author ? author : `avatar`}
                            />
                        </a>
                </span>
                <span className="article-author-time">
                    <span className="article-name-author">
                        <a href={`/author/${slug(author)}`}>{author ? author : null}</a>
                    </span>
                    <span className="article-date"><time>{date ? date : null}</time></span>
                </span>
            </div>
            <SocialBox size={size} href={href} />
        </header>
    )
}

export default HeaderCard;