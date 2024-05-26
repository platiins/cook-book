import RecipeCard from "./RecipeCard";
import Button from "react-bootstrap/esm/Button";
import { useState, useEffect } from "react";

function RecipesList() {
  const [selectedCardGroup, setSelectedCardGroup] = useState("all");
  const [counter, setCounter] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);

  const handleGroupFilterClick = (cuisine) => {
    console.log(cuisine);
    setCounter((prevValue) => {
      console.log(prevValue);
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

  useEffect(() => {
    console.log("Selected Card Group Effect");
  }, [selectedCardGroup]);

  const filteredCards =
    selectedCardGroup === "all"
      ? selectedCards
      : selectedCards.filter((recipe) => recipe.cuisine === selectedCardGroup);

  return (
    <div>
      <div id="buttons">
        {["all", "Italian", "Pakistani", "American"].map((cuisine) => (
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
