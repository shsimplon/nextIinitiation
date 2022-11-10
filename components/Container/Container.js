import React from "react";
import NavBar from "../navbar";
const Container = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Container;
