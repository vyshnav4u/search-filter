import React from "react";
import ShowAllData from "./ShowAllData";
import ShowFilteredData from "./ShowFilteredData";

function ShowData(props) {
  const suggestions = props.suggestions;
  let displayFlag = true;
  if (suggestions.length > 0) displayFlag = false;
  return (
    <div>
      {!displayFlag && <ShowFilteredData suggestions={suggestions} />}
      {displayFlag && <ShowAllData suggestions={suggestions} />}
    </div>
  );
}

export default ShowData;
