import RecipeCard from "./RecipeCard";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";

function RecipesList({ handleLogout }) {
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

  return (
    <div>
      <div id="buttons">
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
          <Button key={cuisine} onClick={() => handleGroupFilterClick(cuisine)}>
            {cuisine}
          </Button>
        ))}
      </div>
      {error && <div className="text-danger">Error</div>}
      <ul className="d-flex flex-wrap m-2 gap-3  list-unstyled">
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
