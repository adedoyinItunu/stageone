import React, { useState } from "react";

export default function Showcase(props) {
  const items = props.items;
  const header = props.header;

  return (
    <>
      <header style={{ color: "wheat" }}>
        <h2>{header}</h2>
      </header>
      <div className="homeContainer">
        <button
          className="homeButton"
          onClick={() => {
            document.querySelector(".showcase").scrollLeft -= 150;
          }}
        >
          {" "}
          left
        </button>

        <div className="showcase">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                style={{ height: "200px", width: "200px" }}
                className="containerShowcase"
              >
                <div style={{ height: "20px" }} className="categoryshowcase">
                  {item.category}{" "}
                </div>
                <img
                  style={{ height: "150px" }}
                  className="imgshowcase"
                  src={item.image}
                  alt="item"
                />
                <div className="textshowcase">${item.price} </div>
              </div>
            );
          })}
        </div>
        <button
          className="homeButton"
          onClick={() => {
            document.querySelector(".showcase").scrollLeft += 150;
          }}
        >
          {" "}
          right
        </button>
      </div>
    </>
  );
}
