import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getPostsHomePage} from "../lib/posts";

export default function Home({data}) {
  return (
    <Layout title="Home Pages">
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
  
  const data = getPostsHomePage(6, 'isHomePage');


  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      data
    }
  }
}