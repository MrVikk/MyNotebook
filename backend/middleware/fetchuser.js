const jwt = require("jsonwebtoken");
const JWT_SECRET = "Vivekisagood@boy";

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  //console.log("vivek");
  const token = req.headers["auth-token"];
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;