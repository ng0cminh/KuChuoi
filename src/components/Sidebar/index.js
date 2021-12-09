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
