import RecipeCard from "./RecipeCard";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";
import { FaBowlFood } from "react-icons/fa6";
import "../styles/styles.scss";
import { ThemeContext } from "../context/theme";
import { useContext } from "react";

function RecipesList({ handleLogout, username }) {
  const [selectedCardGroup, setSelectedCardGroup] = useState("All");
  const [counter, setCounter] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);

  const handleGroupFilterClick = (cuisine) => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
    setSelectedCardGroup(cuisine);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network issue");
        }
        return res.json();
      })
      .then((json) => {
        console.log(json.recipes);
        setSelectedCards(json.recipes);
      })
      .catch((error) => {
        console.log(error);
        setError(error.toString());
      });
  }, []);

  const filteredCards =
    selectedCardGroup === "All"
      ? selectedCards
      : selectedCards.filter((recipe) => recipe.cuisine === selectedCardGroup);

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="recipes-page"
      style={{ backgroundColor: theme === "dark" ? "green" : "red" }}
    >
      <div className="filter-btns-container mt-5" id="buttons">
        {[
          "All",
          "Italian",
          "Pakistani",
          "Asian",
          "Mexican",
          "Japanese",
          "Indian",
          "Turkish",
        ].map((cuisine) => (
          <Button
            className="filter-btns"
            id={cuisine}
            key={cuisine}
            onClick={() => handleGroupFilterClick(cuisine)}
          >
            <FaBowlFood className="filter-btns__icon" />
            {cuisine.toLocaleUpperCase()}
          </Button>
        ))}
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
