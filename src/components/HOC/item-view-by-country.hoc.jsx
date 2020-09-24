import React from "react";

export const ItemViewByCountry = (WrappedComponent) => ({
  restaurantsList,
}) => {
  let resListByCountry = {};
  restaurantsList.forEach(({ Country, ...otherProps }) => {
    if (!resListByCountry[Country])
      resListByCountry[Country] = [{ ...otherProps, Country: Country }];
    else
      resListByCountry[Country] = [
        ...resListByCountry[Country],
        { ...otherProps, Country: Country },
      ];
  });
  return <WrappedComponent restaurantsList={resListByCountry} />;
};
