"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web3js = require("./web3js");

var _web3js2 = _interopRequireDefault(_web3js);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

var _customStyles = require("../components/customStyle/customStyles");

var _customStyles2 = _interopRequireDefault(_customStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  console.log("%c Address: " + address, _customStyles2.default.address);
  console.log(JSON.parse(_Campaign2.default.interface));
  return new _web3js2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQ2FtcGFpZ24iLCJDdXN0b21TdHlsZXMiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImV0aCIsIkNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBeUIsQUFBekIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzFCO1VBQVEsQUFBUixJQUFZLGlCQUFlLEFBQTNCLFNBQW1DLHVCQUFhLEFBQWhELEFBQ0E7VUFBUSxBQUFSLElBQVksS0FBSyxBQUFMLE1BQVcsbUJBQVMsQUFBcEIsQUFBWixBQUNBO1NBQU8sSUFBSSxpQkFBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyxtQkFBUyxBQUFwQixBQUF0QixZQUFzRCxBQUF0RCxBQUFQLEFBQ0Q7QUFKRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJDOi93YW1wNjQvd3d3L0tJQ0tTVEFSVCJ9