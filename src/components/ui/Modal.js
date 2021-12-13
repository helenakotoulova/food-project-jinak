import classes from "./Modal.module.css";
import Cart from '../cart/Cart.js';

function Modal(props) {
  return (
    <div className={classes.modal}>
      <h2>In your cart:</h2>
      <main><Cart onClose={props.onClose}/></main>
    </div>
  );
}

export default Modal;
