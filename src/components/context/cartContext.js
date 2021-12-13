import {createContext, React, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addMeal: {},
  removeMeal: {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if ((action.type = "REMOVE")) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartState] = useReducer(
    CartReducer,
    defaultCartState
  );

  function addMealHandler(item) {
    dispatchCartState({ type: "ADD", item: item });
  }

  function removeMealHandler(id) {
    dispatchCartState({ type: "REMOVE", id: id });
  }

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

/*
  const [mealsInCart, setMealsInCart] = useState([]);
  function addMeal(meal) {
    setMealsInCart((prevMeals) => {
      return [...prevMeals, meal];
    });
  }
  function removeMeal(mealID) {
    setMealsInCart((prevMeals) => {
      return prevMeals.filter((meal) => meal.id !== mealID);
    });
  }
*/
