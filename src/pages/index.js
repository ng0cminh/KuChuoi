import Layout from "../components/Layout";
import BlogList from "../components/Blog/";
import { getPostsHomePage, getListNameFolder } from "../lib/posts";
import { POST_PER_PAGE } from "../../next.config";

export default function Home({ data, menu }) {
  const metadata = {
    title: "Trang Chủ",
    description: `Trang blog của Kủ Chuối`,
  };
  return (
    <Layout metadata={metadata} menu={menu}>
      <section className="main-content grid">
        <section id="content" className="content">
          {data.map((cat, index) => {
            return (
              cat.posts.length > 0 && (
                <section className="list-posts" key={cat.folder + index}>
                  <div className="heading-block">
                    <h2 className="title-block">{cat.category}</h2>
                    <a href={`/category/${cat.folder}`} className="views-all">
                      Xem tất cả
                    </a>
                  </div>
                  <BlogList
                    key={cat.folder}
                    posts={cat.posts}
                    imgWidth={740}
                    imgHeight={370}
                  />
                </section>
              )
            );
          })}
        </section>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.

  // Đối số thứ 1 nếu không lựa chọn thì sẽ lấy 6 bài viết. Đối số thứ 2 nếu không lựa chọn thì lấy tất cả các bài viết theo thứ tự
  const data = getPostsHomePage(POST_PER_PAGE, "isHomePage");
  const menu = getListNameFolder();

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      data,
      menu,
    },
  };
}
