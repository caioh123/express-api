const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");

const app = express();

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);

app.listen(3333, () => {
  console.log("logou");
});
