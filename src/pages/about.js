import Layout from "../components/Layout";
import { getListNameFolder } from "../lib/posts";
import { getPageBySlug } from "../lib/pages";

function About({ menu, contents }) {
  const metadata = {
    title: "Giới thiệu",
    slug: "about",
  };
  return (
    <Layout metadata={metadata} menu={menu}>
      {contents}
    </Layout>
  );
}

export default About;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const menu = await getListNameFolder();
  const contents = await getPageBySlug("about");

  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      menu,
      contents,
    },
  };
}
