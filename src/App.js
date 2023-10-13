import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import "./App.css";
import Cart from "./pages/cart/Cart";
import Nav from "./components/nav/Nav";
import Fortnight from "./pages/fortnight/Fortnight";
import FreeApi from "./pages/freeapi/FreeApi";
import ShopItemsProvider from "./userContext";
import { useState } from "react";

function App() {
  const [cart, setcart] = useState([]);
  function cartClick(e) {
    const x = e.target.parentElement.parentElement;
    const _name = x.firstChild.firstChild.textContent;
    const _img = x.firstChild.children[1].src;
    const _stock = e.target.parentElement.firstChild.textContent;
    const _api = x.getAttribute("data-api");
    const _id = x.getAttribute("data-id");
    if (_api === "fortnight") {
      const _description = x.children[2].textContent;
      const item = {
        id: _id,
        api: _api,
        name: _name,
        img: `${_img}`,
        stock: _stock,
        _price: "",
        description: _description,
      };
      setcart((prev) => prev.concat(item));
    } else {
      const _price = e.target.parentElement.children[1].textContent;
      const item = {
        id: _id,
        api: _api,
        name: _name,
        img: `${_img}`,
        stock: _stock,
        price: _price,
        description: "",
      };
      setcart((prev) => prev.concat(item));
    }
  }
  return (
    <div className="App">
      <Nav />
      <ShopItemsProvider>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/shop">
            <Route index element={<Shop cart={cartClick} />} />
            <Route
              path="/shop/fortnight"
              element={<Fortnight cart={cartClick} />}
            />
            <Route
              path="/shop/freeApi"
              element={<FreeApi cart={cartClick} />}
            />
          </Route>
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </ShopItemsProvider>
    </div>
  );
}

export default App;
