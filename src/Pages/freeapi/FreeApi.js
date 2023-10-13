import React, { useEffect, useState } from "react";
import FreeApiShop from "../../components/freeApiShop/FreeApiShop";
import secureFetch from "../../components/secureFetch";
// import taker from "../components/useFetch";
export default function Shop(props) {
  const [items, setItems] = useState({ data: null, loading: false });
  const [items1, setItems1] = useState({ data: null, loading: false });
  const [items2, setItems2] = useState({ data: null, loading: false });
  const [items3, setItems3] = useState({ data: null, loading: false });
  useEffect(() => {
    secureFetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        less(json, setItems, 0);
        less(json, setItems1, 5);
        less(json, setItems2, 10);
        less(json, setItems3, 15);
      })
      .catch((error) => console.log(error));
  }, []);
  function less(data, set, count) {
    let items = [];
    items.splice(
      0,
      0,
      data[count + 0],
      data[count + 1],
      data[count + 2],
      data[count + 3],
      data[count + 4]
    );
    set({ data: items, loading: true });
  }
  return (
    <div>
      <div>
        {" "}
        FreeApi Shop
        <FreeApiShop click={props.cart} header={"men clothing"} items={items} />
        <FreeApiShop click={props.cart} eader={"jwelry "} items={items1} />
        <FreeApiShop click={props.cart} header={"Gadet "} items={items2} />
        <FreeApiShop
          click={props.cart}
          header={"women clothes "}
          items={items3}
        />
      </div>
    </div>
  );
}
