import { FacebookProvider, CommentsCount } from "react-facebook";

const CommentsCountFacebook = ({ href }) => {
  return (
    <FacebookProvider appId="636890294324159" language="vi_VN">
      <CommentsCount href={href} orderBy="reverse_time" />
    </FacebookProvider>
  );
};

export default CommentsCountFacebook;
