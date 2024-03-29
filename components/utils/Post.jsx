import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Post = ({ post }) => {
  const date = new Date(post.regDate);

  return (
    <Link
      href={"/post/" + post.pkeyUuidPost}
      className="flex w-full flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5 dark:bg-darkForeground"
    >
      <div className="flex justify-between text-xl text-black dark:text-white">
        {post.title}
      </div>
      {post.imageUrl !== "" ? (
        <img
          className="rounded-lg"
          src={post.imageUrl}
          onError={(e) => (e.target.style.display = "none")}
        />
      ) : (
        ""
      )}
      <div className="text-text dark:text-darkText">{post.content}</div>
      <div className="flex justify-between">
        <div className="flex justify-between gap-2">
          <div className="flex items-center justify-between gap-1 text-gray-500">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>{post.like}</p>
          </div>
          <div className="flex items-center justify-between gap-1 text-gray-500">
            <FontAwesomeIcon icon={faThumbsDown} />
            <p>{post.dislike}</p>
          </div>
          <div className="flex items-center justify-between gap-1 text-gray-500">
            <FontAwesomeIcon icon={faMessage} />
            <p>{post.commentCount}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <p>{date.toLocaleDateString("tr-TR")}</p>
          <p>{post.posterUsername}</p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
