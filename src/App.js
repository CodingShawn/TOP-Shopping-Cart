import { BrowserRouter, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart";
import "./index.css";
import { useState } from "react";

function App() {
  const itemInfo = {
    msw: { name: "Mao Shan Wang", price: 20, className: "msw" },
    redprawn: { name: "Red Prawn", price: 13, className: "redprawn" },
  };
  const [cartItems, setCartItems] = useState({});

  function adjustCartItems(reservedInfo) {
    if (cartItems[reservedInfo.item]) {
      let newQuantity = cartItems[reservedInfo.item].quantity + reservedInfo.quantity;
      setCartItems({ ...cartItems, [reservedInfo.item]: {quantity: newQuantity, itemInfo: reservedInfo.productInfo} });
    } else {
      setCartItems({
        ...cartItems,
        [reservedInfo.item]: {quantity: reservedInfo.quantity, itemInfo: reservedInfo.productInfo}
      });
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/shop">
          <Shop itemInfo={itemInfo} adjustCartItems={adjustCartItems} />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
