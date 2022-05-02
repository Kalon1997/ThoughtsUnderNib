import React from "react";
import Dive from '../../../assests/dive.jpeg'
const Card4 = () => {
    return (
    <div class="card shadow p-3 mb-5 bg-body rounded">
    <img class="card-img-top" src={Dive} alt="Card image cap"></img>
    <div class="card-body">
    <h5 class="card-title">Dive in! </h5>
    <pre class="card-text">{`
Should I dive deeper?
And risk it all for 'YOLO' !
Or should I relax on steamer?
And feel a little low!
    `}</pre>
    </div>

</div>
    )
}

export default Card4;