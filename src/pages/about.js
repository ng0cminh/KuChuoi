import Layout from "../components/Layout";
<<<<<<< HEAD
import { getListNameFolder } from "../lib/posts";
import { getPageBySlug } from "../lib/pages";

function About({ menu, contents }) {
=======
import { getListNameFolder, getPageBySlug } from "../lib/posts";
import markdownToHtml from "../lib/markdownToHtml";

function About({ menu, content }) {
>>>>>>> aae8d8ec4cc4c24c2e4f1df4306ffaf16ba8d3c1
  const metadata = {
    title: "Giới thiệu",
    slug: "about",
  };

  return (
    <Layout metadata={metadata} menu={menu}>
<<<<<<< HEAD
      {contents}
=======
      <div className="pages" dangerouslySetInnerHTML={{ __html: content }} />
>>>>>>> aae8d8ec4cc4c24c2e4f1df4306ffaf16ba8d3c1
    </Layout>
  );
}

export default About;

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const menu = await getListNameFolder();
<<<<<<< HEAD
  const contents = await getPageBySlug("about");

=======
  const contentMarkdown = await getPageBySlug("about");
  const content = (await markdownToHtml(contentMarkdown)) || "";
>>>>>>> aae8d8ec4cc4c24c2e4f1df4306ffaf16ba8d3c1
  // The value of the `props` key will be
  // passed to the `Home` component
  return {
    props: {
      menu,
<<<<<<< HEAD
      contents,
=======
      content,
>>>>>>> aae8d8ec4cc4c24c2e4f1df4306ffaf16ba8d3c1
    },
  };
}
