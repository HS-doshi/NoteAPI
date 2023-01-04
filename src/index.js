// server ---request--> GET/POST/PUT/DELETE
// check which request come at here like get, post ...so on.
// Then call method.
const express = require("express");
const app = express();
// const quotes = require("./quotes.json");
const userRouter = require("./routes/userRouter");
const noteRouter = require("./routes/noteRoute");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

// Above is import package.
dotenv.config();

app.use(express.json());
app.use(cors())

app.use("/users", userRouter);
app.use("/note", noteRouter);

// 1st is request object & 2nd is response object.
app.get("/", (req, res) => {
    res.send("Notes API")
})
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server Started on Port no 5000." + PORT)
        })
    })
    .catch((error) => {
        console.log("Error");
    })

// schema is showing which property we have to save from the object.