import Meals from "./components/Meals";
import Header from "./components/ui/Header";
import CartProvider from "./components/context/cartContext";
import Modal from "./components/ui/Modal";
import Backdrop from "./components/ui/Backdrop";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function clickCartHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <CartProvider>
      <Header onClick={clickCartHandler} />
      {!modalIsOpen && <Meals />}
      {modalIsOpen && <Backdrop closeModal={closeModalHandler}/>}
      {modalIsOpen && <Modal onClose={closeModalHandler}/>}
    </CartProvider>
  );
}

export default App;
