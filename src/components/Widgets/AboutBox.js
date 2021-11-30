/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { aboutMe } from "../../../next.config";
const AboutBox = () => {
  return (
    <div className="widget">
      <h3 className="widget-title">About</h3>
      <div className="widget-content">
        <figure className="article-figure img-fluid">
          <Image
            src="/images/author/admin.jpg"
            width={500}
            height={500}
            alt="about me"
          />
        </figure>
        <p>{aboutMe}</p>
      </div>
    </div>
  );
};

export default AboutBox;
