"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _route = _interopRequireDefault(require("./config/route.config"));

var _google = _interopRequireDefault(require("./config/google.config"));

var _connection = _interopRequireDefault(require("./database/connection"));

var _auth = _interopRequireDefault(require("./api/auth"));

var _food = _interopRequireDefault(require("./api/food"));

var _restaurant = _interopRequireDefault(require("./api/restaurant"));

var _user = _interopRequireDefault(require("./api/user"));

var _menu = _interopRequireDefault(require("./api/menu"));

var _order = _interopRequireDefault(require("./api/order"));

var _review = _interopRequireDefault(require("./api/review"));

var _images = _interopRequireDefault(require("./api/images"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// private route authorization config
// google authentication route config
// Database connection
// API connection
_dotenv.default.config(); // authoraization configuration


(0, _route.default)(_passport.default);
(0, _google.default)(_passport.default);
const zomato = (0, _express.default)();
const port = 4000;
zomato.use(_express.default.json());
zomato.use((0, _expressSession.default)({
  secret: process.env.JWTSECRET,
  resave: true,
  saveUninitialized: true
}));
zomato.use(_passport.default.initialize());
zomato.use(_passport.default.session());
zomato.get("/", (req, res) => {
  res.json({
    message: "Server is runnning successfully !! "
  });
}); // API routes
// auth route

zomato.use("/auth", _auth.default); // food route

zomato.use("/food", _food.default); // restaurant route

zomato.use("/restaurant", _restaurant.default); // user route

zomato.use("/user", _user.default); // menu route

zomato.use("/menu", _menu.default); // order route

zomato.use("/order", _order.default); // review route

zomato.use("/review", _review.default); // review route

zomato.use("/image", _images.default);
zomato.listen(port, () => {
  (0, _connection.default)().then(() => {
    console.log("Server ran successfully !! ");
  }).catch(error => {
    console.log("Server run was success but database connection failed");
    console.log(error);
  });
});