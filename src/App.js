import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import RecipesPage from "./components/RecipesPage";
import { useState } from "react";

import "./styles/styles.scss";

function App({ username }) {
  const [page, setPages] = useState("about-us");

  return (
    <div>
      <div>
        <Navigation setPages={setPages} username={username} />
        {page === "about-us" && <AboutUs />}
        {page === "contacts" && <Contacts />}
        {page === "recipes" && <RecipesPage />}
      </div>
    </div>
  );
}

export default App;
