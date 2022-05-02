import React from "react";
import Shine from '../../../assests/shine.jpeg'
const Card2 = () => {
    return (
    <div class="card shadow p-3 mb-5 bg-body rounded">
    <img class="card-img-top" src={Shine} alt="Card image cap"></img>
    <div class="card-body">
    <h5 class="card-title">Bright & Shine </h5>
    <pre class="card-text">{`
Rhythmic Line,
Short and Sweet;
Bright and Shine,
Sounds Complete.
    `}</pre>
  </div>

</div>
    )
}

export default Card2;