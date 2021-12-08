import classes from './Modal.module.css';
import MealList from '../MealList';
import { MealContext } from '../context/mealContext';
import {useContext} from 'react';

function Modal() {

    const mealCtx=useContext(MealContext);

    return(
        <div className={classes.modal}>
            <h2>In your cart:</h2>
            <MealList meals={mealCtx.mealsInCart} />
        </div>
    )
}

export default Modal;