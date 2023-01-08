const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const route = require("./routes/route");
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://cassmmmg:Functionup2022@cluster0.quflkwm.mongodb.net/Weekend-Project",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
