import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { IoIosTime } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiMiniBolt } from "react-icons/hi2";

import PropTypes from "prop-types";

import "../styles/styles.scss";
import IngredBtn from "./IngredBtn";
import InstructBtn from "./InstructBtn";

function RecipeCard({ recipe }) {
  return (
    <Card className="recipe-card">
      <Card.Body className="recipe-card__container">
        <ListGroup.Item className="cooking-serving">
          <div className="cooking-serving__box">
            <IoIosTime className="recipe-card-icon" />
            {recipe.cookTimeMinutes} min
          </div>
          <div className="cooking-serving__box">
            {recipe.servings}
            <IoPersonSharp className="recipe-card-icon" />
          </div>
        </ListGroup.Item>
        <Card.Img
          className="recipe-card__container--img"
          variant="top"
          src={recipe.image}
        />
        <Card.Title className="recipe-card__container--title">
          {recipe.name.toLocaleUpperCase()}
        </Card.Title>
        <div className="btns-container">
          <IngredBtn
            allIngred={
              <div>
                <h3 className="popup-title">{recipe.name}</h3>
                <ul className="popup-list">
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            }
          />
          <InstructBtn
            wholeInstruct={
              <div>
                <h3 className="popup-title">{recipe.name}</h3>
                <ol className="popup-list" id="instruct-list">
                  {recipe.instructions.map((instruction) => (
                    <li key={instruction.id}>{instruction}</li>
                  ))}
                </ol>
              </div>
            }
          />
        </div>

        <ListGroup.Item className="recipe-card__details">
          <section>
            <HiMiniBolt className="mb-2" /> {recipe.difficulty}
          </section>
          <section>
            <p>kcal</p>
            {recipe.caloriesPerServing}
          </section>
          <section>
            <FaGlobeAmericas className="mb-2" /> {recipe.cuisine}
          </section>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
}

RecipeCard.propTypes = {
  cookTimeMinutes: PropTypes.number,
  servings: PropTypes.number,
  name: PropTypes.string,
  difficulty: PropTypes.string,
  cuisine: PropTypes.string,
  caloriesPerServing: PropTypes.number,
};

export default RecipeCard;
