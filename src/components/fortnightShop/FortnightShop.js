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
          <Link className="link" to="/shop/fortnight">
            <span className="shopSeeAll">See all ></span>
          </Link>
        )}
      </header>

      <div className="shopCase">
        {items.loading
          ? items.data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="shopcard"
                  data-id={item.id}
                  data-api="fortnight"
                  style={{ width: "30%" }}
                >
                  <div>
                    <h5>{item.name}</h5>
                    <img
                      style={{ width: "30%" }}
                      src={item.images.icon}
                      alt="card img"
                    />
                  </div>
                  <div>
                    <h4 className="stock"></h4>
                    {see ? "" : <h5></h5>}
                    <button onClick={(e) => cart(e)}>cart</button>
                  </div>
                  <h6>{item.description}</h6>
                </div>
              );
            })
          : "loading..."}
      </div>
    </div>
  );
}
