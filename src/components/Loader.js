import { Grid } from "react-loader-spinner";

import "../styles/styles.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";

function Loader() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="loader-container"
      style={{
        backgroundColor: theme === "light" ? "#b4b093" : "#47482f",
      }}
    >
      <Grid
        visible={true}
        height="70"
        width="70"
        ariaLabel="grid-loading"
        radius="11"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
        color="#212529"
      />
    </div>
  );
}

export default Loader;
