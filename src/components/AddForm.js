import classes from "./AddForm.module.css";
import { useRef } from "react";

function AddForm(props) {
  const enteredAmountInput = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredAmount = enteredAmountInput.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddMeal(enteredAmountNumber);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" defaultValue={1} ref={enteredAmountInput} />
      <div className={classes.actions}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddForm;
