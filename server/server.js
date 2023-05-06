const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

// config dot env file
dotenv.config();

//database call
connectDb();

// Rest Object
const app = express();


// Middlewares
app.use(morgan());
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/v1/users", require("./routes/userRoute"));

//Port
const PORT = 8080 || process.env.PORT

//Listeners
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});