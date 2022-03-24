'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xb058afa7490BB081B0d17eA8b0e3850e2747B569');

console.log("##############################################");
console.log("#--------------------------------------------#");
console.log(instance);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTRCLEFBQTVCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLDBCQUFnQixBQUEzQixBQUF0QixZQUE0RCxBQUE1RCxBQUFqQjs7QUFFQSxRQUFRLEFBQVIsSUFBWSxBQUFaO0FBQ0EsUUFBUSxBQUFSLElBQVksQUFBWjtBQUNBLFFBQVEsQUFBUixJQUFZLEFBQVosQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkM6L3dhbXA2NC93d3cvS0lDS1NUQVJUIn0=