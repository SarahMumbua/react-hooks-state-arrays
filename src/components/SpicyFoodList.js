import React, { useState } from "react";

function SpicyFoodList() {
  const [foods, setFoods] = useState([]);
  const heatLevels = ['low', 'medium', 'high'];
  function getNewSpicyFood() {
    const heatLevels = ["mild", "medium", "hot", "very hot", "extremely hot"];
    const cuisines = ["Mexican", "Thai", "Indian", "Chinese", "American"];
    const randomFood = {
      id: Math.floor(Math.random() * 10000),
      name: "Spicy " + Math.random().toString(36).substring(7),
      heatLevel: heatLevels[Math.floor(Math.random() * heatLevels.length)],
      cuisine: cuisines[Math.floor(Math.random() * cuisines.length)],
    };
    return randomFood;
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel:
            food.heatLevel === "extremely hot"
              ? "extremely hot"
              : heatLevels[heatLevels.indexOf(food.heatLevel) + 1],
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  function handleRemoveFood(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
