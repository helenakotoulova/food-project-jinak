import classes from "./CartItem.module.css";

function CartItem(props) {
  const price = props.price.toFixed(2);
  return (
    <li id={props.id} className={classes.odst}>
      <div>
        <h2 className={classes.name}>{props.name}</h2>
        <div className={classes.price}>
          <span>${price}</span>
          <span> x {props.amount}</span>
        </div>
      </div>
      <div>
        <div className={classes.actions}>
          <button onClick={props.onAddMeal}>+</button>
          <button onClick={props.onRemoveMeal}>-</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
