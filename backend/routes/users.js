const express = require("express");
const router = express.Router({ mergeParams: true });
const { getUsers, create, login } = require("../controllers/users");

router.route("/").get(getUsers);
router.route("/").post(create);
router.route("/login").post(login);

module.exports = router;
