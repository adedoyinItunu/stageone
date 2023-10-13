import React from "react";

export default function Cart(props) {
  const cart = props.cart;

  return (
    <div>
      {cart.length ? (
        <div className="shopCase">
          {cart.map((item) => {
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
                  <img style={{ width: "30%" }} src={item.img} alt="card img" />
                </div>
                <div>
                  <h4 className="stock">{item.stock}</h4>
                  <h5 className="price">{item.price}</h5>
                </div>
                <h6>{item.description}</h6>
                <div>
                  <label>
                    {" "}
                    <h4>
                      amount:
                      <span>
                        <input
                          className="amount"
                          min="1"
                          style={{ width: "30px" }}
                          type="number"
                        />
                      </span>
                    </h4>
                  </label>
                  <button className="buy">Buy</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div> Add items and they would apper here </div>
      )}
    </div>
  );
}
