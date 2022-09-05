//mongodb

require('./config/db');

const app = require('express')();
const port = 8000;

const cors = require("cors");
app.use(cors());

const UserRouter = require('./api/User');


//for accessing post form data

const bodyparser = require('express').json;
app.use(bodyparser());



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
