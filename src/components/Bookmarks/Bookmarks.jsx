// import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
    </div>
  );
};

// bookmarks.propTypes = {
//     bookmarks: PropTypes.func.isRequired,
// };

export default Bookmarks;
