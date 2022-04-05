"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _web3js = require("../ethereum/web3js");

var _web3js2 = _interopRequireDefault(_web3js);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _customStyles = require("./customStyle/customStyles");

var _customStyles2 = _interopRequireDefault(_customStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\wamp64\\www\\KICKSTART\\components\\RequestRow.js";


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            console.log("%cOn Approve Request", _customStyles2.default.info);
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 4;
                            return _web3js2.default.eth.getAccounts();

                        case 4:
                            accounts = _context.sent;

                            console.log(accounts);
                            _context.prev = 6;
                            _context.next = 9;
                            return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

                        case 9:
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context["catch"](6);

                            console.log("%c" + _context.t0.message, _customStyles2.default.error);

                        case 14:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[6, 11]]);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            console.log("%cOn Finalize Request", _customStyles2.default.info);
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 4;
                            return _web3js2.default.eth.getAccounts();

                        case 4:
                            accounts = _context2.sent;

                            console.log(accounts);
                            _context2.prev = 6;
                            _context2.next = 9;
                            return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

                        case 9:
                            _context2.next = 14;
                            break;

                        case 11:
                            _context2.prev = 11;
                            _context2.t0 = _context2["catch"](6);

                            console.log("%c" + _context2.t0.message, _customStyles2.default.error);

                        case 14:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[6, 11]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: "render",
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approvelCount > approversCount / 2;

            /*
                description     : desc,
                value           : val,
                recipient       : rec,
                complete        : false,
                approvalCount   : 0
            */

            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, request.value), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, request.approvalCount, "/", approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "green", basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, "Approve")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: "teal", basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, "Finalize")));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJUYWJsZSIsIndlYjMiLCJDYW1wYWlnbiIsIkN1c3RvbVN0eWxlcyIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJjb25zb2xlIiwibG9nIiwiaW5mbyIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiZXJyb3IiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmVsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJhcHByb3ZhbENvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBa0I7Ozs7Ozs7OztJLEFBR25COzs7Ozs7Ozs7Ozs7Ozs7d04sQUFFRixxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFDUjtvQ0FBQSxBQUFRLElBQVIsQUFBWSx3QkFBdUIsdUJBQW5DLEFBQWdELEFBQzFDO0FBRkUsdUNBRVMsd0JBQVMsTUFBQSxBQUFLLE1BRnZCLEFBRVMsQUFBb0I7NENBRjdCO21DQUdlLGlCQUFBLEFBQUssSUFIcEIsQUFHZSxBQUFTOzs2QkFBMUI7QUFIRSxnREFJUjs7b0NBQUEsQUFBUSxJQUpBLEFBSVIsQUFBWTs0Q0FKSjs0Q0FBQTttQ0FNRSxTQUFBLEFBQVMsUUFBVCxBQUFp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