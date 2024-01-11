import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// TODO: username and date
const Comment = ({ comment }) => {
  const date = new Date(comment.regDate);

  return (
    // <div className="flex flex-col gap-5 rounded-lg bg-background p-5 dark:bg-darkBackground">
    <div className="flex w-full items-center justify-between gap-5 p-5 text-text dark:text-darkText">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 text-sm">
          <p>{comment.commenterUsername}</p>
          <p className="text-gray-500">{date.toLocaleDateString("tr-TR")}</p>
        </div>
        <p>{comment.description}</p>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex items-center justify-between gap-1 text-gray-500">
          <FontAwesomeIcon icon={faThumbsUp} />
          <p>{comment.like}</p>
        </div>
        <div className="flex items-center justify-between gap-1 text-gray-500">
          <FontAwesomeIcon icon={faThumbsDown} />
          <p>{comment.dislike}</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Comment;
