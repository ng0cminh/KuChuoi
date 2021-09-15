import Layout from "../components/Layout"
import Blog from "../components/Blog";
import {getPostByFolder} from "../lib/posts";

export default function Home({cat1, cat2}) {
  return (
    <Layout title="Home Pages">
      <section className="main-content grid">
        <section id="content" className="content">

            <section className="list-posts">
              <div className="heading-block">
                <h2 className="title-block">{cat1.category}</h2>
                <a href={`/category/${cat1.folder}`} className="views-all">Xem tất cả</a>
              </div>
              <div className="row">
                <Blog posts={cat1.posts.slice(0,3)} />
              </div>
            </section>

            <section className="list-posts">
              <div className="heading-block">
                <h2 className="title-block">{cat2.category}</h2>
                <a href={`/category/${cat2.folder}`} className="views-all">Xem tất cả</a>
              </div>
              <div className="row">
                <Blog posts={cat2.posts.slice(0,3)} />
              </div>
            </section>

        </section>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {

  // Get external data from the file system, API, DB, etc.
  
  // const data = getPostsHomePage();

  const cat1 = getPostByFolder('day-tre');
  const cat2 = getPostByFolder('an-uong');

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      cat1,
      cat2
    }
  }
}