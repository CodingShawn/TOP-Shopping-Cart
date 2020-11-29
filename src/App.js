import { BrowserRouter, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Header from "./components/Header";
import "./index.css";

function App() {
  const itemInfo = [{ item: "msw", price: 20 }, {item: "red-prawn", price: 13}];

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/shop">
          <Shop itemInfo={itemInfo}/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
