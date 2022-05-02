import React from "react";
import Headphone from '../../../assests/headphone.jpg'
const Card3 = () => {
    return (
    <div class="card shadow p-3 mb-5 bg-body rounded">
    <img class="card-img-top" src={Headphone} alt="Card image cap"></img>
    <div class="card-body">
    <h5 class="card-title">Melody </h5>
    <pre class="card-text">{`
I don't understand those,
Who listens to only sad melody,
Is sadness what they chose?!
It just makes the heart heavy !!
    `}</pre>
    </div>

</div>
    )
}

export default Card3;