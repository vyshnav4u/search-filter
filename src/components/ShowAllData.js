import React from "react";
import { locations } from "../data/cityData";

function ShowAllData(props) {
  // const suggestions = props.suggestions;
  // console.log(suggestions);
  let totOfContinent = 0;
  let totOfContinentCollection = {};
  let totOfCountry = 0;
  let totOfCountryArr = {};

  for (const continent of locations) {
    totOfContinent = 0;
    for (const country of continent.children) {
      totOfCountry = 0;
      for (const city of country.children) {
        totOfContinent += city.value;
        totOfCountry += city.value;
      }
      totOfCountryArr = { ...totOfCountryArr, [country.label]: totOfCountry };
    }
    totOfContinentCollection = {
      ...totOfContinentCollection,
      [continent.label]: totOfContinent,
    };
  }

  return (
    <section className="display-data-wrap">
      {locations.map((continent) => {
        return (
          <section className="continent-data-wrap" key={continent.id}>
            <div>
              <ul className="grid-two-col continent-data">
                <li> {continent.label} </li>
                <li> {totOfContinentCollection[continent.label]} </li>
              </ul>
              <div>
                {continent.children.map((country, i) => {
                  return (
                    <section className="country-data-wrap" key={i}>
                      <ul className="grid-two-col country-data">
                        <li> {country.label} </li>
                        <li> {totOfCountryArr[country.label]} </li>
                      </ul>

                      <div>
                        {country.children.map((city, j) => {
                          return (
                            <section className="city-data" key={j}>
                              <ul className="grid-two-col">
                                <li> {city.label} </li>
                                <li> {city.value} </li>
                              </ul>
                            </section>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default ShowAllData;
