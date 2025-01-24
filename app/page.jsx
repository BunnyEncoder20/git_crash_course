import React from "react";

const newFeature1 = () => {
  console.log("This is Feature 1");
};
const newFeature2 = () => {
  console.log("This is Feature 2");
};
const newFeature3 = () => {
  console.log("This is Feature 3");
};

const newFeature4 = () => {};
const newFeature5 = () => {};
const newFeature6 = () => {};

const HomePage = () => {
  // Call feature 1
  newFeature1();

  // feature 2
  newFeature2();

  // feature 3
  newFeature3();

  // This feature is breaking the code in future
  newFeature4();

  // newFeature 5
  newFeature5();

  // newFeature 6
  newFeature6();

  return <div>This is new file to commit</div>;
};

export default HomePage;
