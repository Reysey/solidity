'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _truffleHdwalletProvider = require('truffle-hdwallet-provider');

var _truffleHdwalletProvider2 = _interopRequireDefault(_truffleHdwalletProvider);

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const web3Provider = new HDWalletProvider('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545');
// // const provider = new web3.providers.HttpProvider('HTTP://127.0.0.1:7545');
// const web3 =  new Web3(web3Provider);

// const web3 = new Web3(web3Provider);

var web3 = void 0;
if (typeof window !== 'undefined') {
    // WE ARE IN THE BROWSER
    console.log("%cWE ARE IN THE BROWSER", "font-weight:900;color:blue;");
    if (typeof window.web3 !== 'undefined') {
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        console.log("%cWEB3 IS PRESENT", "font-weight:900;color:red;");
        web3 = new _web2.default(window.ethereum);
    } else {
        // WE ARE ON THE SERVER OR THE USER IS NOT RUNNING METAMASK
        // const web3Provider = new HDWalletProvider('example vote decrease clarify year poet cactus near wolf matrix voyage idea', 'HTTP://127.0.0.1:7545');
        console.log("%cWEB3 HTTP PROVIDER", "font-weight:900;color:green;");
        var web3httpProvider = new _web2.default.providers.HttpProvider('HTTP://127.0.0.1:7545');
        web3 = new _web2.default(web3httpProvider);
    }
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzanMuanMiXSwibmFtZXMiOlsiSERXYWxsZXRQcm92aWRlciIsIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImV0aGVyZXVtIiwid2ViM2h0dHBQcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxZQUFKO0FBQ0EsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBckIsYUFBaUMsQUFDN0I7QUFDQTtZQUFRLEFBQVIsSUFBWSxBQUFaLDJCQUF1QyxBQUF2QyxBQUNBO1FBQUcsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBMUIsYUFBc0MsQUFDbEM7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVoscUJBQWlDLEFBQWpDLEFBQ0E7ZUFBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFoQixBQUFQLEFBQ0g7QUFoQkQsV0FpQkssQUFDRDtBQUNBO0FBQ0E7Z0JBQVEsQUFBUixJQUFZLEFBQVosd0JBQW9DLEFBQXBDLEFBQ0E7WUFBTSxtQkFBbUIsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUF6QixBQUNBO2VBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIO0FBQ0o7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzanMuanMiLCJzb3VyY2VSb290IjoiQzovd2FtcDY0L3d3dy9LSUNLU1RBUlQifQ==