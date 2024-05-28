import { AiFillCloseSquare } from "react-icons/ai";
import { RiFolderDownloadFill } from "react-icons/ri";

import "../styles/styles.scss";

function Ingredients({ handleClose, allIngred }) {
  return (
    <section className="popup">
      <section className="popup__content" id="ingred-content">
        <div className="btns-container">
          <button className="popup__content--btn" onClick={handleClose}>
            <AiFillCloseSquare />
          </button>
          <a
            className="popup__content--btn"
            href="path_to_file"
            download="instruction.pdf"
          >
            <RiFolderDownloadFill />
          </a>
        </div>
        <ul className="popup__content--list">{allIngred}</ul>
      </section>
    </section>
  );
}
export default Ingredients;
