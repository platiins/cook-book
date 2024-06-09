import { ThemeContext } from "../context/theme";
import { useContext } from "react";

import "../styles/styles.scss";

function Contacts() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="contacts-container"
      style={{
        backgroundColor: theme === "light" ? "#b4b093" : "#47482f",
      }}
    >
      <h1
        className="contacts-container__title"
        style={{
          color: theme === "light" ? "#47482f" : "#b4b093",
        }}
      >
        EMPTY PAGE
      </h1>
      <p
        className="contacts-container__text"
        style={{
          color: theme === "light" ? "#47482f" : "#b4b093",
        }}
      >
        we are sorry, this page is empty
      </p>
      <p
        className="contacts-container__text"
        style={{
          color: theme === "light" ? "#47482f" : "#b4b093",
        }}
      >
        please revisit it later
      </p>
    </div>
  );
}

export default Contacts;
