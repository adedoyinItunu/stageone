import React, { useEffect, useState } from "react";
import { UserContext } from "../../userContext";
import { useContext } from "react";
import Catalog from "../../components/catalog/Catalog";
import FortnightShop from "../../components/fortnightShop/FortnightShop";
import FreeApiShop from "../../components/freeApiShop/FreeApiShop";
import secureFetch from "../../components/secureFetch";
// import taker from "../components/useFetch";

export default function Shop(props) {
  const welcome = useContext(UserContext);
  const [items3, setItems3] = useState({ data: null, loading: false });
  const [items1, setItems1] = useState({ data: null, loading: false });
  useEffect(() => {
    secureFetch("https://fortnite-api.com/v2/shop/br")
      .then((response) => response.json())
      .then((json) => {
        setItems3({ data: json.data.featured.entries[3].items, loading: true });
      })
      .catch((error) => console.log(error));

    secureFetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        let items = [];
        items.push(json[3]);
        items.push(json[10]);
        items.push(json[15]);
        items.push(json[19]);
        setItems1({ data: items, loading: true });
      })
      .catch((error) => console.log(error));

    secureFetch("https://api.storerestapi.com/products")
      .then((response) => response.json())
      .then((json) => {})
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Catalog />
      <div className="shopTopic">
        <h4>Fortnight Gadget</h4>
        <FortnightShop
          click={props.cart}
          see={true}
          header={"Jetglid"}
          items={items3}
        />
      </div>
      <div className="shopTopic">
        <h4> Free Api store</h4>
        <FreeApiShop
          click={props.cart}
          see={true}
          header={"Accessories"}
          items={items1}
        />
      </div>
      <div style={{ height: "100px", backgroundColor: "wheat" }}></div>
    </div>
  );
}
