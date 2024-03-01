const { response } = require("express");
const mysql = require('mysql');
const env = require('../env.js');
const config = require('../dbconfig.js')[env];

const login = async (req, res = response) => {
  const { email, password } = req.body;

  let dbcon = mysql.createConnection(config);

  const userDetails = "SELECT * FROM users WHERE email = ?";
  console.log(userDetails);

  dbcon.query(userDetails, [email], function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }

    console.log(result);

    if (result && result.length > 0) {
      const user = result[0];

      if (password !== user.password) {
        return res.status(400).json({ message: "User / Password are incorrect" });
      }

      res.status(200).json({ user });
    } else {
      // User not found
      return res.status(401).json({ message: "User not found!" });
    }
  });
};

module.exports = {
  login,
};
