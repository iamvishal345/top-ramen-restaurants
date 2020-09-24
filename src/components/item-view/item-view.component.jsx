import React from "react";
import "./item-view.styles.scss";
import { ItemCard } from "../item-card/item-card.component";
export const ItemView = ({ restaurantsList }) => (
  <div className="item-card-container">
    {restaurantsList.map((restaurant, i) => (
      <ItemCard key={i} {...restaurant} />
    ))}
  </div>
);
