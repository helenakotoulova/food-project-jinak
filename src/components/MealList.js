import MealItem from "./MealItem";
import classes from './MealList.module.css';

function MealList(props) {
  return (
    <ul className={classes.list}>
      {props.meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </ul>
  );
}

export default MealList;
