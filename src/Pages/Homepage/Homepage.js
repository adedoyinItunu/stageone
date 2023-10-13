import React, { useEffect, useState } from "react";
import Tags from "../../components/tags/Tags";
import Imgslide from "../../components/imgslide/Imgslide";
import Showcase from "../../components/showcase/Showcase";

export default function Homepage(props) {
  const [topDeals, setTopDeals] = useState([]);
  useEffect(() => {
    topDealsFn();
  }, []);

  async function topDealsFn() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setTopDeals((x) => (x = json));
      });
  }
  return (
    <div className="homepage">
      <div className="show1">
        <Tags />
        <Imgslide />
      </div>
      <Showcase header={"Top Deals"} items={topDeals} />
    </div>
  );
}
