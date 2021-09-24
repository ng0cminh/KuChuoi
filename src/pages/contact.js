import Layout from "../components/Layout";
import { getListNameFolder } from "../lib/posts";

function Contact({ menu }) {
  const metadata = {
    title: "Liên hệ",
    slug: "contact",
  };

  return (
    <Layout metadata={metadata} menu={menu}>
      <h1>Contact Page</h1>
    </Layout>
  );
}

export default Contact;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const menu = getListNameFolder();

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      menu,
    },
  };
}
