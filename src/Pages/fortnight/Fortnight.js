import React, { useEffect, useState } from "react";
import FortnightShop from "../../components/fortnightShop/FortnightShop";
import secureFetch from "../../components/secureFetch";
// import taker from "../components/useFetch";
export default function Shop(props) {
  const [items, setItems] = useState({ data: null, loading: false });
  const [items1, setItems1] = useState({ data: null, loading: false });
  const [items2, setItems2] = useState({ data: null, loading: false });
  const [items3, setItems3] = useState({ data: null, loading: false });
  const [items4, setItems4] = useState({ data: null, loading: false });
  const [items5, setItems5] = useState({ data: null, loading: false });
  const [items6, setItems6] = useState({ data: null, loading: false });
  useEffect(() => {
    secureFetch("https://fortnite-api.com/v2/shop/br")
      .then((response) => response.json())
      .then((json) => {
        setItems({ data: json.data.featured.entries[0].items, loading: true });
        setItems1({ data: json.data.featured.entries[1].items, loading: true });
        setItems2({ data: json.data.featured.entries[2].items, loading: true });
        setItems3({ data: json.data.featured.entries[3].items, loading: true });
        setItems4({ data: json.data.featured.entries[4].items, loading: true });
        setItems5({ data: json.data.featured.entries[5].items, loading: true });
        setItems6({ data: json.data.featured.entries[6].items, loading: true });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        {" "}
        Fortnight Gadget
        <FortnightShop click={props.cart} header={"Predator"} items={items} />
        <FortnightShop
          click={props.cart}
          header={"Raptor full pack"}
          items={items1}
        />
        <FortnightShop
          click={props.cart}
          header={"Ana stream"}
          items={items2}
        />
        <FortnightShop click={props.cart} header={"Jetglid"} items={items3} />
        <FortnightShop click={props.cart} header={""} items={items4} />
        <FortnightShop click={props.cart} header={null} items={items5} />
        <FortnightShop click={props.cart} header={null} items={items6} />
      </div>
    </div>
  );
}
