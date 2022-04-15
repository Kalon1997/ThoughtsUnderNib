const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express();
const path = require("path");
require("dotenv").config({ path: __dirname + "/config/config.env" });
const user = require('./routes/User.js')
const cors = require('cors')
const connection = require('./db')
connection()

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());


app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/v1',user);

app.listen(process.env.PORT, () => {
    console.log(`listening @ ${process.env.PORT}`)
})




// app.use(cors())
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// app.use(
//     cors({
//       origin: [`http://localhost:5000`, `https://localhost:5000`],
//       credentials: 'true',
//     })
//   );