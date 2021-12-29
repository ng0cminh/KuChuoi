import { FacebookProvider, CommentsCount } from "react-facebook";

const CommentsFacebook = ({ href }) => {
  return (
    <FacebookProvider appId="636890294324159" language="vi_VN">
      <CommentsCount href={href} />
    </FacebookProvider>
  );
};

export default CommentsFacebook;
