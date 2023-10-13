import React, { useState, useRef } from "react";
import xmas from "../assets/xmas.jfif";
import xmas1 from "../assets/xmas1.jfif";
import xmas2 from "../assets/xmas2.jfif";
import left from "../assets/arrow-expand-left.svg";
import right from "../assets/arrow-expand-right.svg";
import "react-slideshow-image/dist/styles.css";
export default function Imgslide() {
  const tab = useRef(null);
  useState(() => {
    setInterval(() => {
      //Please see this article to see how the below works
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
      tab.current.insertBefore(tab.current.firstChild, null);
    }, 1200);
  }, []);

  const btnStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50px",
  };
  const imgStyle = {
    height: "300px",
  };
  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={btnStyle}
        onClick={() => {
          document.querySelector(".slideImage").scrollLeft += 150;
        }}
      >
        <img src={left} alt="left" />{" "}
      </button>
      <div
        ref={tab}
        className="slideImage"
        style={{
          display: "flex",
          gap: "2px",
          flexWrap: "nowrap",
          overflow: "hidden",
          overflowX: "hidden",
        }}
      >
        <div>
          <img style={imgStyle} src={xmas} alt="" />
        </div>
        <div>
          <img style={imgStyle} src={xmas1} alt="" />
        </div>
        <div>
          <img style={imgStyle} src={xmas2} alt="" />
        </div>
      </div>
      <button
        style={btnStyle}
        onClick={() => {
          document.querySelector(".slideImage").scrollLeft -= 150;
        }}
      >
        <img src={right} alt="right" />
      </button>
    </div>
  );
}
