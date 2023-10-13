import React from "react";
import { Link } from "react-router-dom";

export default function ShowCaseShop(props) {
  const items = props.items;
  const header = props.header;
  const see = props.see;
  const cart = props.click;
  return (
    <div className="shopContainer">
      <header className="shopHeader">
        {header}
        {see && (
          <Link className="link" to="/shop/freeApi">
            <span className="shopSeeAll">See all ></span>
          </Link>
        )}
      </header>

      <div className="shopCase">
        {items.loading
          ? items.data.map((item) => {
              return (
                <div
                  className="shopcard"
                  key={item.id}
                  data-id={item.id}
                  data-api="freeapi"
                  style={{ width: "30%" }}
                >
                  <div>
                    <h5>{item.title}</h5>
                    <img
                      style={{ width: "40%" }}
                      src={item.image}
                      alt="card img"
                    />
                  </div>
                  <div>
                    <h4 className="stock">Stock: {item.rating.count}</h4>
                    <h5 className="price">price: ${item.price}</h5>
                    <button onClick={(e) => cart(e)}>cart</button>
                  </div>
                  {false && <h6>{item.description}</h6>}
                </div>
              );
            })
          : "loading..."}
      </div>
    </div>
  );
}
