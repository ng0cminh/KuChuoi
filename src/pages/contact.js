import Layout from "../components/Layout"
import {getFolderMenu} from "../lib/posts";

function Contact({categories}) {
  return (
    <Layout title="Contact Pages" categories={categories}>
      <h1>Contact Page</h1>
    </Layout>
  )
}

export default Contact;

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