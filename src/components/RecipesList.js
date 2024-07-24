import RecipeCard from "./RecipeCard";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import { FaBowlFood } from "react-icons/fa6";
import "../styles/styles.scss";
import { ThemeContext } from "../context/theme";
import { useContext } from "react";
import Loader from "./Loader";

function RecipesList({ handleLogout, username }) {
  const [selectedCardGroup, setSelectedCardGroup] = useState("All");
  const [counter, setCounter] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGroupFilterClick = (cuisine) => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
    setSelectedCardGroup(cuisine);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
          throw new Error("Network issue");
        }
        const json = await res.json();
        setSelectedCards(json.recipes);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const filteredCards =
    selectedCardGroup === "All"
      ? selectedCards
      : selectedCards.filter((recipe) => recipe.cuisine === selectedCardGroup);

  const { theme } = useContext(ThemeContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <div
      className="recipes-page"
      style={{ backgroundColor: theme === "light" ? "#b4b093" : "#47482f" }}
    >
      <div className="filter-btns-container" id="buttons">
        {["All", "Italian", "Asian", "Mexican", "Japanese", "Indian"].map(
          (cuisine) => (
            <Button
              className="filter-btns"
              id={cuisine}
              key={cuisine}
              onClick={() => handleGroupFilterClick(cuisine)}
            >
              <FaBowlFood className="filter-btns__icon" />
              {cuisine.toLocaleUpperCase()}
            </Button>
          )
        )}
      </div>
      {error && <div className="text-danger">Error</div>}
      <ul className="recipes-list">
        {filteredCards.map((recipe) => {
          return (
            <li key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipesList;
