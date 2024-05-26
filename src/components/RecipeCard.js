import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

import "../styles/styles.scss";

function RecipeCard({ recipe }) {
  return (
    <Card className="recipe-card">
      <Card.Body>
        <ListGroup.Item>
          <div>Cooking Time: {recipe.cookingTimeMinutes}</div>
          <div>Servings: {recipe.servings}</div>
        </ListGroup.Item>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Title>{recipe.name}</Card.Title>
        <Button variant="primary">ingredients</Button>
        <Button variant="primary">instructions</Button>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Difficulty: {recipe.difficulty}</ListGroup.Item>
        <ListGroup.Item>Cuisine: {recipe.cuisine}</ListGroup.Item>
        <ListGroup.Item>
          Calories Per Serving: {recipe.caloriesPerServing} kcal
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default RecipeCard;
