import Layout from "../components/Layout"
import {getFolderMenu} from "../lib/posts";

function About({categories}) {
  return (
    <Layout title="About Pages" categories={categories}>
      <h1>About Page</h1>
    </Layout>
  )
}

export default About;

export async function getStaticProps() {

  const categories = getFolderMenu();
   // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      categories,
    }
  }
}