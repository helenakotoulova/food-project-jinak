import {BsCart3} from 'react-icons/bs';
import classes from './Header.module.css';
import { MealContext } from '../context/mealContext';
import {useContext} from 'react';

function Header(props) {
    const mealCtx=useContext(MealContext);

    return(
        <header className={classes.header}>
            <h2 clasName={classes.title}>React Meals</h2>
            <div className={classes.cart} onClick={props.onClick}>
                <span><BsCart3 /></span>
                <p className={classes.cartInner}>Your cart</p>
                <span className={classes.badge}>{mealCtx.totalMeals}</span>
            </div>
        </header>
        )
}

export default Header;