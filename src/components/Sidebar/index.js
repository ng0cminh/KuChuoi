/* eslint-disable @next/next/no-img-element */
import FeaturedBox from "../Widgets/FeaturedBox";
import AboutBox from "../Widgets/AboutBox";

const Sidebar = ({ featuredPosts }) => {
  return (
    <aside className="sidebar" id="sidebar">
      <AboutBox />
      <FeaturedBox featuredPosts={featuredPosts} />
    </aside>
  );
};

export default Sidebar;
