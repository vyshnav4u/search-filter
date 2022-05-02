import { useEffect, useState } from "react";
import "./App.css";
import { locations } from "./data/cityData";

function App() {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const tempSuggestion = [];
    if (!userInput.trim()) {
      setSuggestions(tempSuggestion);
      return;
    }

    for (const continent of locations) {
      for (const country of continent.children) {
        for (const city of country.children) {
          const cityName = city.label;
          if (cityName.toLowerCase().includes(userInput.toLowerCase())) {
            const continentName = continent.label;
            const countryName = country.label;
            const matchCity = {
              continent: continentName,
              country: countryName,
              city: cityName,
            };

            tempSuggestion.push(matchCity);
          }
        }
      }
    }
    setSuggestions(tempSuggestion);
  }, [userInput]);

  // useEffect(() => {
  //   suggestions.map((place) => {
  //     console.log(place);
  //   });
  // }, [suggestions]);

  return (
    <div className="App">
      <section className="main-warp">
        <div>
          <p>Search The City</p>
        </div>
        <div className="search-warp">
          {/* task: change the filter function in useEffect to onChange callback  */}
          <input
            type="text"
            id="city-search"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
          />
          <button id="btn-search">Search</button>
        </div>
        <div id="output">
          <ul className="output-wrap">
            {suggestions.length === 0 && userInput !== "" && (
              <li className="item"> {"Not Found"} </li>
            )}
            {suggestions.map((place, i) => {
              return (
                <li className="item" key={i}>
                  {" "}
                  {place.continent} {" > "} {place.country} {" > "} {place.city}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
