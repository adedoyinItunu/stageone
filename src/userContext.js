import { createContext, useContext, useState } from "react";
import React from "react";
const ShopItems = React.createContext();
const ShopItemsUpdate = React.createContext();

export function useShopItems() {
  return useContext(ShopItems);
}
export function useShopItemsUpdate() {
  return useContext(ShopItemsUpdate);
}
export const UserContext = createContext(cartClick);

function cartClick(e, set) {
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
      description: _description
    };
    set((prev) => prev.concat(item));
  } else {
    const _price = e.target.parentElement.children[1].textContent;
    const item = {
      id: _id,
      api: _api,
      name: _name,
      img: `${_img}`,
      stock: _stock,
      price: _price,
      description: ""
    };
    set((prev) => prev.concat(item));
  }
}

export default function ShopItemsProvider({ children }) {
  const [shopItems, setShopItems] = useState([]);
  function additems(item) {
    setShopItems((prev) => prev.concat(item));
  }
  return (
    <ShopItems.Provider value={shopItems}>
      <ShopItemsUpdate.Provider value={additems}>
        {children}
      </ShopItemsUpdate.Provider>
    </ShopItems.Provider>
  );
}
