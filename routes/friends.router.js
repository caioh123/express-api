const express = require("express");
const friendsController = require("../controllers/friends.controller");

const friendRouter = express.Router();

friendRouter.get("/", friendsController.getFriends);
friendRouter.post("/", friendsController.postFriends);

module.exports = friendRouter;
