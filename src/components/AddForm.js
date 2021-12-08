import classes from "./AddForm.module.css";

function AddForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" value={1} />
      <div className={classes.actions}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddForm;
