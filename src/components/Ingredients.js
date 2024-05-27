import "../styles/styles.scss";

function Ingredients({ handleClose, allIngred }) {
  return (
    <div className="popup">
      <div className="popup__content">
        <button className="popup__content--btn" onClick={handleClose}>
          Close
        </button>
        <div className="popup__content--list">{allIngred}</div>
      </div>
    </div>
  );
}

export default Ingredients;
