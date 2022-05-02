import React from "react";
import Bluebird from '../../../assests/bluebird.jpg'
const Card1 = () => {
    return (
    <div class="card shadow p-3 mb-5 bg-body rounded">
    <img class="card-img-top" src={Bluebird} alt="Card image cap"></img>
    <div class="card-body">
    <h5 class="card-title">Free </h5>
    <pre class="card-text">{`
When I compose poetry,
I feel like I'm flying FREE!!
    `}</pre>
    </div>

</div>
    )
}

export default Card1;