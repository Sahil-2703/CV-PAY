const express = require("express");
const router = express.Router();

const {users,usersTesting, login} = require("../controllers/users")
//GET users listing.
router.route("/user").get(users);
router.route("/login").get(login);
// just for testing purposes
router.route("/testing").get(usersTesting);
module.exports = router;