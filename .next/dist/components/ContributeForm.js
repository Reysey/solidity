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

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web3js = require("../ethereum/web3js");

var _web3js2 = _interopRequireDefault(_web3js);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\wamp64\\www\\KICKSTART\\components\\ContributeForm.js";


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ loading: true });

                                _context.prev = 3;
                                _context.next = 6;
                                return _web3js2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;

                                console.log(accounts);
                                _context.next = 10;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web3js2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 10:

                                _routes.Router.replace("/campaign/" + _this.props.address);

                                _context.next = 17;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](3);

                                console.error("ERROR AT CONTRIBUTE FORM JS :: [ON SUBMIT] -" + _context.t0.message);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 17:

                                _this.setState({ value: '', loading: false });

                            case 18:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, "Amount To Contribute"), _react2.default.createElement(_semanticUiReact.Input, {
                label: "Ether",
                labelPosition: "right",
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, "Bingo, Something Went Wrong!"), _react2.default.createElement(_semanticUiReact.Message.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, this.state.errorMessage)), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, "Contribute"));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsImNhbXBhaWduIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2UiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVEsQUFBTSxBQUFPOztBQUM3QixBQUFPLEFBQWMsQUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUlmOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFFRjttQkFBUSxBQUNHLEFBQ1A7MEJBRkksQUFFVSxBQUNkO3FCLEFBSEksQUFHSztBQUhMLEFBQ0osaUIsQUFLSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBQUEsQUFBTSxBQUNBO0FBRkMsMkNBRVUsd0JBQVMsTUFBQSxBQUFLLE1BRnhCLEFBRVUsQUFBb0IsQUFFckM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBSlIsQUFJUCxBQUFjLEFBQVU7O2dEQUpqQjtnREFBQTt1Q0FPb0IsaUJBQUEsQUFBSyxJQVB6QixBQU9vQixBQUFTOztpQ0FBMUI7QUFQSCxvREFRSDs7d0NBQUEsQUFBUSxJQVJMLEFBUUgsQUFBWTtnREFSVDtnREFTRyxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7MENBQzNCLFNBRGdDLEFBQ2hDLEFBQVMsQUFDZjsyQ0FBTyxpQkFBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVhuQyxBQVNHLEFBQW1DLEFBRS9CLEFBQW1DO0FBRkosQUFDdEMsaUNBREc7O2lDQUtOOzsrQ0FBQSxBQUFPLHVCQUFxQixNQUFBLEFBQUssTUFkOUIsQUFjSCxBQUF1Qzs7Z0RBZHBDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWlCSDs7d0NBQUEsQUFBUSxNQUFNLGlEQUErQyxZQUE3RCxBQUErRCxBQUMvRDtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBbEIxQixBQWtCSCxBQUFjLEFBQWlCOztpQ0FHbkM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLE9BQUQsQUFBUSxJQUFJLFNBckJuQixBQXFCUCxBQUFjLEFBQXFCOztpQ0FyQjVCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBMEJIO3lCQUNKOzttQ0FDSSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBRUk7QUFGSjthQUFBLGtCQUVLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBSjFEOzs4QkFBQTtnQ0FKUixBQUVJLEFBRUksQUFRSjtBQVJJO0FBQ0ksaUNBT1IsQUFBQywwQ0FBUSxPQUFUOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHlCQUFBLEFBQVM7OzhCQUFUO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxpREFBQyxjQUFELHlCQUFBLEFBQVM7OzhCQUFUO2dDQUFBLEFBQWtCO0FBQWxCO0FBQUEsb0JBQWtCLEFBQUssTUFkL0IsQUFZSSxBQUVJLEFBQTZCLEFBRWpDLGdDQUFBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWpCUixBQUNJLEFBZ0JJLEFBTVg7Ozs7O0FBR0wsQSxBQTdENkI7O2tCQTZEN0IsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi93YW1wNjQvd3d3L0tJQ0tTVEFSVCJ9