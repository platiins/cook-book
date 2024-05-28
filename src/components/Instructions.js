import { AiFillCloseSquare } from "react-icons/ai";
import { RiFolderDownloadFill } from "react-icons/ri";

import "../styles/styles.scss";

function Instructions({ handleClose, wholeInstruct }) {
  return (
    <div className="popup">
      <div className="popup__content">
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
        <div className="popup__content--list">{wholeInstruct}</div>
      </div>
    </div>
  );
}

export default Instructions;
