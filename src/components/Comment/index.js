import { FacebookProvider, Comments } from "react-facebook";

const CommentsFacebook = ({ href }) => {
  console.log(href);
  return (
    <FacebookProvider appId="636890294324159">
      <Comments href={href} />
    </FacebookProvider>
  );
};

export default CommentsFacebook;
