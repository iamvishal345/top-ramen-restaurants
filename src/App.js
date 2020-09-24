import React, { useState, useEffect } from "react";
import "./App.scss";
import { Search } from "./components/search/search.component";
import { ItemView } from "./components/item-view/item-view.component";
import { Navigation } from "./components/navigation/navigation.component";
import { ItemViewByCondition } from "./components/item-view-by-condition/item-view-by-condition.component";
import { Switch, Route } from "react-router-dom";
import { ItemViewByYear } from "./components/HOC/item-view-by-year.hoc";
import { ItemViewByCountry } from "./components/HOC/item-view-by-country.hoc";
const ItemViewByYearContainer = ItemViewByYear(ItemViewByCondition);
const ItemViewByCountryContainer = ItemViewByCountry(ItemViewByCondition);
function App() {
  const [searchText, handleSearchTextChange] = useState("");
  const [restaurantsList, setRestaurantsList] = useState([]);
  useEffect(() => {
    fetch("http://starlord.hackerearth.com/TopRamen")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRestaurantsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  return (
    <div className="container">
      <nav>
        <Navigation />
      </nav>
      <header>
        <Search
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
        />
      </header>
      <main>
        <Switch>
          <Route
            path="/all"
            render={() => (
              <ItemView
                restaurantsList={restaurantsList.filter((rest) => {
                  return (
                    rest.Brand.toLowerCase().indexOf(searchText.toLowerCase()) >
                    -1
                  );
                })}
              />
            )}
          ></Route>
          <Route
            path="/top"
            render={() => (
              <ItemViewByYearContainer
                restaurantsList={restaurantsList.filter((rest) => {
                  return (
                    rest.Brand.toLowerCase().indexOf(searchText.toLowerCase()) >
                    -1
                  );
                })}
              />
            )}
          ></Route>
          <Route
            path="/country"
            render={() => (
              <ItemViewByCountryContainer
                restaurantsList={restaurantsList.filter((rest) => {
                  return (
                    rest.Brand.toLowerCase().indexOf(searchText.toLowerCase()) >
                    -1
                  );
                })}
              />
            )}
          ></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
