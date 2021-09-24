import Layout from "../components/Layout";
import { getListNameFolder } from "../lib/posts";

function About({ menu }) {
  const metadata = {
    title: "Giới thiệu",
    slug: "about",
  };
  return (
    <Layout metadata={metadata} menu={menu}>
      <h1>About Page</h1>
    </Layout>
  );
}

export default About;

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
