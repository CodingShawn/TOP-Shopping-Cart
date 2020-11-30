import { BrowserRouter, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Cart from "./components/Cart";
import "./index.css";
import { useState } from "react";

function App() {
  const itemInfo = {
    msw: { name: "Mao Shan Wang", price: 20, className: "msw" },
    redprawn: { name: "Red Prawn", price: 13, className: "redprawn" },
    d24: { name: "D24", price: 13, className: "d24"},
    xo: { name: "XO", price: 15, className: "xo"},
    s17: { name: "S17", price: 14, className: "s17" },
    jf: { name: "Jin Feng", price: 18, className: "jf"},
    d13: {name: "D13", price: 10, className: "d13"}
  };
  const [cartItems, setCartItems] = useState({});

  function addCartItems(reservedInfo) {
    if (cartItems[reservedInfo.item]) {
      let newQuantity =
        cartItems[reservedInfo.item].quantity + reservedInfo.quantity;
      //Prevent adding more than 20kg to cart
      if (newQuantity > 20) {
        setCartItems({
          ...cartItems,
          [reservedInfo.item]: {
            quantity: 20,
            itemInfo: reservedInfo.productInfo,
          },
        });
        console.log("set to 20");
      } else {
        setCartItems({
          ...cartItems,
          [reservedInfo.item]: {
            quantity: newQuantity,
            itemInfo: reservedInfo.productInfo,
          },
        });
      }
    } //If particular item has not been added to cart before
    else {
      setCartItems({
        ...cartItems,
        [reservedInfo.item]: {
          quantity: reservedInfo.quantity,
          itemInfo: reservedInfo.productInfo,
        },
      });
    }
  }

  function adjustCartItems(key, newQuantity) {
    setCartItems({
      ...cartItems,
      [key]: { quantity: newQuantity, itemInfo: cartItems[key].itemInfo },
    });
  }

  function deleteCartItem(key) {
    const { [key]: value, ...newCartItems } = cartItems;
    setCartItems(newCartItems);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartItems={cartItems} />
        <Route exact path="/" component={Home} />
        <Route path="/shop">
          <Shop itemInfo={itemInfo} addCartItems={addCartItems} />
        </Route>
        <Route path="/cart">
          <Cart
            cartItems={cartItems}
            adjustCartItems={adjustCartItems}
            deleteCartItem={deleteCartItem}
          />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
