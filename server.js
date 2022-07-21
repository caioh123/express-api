const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messageRouter = require("./routes/message.router");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index", {
    title: "caio henrique",
    caption: "naruto"
  })
})
app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);

app.listen(3333, () => {
  console.log("logou");
});
