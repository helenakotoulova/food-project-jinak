import classes from "./MealItem.module.css";
import AddForm from "./AddForm";

function MealItem(props) {
  return (
    <li >
      <div className={classes.odst}>
        <div>
          <h2 className={classes.name}>{props.name}</h2>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>${props.price}</div>
        </div>
        <div>
          <AddForm />
        </div>
      </div>
      <div className={classes.cara}></div>
    </li>
  );
}

export default MealItem;
