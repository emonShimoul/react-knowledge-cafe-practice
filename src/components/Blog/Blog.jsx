import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover} alt={`Cover pic of ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-12 h-12 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMark(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-800 font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
