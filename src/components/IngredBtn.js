import Ingredients from "./Ingredients";

import { BsListCheck } from "react-icons/bs";

import { useState } from "react";

import "../styles/styles.scss";

function IngredBtn({ allIngred }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pop-btn-container">
      <button className="pop-up-btn" onClick={togglePopup}>
        <BsListCheck className="pop-up-btn__icon" />
      </button>
      {isOpen && (
        <Ingredients handleClose={togglePopup} allIngred={allIngred} />
      )}
    </div>
  );
}

export default IngredBtn;
