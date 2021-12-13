import { BsCart3 } from "react-icons/bs";
import classes from "./Header.module.css";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

function Header(props) {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  },0);

  return (
    <header className={classes.header}>
      <h2 className={classes.title}>React Meals</h2>
      <div className={classes.cart} onClick={props.onClick}>
        <span>
          <BsCart3 />
        </span>
        <p className={classes.cartInner}>Your cart</p>
        <span className={classes.badge}>{numberOfItems}</span>
      </div>
    </header>
  );
}

export default Header;
