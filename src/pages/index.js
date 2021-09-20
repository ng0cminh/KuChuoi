import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getPostsHomePage, getListNameFolder} from "../lib/posts";
import {postPerpage} from "../../next.config";

export default function Home({data, menu}) {
  return (
    <Layout title="Trang Chủ" menu={menu}>
      <section className="main-content grid">
        <section id="content" className="content">
            {data.map((cat, index) => {
              return(
                <section className="list-posts" key={cat.folder + index}>
                  <div className="heading-block">
                    <h2 className="title-block">{cat.posts.length > 0 ? cat.category : null}</h2>
                    <a href={`/category/${cat.folder}`} className="views-all">{cat.posts.length > 0 ? `Xem tất cả` : null}</a>
                  </div>
                  <div className="row">
                    <Blog posts={cat.posts} />
                  </div>
                </section>
              )
            })}

        </section>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {

  // Get external data from the file system, API, DB, etc.
  
  // Đối số thứ 1 nếu không lựa chọn thì sẽ lấy 6 bài viết. Đối số thứ 2 nếu không lựa chọn thì lấy tất cả các bài viết theo thứ tự
  const data = getPostsHomePage(postPerpage, 'isHomePage');
  const menu = getListNameFolder();

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      data,
      menu
    }
  }
}