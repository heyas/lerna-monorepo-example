import React from "react";

function Heading({ level = "5", title }) {
  return React.createElement(`h${level}`, {}, title);
}

export default Heading;
