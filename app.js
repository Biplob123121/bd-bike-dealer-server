const express = require('express');
const cors = require('cors');
require('./config/db');
const productRouter = require('./routes/product.route');


const app = express();


// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/product', productRouter)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

module.exports = app;