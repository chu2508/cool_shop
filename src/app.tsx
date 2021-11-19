import { Component, FC } from "react";
import "./app.scss";
import useCart, { CartService } from "./app/Cart/useCart";

const App: FC = props => {
  return (
    <CartService.Provider value={useCart()}>
      {props.children}
    </CartService.Provider>
  );
};

export default App;
