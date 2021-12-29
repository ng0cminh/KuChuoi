import { FacebookProvider, Comments } from "react-facebook";

const CommentsFacebook = ({ href }) => {
  return (
    <FacebookProvider appId="636890294324159" language="vi_VN">
      <Comments href={href} width="100%" />
    </FacebookProvider>
  );
};

export default CommentsFacebook;
