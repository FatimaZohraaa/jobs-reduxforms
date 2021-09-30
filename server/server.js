const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost/jobOffers", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database.."));

app.use(express.json());
app.use(cors());

const offersRouter = require("./routes/offers");
app.use("/offers", offersRouter);

app.listen(3090, () => console.log("Server has started"));
