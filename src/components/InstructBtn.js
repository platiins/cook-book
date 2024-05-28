import { useState } from "react";
import { BiShow } from "react-icons/bi";

import "../styles/styles.scss";
import Instructions from "./Instructions";

function InstructBtn({ wholeInstruct }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pop-btn-container">
      <button className="pop-up-btn" onClick={togglePopup}>
        <BiShow className="pop-up-btn__icon" />
      </button>
      {isOpen && (
        <Instructions handleClose={togglePopup} wholeInstruct={wholeInstruct} />
      )}
    </div>
  );
}

export default InstructBtn;
