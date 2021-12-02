import Layout from "../components/Layout";
import { getListNameFolder } from "../lib/posts";

function Rules({ menu }) {
  const metadata = {
    title: "Điều khoản sử dụng",
    slug: "rules",
  };

  return (
    <Layout metadata={metadata} menu={menu}>
      <h1>Rules Page</h1>
    </Layout>
  );
}

export default Rules;

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
