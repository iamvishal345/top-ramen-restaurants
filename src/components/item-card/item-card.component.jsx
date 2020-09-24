import React from "react";
import "./item-card.styles.scss";
import { Rating } from "../rating/rating.component";
export const ItemCard = ({
  Brand,
  Country,
  Stars,
  Style,
  "Top Ten": TopTen,
  Variety,
  rank,
}) => (
  <div className="item-card">
    <div className="top-bar">
      <i className="country pad-5">{Country}</i>
      {rank ? <i className="rank-badge pad-5">{rank}</i> : null}
    </div>
    <h1 className="title">{Brand}</h1>
    <div className="rating" title={isNaN(Stars) ? "NA" : Stars}>
      <Rating stars={Stars} />
    </div>
    <div className="style pad-5">
      {Style === "Nan" || Style === "NaN" ? "Any" : Style}
    </div>
    <div className="variety pad-5">{Variety}</div>
  </div>
);

// Brand: "MAMA"
// Country: "Myanmar"
// Stars: 5
// Style: "Pack"
// Top Ten: "2016 #10"
// Variety: "Instant Noodles Coconut Milk Flavour"
