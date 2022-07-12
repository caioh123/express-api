const express = require("express");
const friendsRouter = require("./routes/friends.router");
const app = express();

app.use(express.json());

app.use("/friends", friendsRouter);

app.listen(3333, () => {
  console.log("logou");
});
