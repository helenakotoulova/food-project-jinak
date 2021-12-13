import CartItem from "./CartItem";
import { useContext } from "react";
import {CartContext} from "../context/cartContext";
import classes from './Cart.module.css';

function CartList(props) {
  const cartCtx = useContext(CartContext);
  function addMealHandler(item) {
    cartCtx.addMeal({ ...item, amount: 1 });
  }
  function removeMealHandler(id) {
    cartCtx.removeMeal(id);
  }

  const hasItems = cartCtx.items.length > 0;
  function orderHandler() {
    console.log('Ordering...')
  }

  return (
    <div className={classes.celek}>
      <ul className={classes.list}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAddMeal={addMealHandler.bind(null, item)}
            onRemoveMeal={removeMealHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={classes.totalAmount}>
        <span>Total Amount:</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose}>Close</button>
        {hasItems && <button onClick={orderHandler}>Order</button>}
      </div>
    </div>
  );
}

export default CartList;
