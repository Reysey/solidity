"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web3js = require("./web3js");

var _web3js2 = _interopRequireDefault(_web3js);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  console.log(JSON.parse(_Campaign2.default.interface));
  return new _web3js2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImV0aCIsIkNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzFCO1VBQVEsQUFBUixJQUFZLEtBQUssQUFBTCxNQUFXLG1CQUFTLEFBQXBCLEFBQVosQUFDQTtTQUFPLElBQUksaUJBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsbUJBQVMsQUFBcEIsQUFBdEIsWUFBc0QsQUFBdEQsQUFBUCxBQUNEO0FBSEQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiQzovd2FtcDY0L3d3dy9LSUNLU1RBUlQifQ==