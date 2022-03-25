'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web3js = require('./web3js');

var _web3js2 = _interopRequireDefault(_web3js);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web3js2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0x7670d103e2f8eA60bc13AEC254e69eaceB7A2818');
var accounts = _web3js2.default.eth.getAccounts().then().catch();
console.log("ACCOUNTS");
console.log(accounts);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsInRoZW4iLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE0QixBQUE1Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksaUJBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsMEJBQWdCLEFBQTNCLEFBQXRCLFlBQTRELEFBQTVELEFBQWpCO0FBQ0EsSUFBTSxXQUFXLGlCQUFLLEFBQUwsSUFBUyxBQUFULGNBQXVCLEFBQXZCLE9BQThCLEFBQTlCLEFBQWpCO0FBQ0EsUUFBUSxBQUFSLElBQVksQUFBWjtBQUNBLFFBQVEsQUFBUixJQUFZLEFBQVosQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkM6L3dhbXA2NC93d3cvS0lDS1NUQVJUIn0=