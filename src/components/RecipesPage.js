import RecipesList from "./RecipesList";
import "../styles/styles.scss";

import { ThemeContext } from "../context/theme";
import { useContext } from "react";

function RecipesPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <RecipesList />
    </div>
  );
}

export default RecipesPage;
