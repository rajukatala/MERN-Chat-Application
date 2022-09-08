const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, rajuram, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
