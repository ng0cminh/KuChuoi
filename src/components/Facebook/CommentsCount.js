import { FacebookProvider, CommentsCount } from "react-facebook";

const CommentsFacebook = ({ href }) => {
  return (
    <FacebookProvider appId="636890294324159" language="vi_VN">
      <CommentsCount href={href} orderBy="reverse_time" />
    </FacebookProvider>
  );
};

export default CommentsFacebook;
