'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _truffleHdwalletProvider = require('truffle-hdwallet-provider');

var _truffleHdwalletProvider2 = _interopRequireDefault(_truffleHdwalletProvider);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3Provider = new _truffleHdwalletProvider2.default('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545');
// const provider = new web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
var web3 = new _web2.default(web3Provider);

console.log(web3);

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIkhEV2FsbGV0UHJvdmlkZXIiLCJXZWIzIiwid2ViM1Byb3ZpZGVyIiwid2ViMyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBTSxlQUFlLEFBQUksQUFBSixzQ0FBcUIsQUFBckIsK0VBQW9HLEFBQXBHLEFBQXJCO0FBQ0E7QUFDQSxJQUFNLE9BQVEsQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBZDs7QUFFQSxRQUFRLEFBQVIsSUFBWSxBQUFaLEFBRUE7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi93YW1wNjQvd3d3L0tJQ0tTVEFSVCJ9