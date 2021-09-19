/* eslint-disable @next/next/no-img-element */
import { compareAsc, format } from 'date-fns';
import slug from 'slug';
import SocialBox from "./SocialBox";

const HeaderCard = ({author, date, size}) => {
    return(
        <header className="article-header">
            <div className="author-date">
                <span className="article-author">
                        <a>
                            <img 
                                src="/images/author/admin.jpg"
                                width="120"
                                height="120"
                                alt="avatar"
                            />
                        </a>
                </span>
                <span className="article-author-time">
                    <span className="article-name-author">
                        <a href={`/author/${slug(author)}`}>{author}</a>
                    </span>
                    <span className="article-date"><time>{format(new Date(date), 'dd-MM-yyyy')}</time></span>
                </span>
            </div>
            <SocialBox size={size} href="#" />
        </header>
    )
}

export default HeaderCard;