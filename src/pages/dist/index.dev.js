"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;

var _image = _interopRequireDefault(require("next/image"));

var _google = require("next/font/google");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inter = (0, _google.Inter)({
  subsets: ["latin"]
});

function Home() {
  return main;
}