import { FacebookProvider, CommentsCount } from "react-facebook";

const CommentsFacebook = ({ href }) => {
  return (
    <FacebookProvider appId="636890294324159">
      <CommentsCount href={href} />
      <span style={{ marginLeft: 5 }}>Bình luận</span>
    </FacebookProvider>
  );
};

export default CommentsFacebook;
