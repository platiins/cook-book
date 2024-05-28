import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import Navigation from "./Navigation";
import RecipesPage from "./RecipesPage";

import "../styles/styles.scss";

import { useState } from "react";

function NavRule() {
  const [page, setPage] = useState("login");

  return (
    <div>
      <Navigation setPage={setPage} />
      <div>
        {page === "about-us" && <AboutUs />}
        {page === "contacts" && <Contacts />}
        {page === "recipes" && <RecipesPage />}
      </div>
    </div>
  );
}

export default NavRule;
