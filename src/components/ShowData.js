import React, { useEffect, useState } from "react";
import { locations } from "../data/cityData";

function ShowData(props) {
  //   const [totContinent, setTotContinent] = useState([]);
  //   const [totCountry, setTotCountry] = useState({});
  //   let totOfContinent = 0;
  //   let totOfCountry = 0;
  //   let totOfCountryArr = {};
  //   const totOfContinentArr = [];
  //   const suggestions = props.suggestions;

  //   for (const continent of locations) {
  //     totOfContinent = 0;
  //     for (const country of continent.children) {
  //       totOfCountry = 0;
  //       for (const city of country.children) {
  //         totOfCountry += city.value;
  //         totOfCountry += city.value;
  //       }
  //       totOfCountryArr = { ...totOfCountryArr, [country.label]: totOfCountry };
  //     }
  //   }

  //   setTotCountry(totOfCountryArr);

  return (
    <section className="display-data-wrap">
      {locations.map((continent) => {
        return (
          <section className="continent-data" key={continent.id}>
            <div>
              <div className="grid-two-col">
                <div> {continent.label} </div>
                <div> Continent Total </div>
              </div>
              <div>
                {continent.children.map((country, i) => {
                  //   console.log(country);
                  return (
                    <section className="country-data" key={i}>
                      <div className="grid-two-col">
                        <div> {country.label} </div>
                        <div> Country Total </div>
                      </div>

                      <div>
                        {country.children.map((city, j) => {
                          return (
                            <section className="city-data" key={j}>
                              <div className="grid-two-col">
                                <div> {city.label} </div>
                                <div> {city.value} </div>
                              </div>
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

export default ShowData;
