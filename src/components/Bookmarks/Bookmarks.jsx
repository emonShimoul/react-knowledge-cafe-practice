import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 pt-4">
      <div className="mb-4">
        <h3 className="text-xl text-center font-bold text-purple-800">
          Reading Time: {readingTime}
        </h3>
      </div>

      <h2 className="text-2xl text-center">Bookmarks: {bookmarks.length}</h2>

      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
