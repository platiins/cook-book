import Ingredients from "./Ingredients";
import "../styles/styles.scss";
import { BsListCheck } from "react-icons/bs";

import { useState } from "react";

function IngredBtn({ allIngred }) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>
        <BsListCheck className="recipe-btn-icon" />
      </button>
      {isOpen && (
        <Ingredients handleClose={togglePopup} allIngred={allIngred} />
      )}
    </div>
  );
}

export default IngredBtn;
