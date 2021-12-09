import Layout from "../components/Layout";
import { getListNameFolder, getPageBySlug } from "../lib/posts";
import markdownToHtml from "../lib/markdownToHtml";

function About({ menu, content }) {
  const metadata = {
    title: "Giới thiệu",
    slug: "about",
  };

  return (
    <Layout metadata={metadata} menu={menu}>
      <div className="pages" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  );
}

export default About;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const menu = await getListNameFolder();

  const contents = await getPageBySlug("about");

  const contentMarkdown = await getPageBySlug("about");
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
