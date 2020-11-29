import { BrowserRouter, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Header from "./components/Header";
import "./index.css";
import { useState } from "react";

function App() {
  const itemInfo = [{ item: "msw", price: 20 }, {item: "red-prawn", price: 13}];
  const [cartItems, setCartItems] = useState({})

  function adjustCartItems(reservedInfo) {
    if (cartItems[reservedInfo.item]) {
      let newQuantity = cartItems[reservedInfo.item] + reservedInfo.quantity
      setCartItems({...cartItems, [reservedInfo.item]: newQuantity})
    } else {
      setCartItems({...cartItems, [reservedInfo.item]: reservedInfo.quantity})
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/shop">
          <Shop itemInfo={itemInfo} adjustCartItems={adjustCartItems}/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
