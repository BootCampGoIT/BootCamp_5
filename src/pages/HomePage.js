import React from "react";

const HomePage = ({history}) => {
    console.log("HomePage", history.location);
  return <h2>Home</h2>;
};

export default HomePage;
