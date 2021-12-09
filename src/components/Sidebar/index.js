<<<<<<< HEAD
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
=======
/* eslint-disable @next/next/no-img-element */
import SelectionBox from "../Widgets/SelectionBox";
import AboutBox from "../Widgets/AboutBox";

const Sidebar = ({ selectionPosts }) => {
  return (
    <aside className="sidebar" id="sidebar">
      <AboutBox />
      <SelectionBox selectionPosts={selectionPosts} />
    </aside>
  );
};

export default Sidebar;
>>>>>>> 308cb2898801bd677b6350d11c37530f5273c1f5
