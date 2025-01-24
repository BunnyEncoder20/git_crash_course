import React from "react";

const newFeature1 = () => {
  console.log("This is Feature 1");
};

const HomePage = () => {
  // Call feature 1
  newFeature1();
  return <div>This is new file to commit</div>;
};

export default HomePage;
