const { Router } = require("express");
const router = Router();

const {validateUser, validateLogin} = require('../middlewares/validatUser');
const generateToken = require('../generateToken');

router.post('/user/register', validateUser, (req, res) => {
  res.status(201).json({ "message": "user created" });
});

router.post('/user/login', validateLogin, (req, res) => {
  res.status(200).json({ "token": generateToken() });
});

module.exports = router;
