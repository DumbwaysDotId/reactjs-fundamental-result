import React from "react";

//Import Components
import List from "./components/list";

function Props() {
  return (
    <div>
      <p>On the image element using the default props, namely src</p>
      <img src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1542354895/ulaqus4ev5ihhqkpbhuz.jpg" />

      <List listData="BMW" />
      <List listData="Mercedes-Benz" />
      <List listData="Lamborghini" />
    </div>
  );
}

export default Props;
