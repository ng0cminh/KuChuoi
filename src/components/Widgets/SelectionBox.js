<<<<<<< HEAD:src/components/Widgets/FeaturedBox.js
import Link from "next/link";
import Image from "next/image";

function FeaturedBox({ featuredPosts }) {
  return (
    <div className="widget">
      <h3 className="widget-title">
        <Link href="/featured-posts">
          <a>Bài viết nổi bật</a>
        </Link>
      </h3>
      <div className="widget-content">
        <ul className="widget-post">
          {featuredPosts.map((post, index) => {
            return (
              <li className="item-post" key={post.slug + index}>
                <span>
                  <Link href={`/${post.slug}`}>
                    <a>
                      <Image
                        src={
                          post.image
                            ? `/images/contents/${post.folder}/${post.image}`
                            : `/images/default/article.jpg`
                        }
                        width={90}
                        height={60}
                        alt={post.title ? post.title : `Banner Default`}
                      />
                    </a>
                  </Link>
                </span>
                <h4>
                  <Link href={`/${post.slug}`}>
                    <a href={`/${post.slug}`}>{post.title}</a>
                  </Link>
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FeaturedBox;
=======
import Link from "next/link";
import Image from "next/image";

function SelectionBox({ selectionPosts }) {
  return (
    <div className="widget">
      <h3 className="widget-title">
        <Link href="/featured-posts">
          <a>Bài viết nổi bật</a>
        </Link>
      </h3>
      <div className="widget-content">
        <ul className="widget-post">
          {selectionPosts.map((post, index) => {
            return (
              <li className="item-post" key={post.slug + index}>
                <span>
                  <Link href={`/${post.slug}`}>
                    <a>
                      <Image
                        src={
                          post.image
                            ? `/images/contents/${post.folder}/${post.image}`
                            : `/images/default/article.jpg`
                        }
                        width={90}
                        height={60}
                        alt={post.title ? post.title : `Banner Default`}
                      />
                    </a>
                  </Link>
                </span>
                <h4>
                  <Link href={`/${post.slug}`}>
                    <a href={`/${post.slug}`}>{post.title}</a>
                  </Link>
                </h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SelectionBox;
>>>>>>> 308cb2898801bd677b6350d11c37530f5273c1f5:src/components/Widgets/SelectionBox.js
