/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
const AboutBox = () => {
  return (
    <div className="widget">
      <h3 className="widget-title">About me</h3>
      <div className="widget-content">
        <figure className="article-figure img-fluid">
          <Image
            src="/images/author/admin.jpg"
            width={500}
            height={500}
            alt="about me"
          />
        </figure>
        <p>
          Học không liên quan đến IT, nhưng thích lập trình. Học lập trình vì có
          thời gian và thấy vui chứ không vì gì hết. Thích chia sẻ với những
          người cùng sở thích
        </p>
      </div>
    </div>
  );
};

export default AboutBox;
