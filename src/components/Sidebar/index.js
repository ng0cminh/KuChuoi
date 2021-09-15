/* eslint-disable @next/next/no-img-element */
import FeaturedBox from "../Widgets/FeaturedBox";
import AboutBox from "../Widgets/AboutBox";

const Sidebar = () => {
    return (
        <aside className="sidebar" id="sidebar">
            <AboutBox />
            <FeaturedBox />
        </aside>
    )
}

export default Sidebar;