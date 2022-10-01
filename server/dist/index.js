"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("../server/database/connection"));

var _index = _interopRequireDefault(require("./api/auth/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Database connection
_dotenv.default.config();

const zomato = (0, _express.default)();
const port = 4000;
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  res.json({
    message: "Server is runnning successfully !! "
  });
}); // /auth/signup

zomato.use("/auth", _index.default);
zomato.listen(port, () => {
  (0, _connection.default)().then(() => {
    console.log("Server run successful !! ");
  }).catch(error => {
    console.log("Server run was success but database connection failed");
    console.log(error);
  });
});