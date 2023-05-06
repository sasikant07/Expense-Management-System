const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");

// config dot env file
dotenv.config();


// Rest Object
const app = express();


// Middlewares
app.use(morgan());
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
    res.send("<h1>Hello from Server</h1>")
});

//Port
const PORT = 8080 || process.env.PORT

//Listeners
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});