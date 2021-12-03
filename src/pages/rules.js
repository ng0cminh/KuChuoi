import Layout from "../components/Layout";
import { getListNameFolder, getPageBySlug } from "../lib/posts";
import markdownToHtml from "../lib/markdownToHtml";

function Rules({ menu, content }) {
  const metadata = {
    title: "Điều khoản sử dụng",
    slug: "rules",
  };

  return (
    <Layout metadata={metadata} menu={menu}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}

export default Rules;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const menu = await getListNameFolder();
  const contentMarkdown = await getPageBySlug("rules");
  const content = (await markdownToHtml(contentMarkdown)) || "";
  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      menu,
      content,
    },
  };
}
