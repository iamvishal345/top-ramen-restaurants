import React from "react";

export const ItemViewByYear = (WrappedComponent) => ({ restaurantsList }) => {
  let resListByYear = {};
  restaurantsList.forEach(({ "Top Ten": topTen, ...otherProps }) => {
    if (topTen !== "NaN") {
      const [year, rank] = topTen.split(" #");
      if (!resListByYear[year])
        resListByYear[year] = [{ ...otherProps, rank: rank }];
      else
        resListByYear[year] = [
          ...resListByYear[year],
          {
            ...otherProps,
            rank: rank,
          },
        ];
      resListByYear[year].sort((a, b) => a.rank - b.rank);
    }
  });
  return <WrappedComponent restaurantsList={resListByYear} />;
};
