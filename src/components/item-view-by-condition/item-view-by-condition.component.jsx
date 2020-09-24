import React from "react";
import "./item-view-by-condition.styles.scss";
import { ItemView } from "../item-view/item-view.component";
export const ItemViewByCondition = ({ restaurantsList }) => {
  return (
    <div className="view-by-condition-container">
      {Object.keys(restaurantsList)
        .sort((a, b) => b - a)
        .map((objKey) => {
          return (
            <React.Fragment key={objKey}>
              <h1 className="header">{objKey}</h1>
              <ItemView restaurantsList={restaurantsList[objKey]} />
            </React.Fragment>
          );
        })}
    </div>
  );
};
