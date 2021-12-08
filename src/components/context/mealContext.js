import { useState, createContext} from 'react';

export const MealContext = createContext({
  mealsInCart: [],
  totalMeals: 0,
  addMeal: () => {},
  removeMeal: () => {},
});

function MealProvider(props) {
  const [mealsInCart, setMealsInCart] = useState([]);

  function addMeal(meal) {
    setMealsInCart((prevMeals) => {
      return [...prevMeals, meal];
    });
  }

  function removeMeal(mealID) {
    setMealsInCart((prevMeals) => {
      return prevMeals.filter((meal) => meal.id !== mealID);
    });
  }

  const context = {
      mealsInCart:mealsInCart,
      totalMeals:mealsInCart.length,
      addMeal:addMeal,
      removeMeal:removeMeal,
  }

  return (
    <MealContext.Provider value={context}>
      {props.children}
    </MealContext.Provider>
  );
}

export default MealProvider;
