import React from "react";

import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import RecipesPage from "./components/RecipesPage";
import Register from "./components/Register";

import { useState } from "react";
import { ThemeProvider } from "./context/theme";
import "./styles/styles.scss";

function App({ username }) {
  const [page, setPages] = useState("about-us");

  return (
    <ThemeProvider>
      <div>
        <Navigation setPages={setPages} username={username} />
        {page === "about-us" && <AboutUs />}
        {page === "recipes" && <RecipesPage />}
        {page === "contacts" && <Contacts />}
        {page === "register" && <Register />}
      </div>
    </ThemeProvider>
  );
}

export default App;
