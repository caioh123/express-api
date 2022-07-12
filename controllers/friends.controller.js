const friends = require("../models/friends.model");
function postFriends(req, res) {
  if (!req.body.nome) {
    return res.status(400).json({ message: "ta errado" });
  }
  const friend = req.body;

  friends.push(friend);

  res.status(200).json({ message: "deu certo" });
  console.log(friends);
}

function getFriends(req, res) {
  res.json(friends);
}

module.exports = {
  getFriends,
  postFriends,
};
