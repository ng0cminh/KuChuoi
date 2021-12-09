import slug from "slug";
import Link from "next/link";
import Image from "next/image";

function SelectionBox({ selectionPosts }) {
  const { posts, selection } = selectionPosts;
  const selectionName =
    selection === "Featured"
      ? "nổi bật"
      : selection === "Trending"
      ? "xu hướng"
      : selection === "Hotnew"
      ? "mới"
      : null;
  return (
    <div className="widget">
      <h3 className="widget-title">
        <Link href={`/posts/${slug(selection)}`}>
          <a>Bài viết {selectionName}</a>
        </Link>
      </h3>
      <div className="widget-content">
        <ul className="widget-post">
          {posts.map((post, index) => {
            return (
              <li className="item-post" key={post.slug + index}>
                <span>
                  <Link href={`/${post.slug}`}>
                    <a className="item-post-img">
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
