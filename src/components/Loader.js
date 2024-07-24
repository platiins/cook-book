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
        height="80"
        width="80"
        color="#780000"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}

export default Loader;
