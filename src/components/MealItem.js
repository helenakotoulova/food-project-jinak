import classes from "./MealItem.module.css";
import AddForm from "./AddForm";
import {CartContext} from "./context/cartContext.js";
import { useContext } from "react";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  function addMealHandler(amount) {
    cartCtx.addMeal({
      id: props.id,
      name:props.name,
      price:props.price,
      amount:amount,
    })
  }

  const price=props.price.toFixed(2);

  return (
    <li>
      <div className={classes.odst}>
        <div>
          <h2 className={classes.name}>{props.name}</h2>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>${price}</div>
        </div>
        <div>
          <AddForm onAddMeal={addMealHandler} />
        </div>
      </div>
      <div className={classes.cara}></div>
    </li>
  );
}

export default MealItem;
