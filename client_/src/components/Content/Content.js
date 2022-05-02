import React from "react";
import Card1 from "./Card/Card1.js";
import Card2 from "./Card/Card2.js";
import Card3 from "./Card/Card3.js";
import Card4 from "./Card/Card4.js";
import Intro from "./Intro/Intro.js";
const Content = () => {
    return (
      
      <div>
        <Intro></Intro>
      <div class="container mt-5">
<div class="row">
  <div class="col-sm">
   <Card1></Card1>
  </div>
  <div class="col-sm">
  <Card2></Card2>
  </div>
  <div class="col-sm">
   <Card3></Card3>
  </div>
  <div class="col-sm">
  <Card4></Card4>
  </div>

</div>

</div></div>

    )
}

export default Content;