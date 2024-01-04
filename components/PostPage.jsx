import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const PostPage = ({ postId }) => {
  // const date = new Date(post.regDate);

  const post = {};

  return (
    <div className="flex w-full flex-none flex-col justify-between gap-5 rounded-md bg-foreground p-5 dark:bg-darkForeground">
      <div className="flex justify-between text-2xl text-black dark:text-white">
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
            <p>FIX</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <p>{date.toLocaleDateString("tr-TR")}</p>
          {/* TODO: need a backend endpoint to fetch username from id */}
          <p>{/* {post.fkeyUuidUser} */}FIX</p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
