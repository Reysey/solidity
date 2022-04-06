"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _customStyles = require("../../../components/customStyle/customStyles");

var _customStyles2 = _interopRequireDefault(_customStyles);

var _layout = require("../../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _campaign2 = require("../../../ethereum/campaign");

var _campaign3 = _interopRequireDefault(_campaign2);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\wamp64\\www\\KICKSTART\\pages\\campaign\\requests\\index.js?entry";


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: "renderRows",
        value: function renderRows() {
            var _this2 = this;

            try {
                console.log(this);
                console.log(this.props);
                console.log(this.props.requests);
                return this.props.requests.map(function (request, index) {
                    return _react2.default.createElement(_RequestRow2.default, {
                        key: index,
                        id: index,
                        request: request,
                        address: _this2.props.address,
                        approversCount: _this2.props.approversCount,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        }
                    });
                });
            } catch (e) {
                console.log("%c" + e.message, _customStyles2.default.error);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            console.log("%c ON REQUEST INDEX [RENDER] ", _customStyles2.default.info);

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, "Requests"), _react2.default.createElement(_routes.Link, { route: "/campaign/" + this.props.address + "/requests/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, "Add Request"))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, "ID"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, "Description"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, "Amount"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, "Recipient"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, "Approval Count"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, "Approve"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, "Finalize"))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, this.renderRows())), _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, "Found [", this.props.requestCount, "] Requests."));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var _this3 = this;

                var address, _campaign, requestCount, approversCount, requests;

                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                address = props.query.address;
                                _campaign = (0, _campaign3.default)(address);
                                _context2.next = 5;
                                return _campaign.methods.getRequestsCount().call();

                            case 5:
                                requestCount = _context2.sent;
                                _context2.next = 8;
                                return _campaign.methods.approversCount().call();

                            case 8:
                                approversCount = _context2.sent;
                                _context2.t0 = _promise2.default;
                                _context2.next = 12;
                                return Array(parseInt(requestCount.toString())).fill().map(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(element, index) {
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return _campaign.methods.requests(index).call();

                                                    case 2:
                                                        return _context.abrupt("return", _context.sent);

                                                    case 3:
                                                    case "end":
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this3);
                                    }));

                                    return function (_x2, _x3) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());

                            case 12:
                                _context2.t1 = _context2.sent;
                                _context2.next = 15;
                                return _context2.t0.all.call(_context2.t0, _context2.t1);

                            case 15:
                                requests = _context2.sent;

                                console.log(requests);

                                return _context2.abrupt("return", { address: address, requestCount: requestCount, approversCount: approversCount, campaign: _campaign, requests: requests });

                            case 20:
                                _context2.prev = 20;
                                _context2.t2 = _context2["catch"](0);

                                console.log("%c" + _context2.t2.message, _customStyles2.default.error);

                            case 23:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 20]]);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnblxccmVxdWVzdHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ3VzdG9tU3R5bGVzIiwiTGF5b3V0IiwiQnV0dG9uIiwiVGFibGUiLCJMaW5rIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJyZXF1ZXN0cyIsIm1hcCIsInJlcXVlc3QiLCJpbmRleCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsImUiLCJtZXNzYWdlIiwiZXJyb3IiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsImluZm8iLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJBcnJheSIsInBhcnNlSW50IiwidG9TdHJpbmciLCJmaWxsIiwiZWxlbWVudCIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFROztBQUNoQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBYyxBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7O3FDQXlCVTt5QkFDUjs7Z0JBQUcsQUFDQzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2pCO3dCQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7NEJBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUMvQzsyQ0FDSSxBQUFDOzZCQUFELEFBQ1MsQUFDTDs0QkFGSixBQUVRLEFBQ0o7aUNBSEosQUFHYSxBQUNUO2lDQUFTLE9BQUEsQUFBSyxNQUpsQixBQUl3QixBQUNwQjt3Q0FBZ0IsT0FBQSxBQUFLLE1BTHpCLEFBSytCOztzQ0FML0I7d0NBREosQUFDSSxBQVFQO0FBUk87QUFDSSxxQkFESjtBQUZSLEFBQU8sQUFXVixpQkFYVTtBQUpYLGNBZUMsT0FBQSxBQUFPLEdBQUcsQUFDUDt3QkFBQSxBQUFRLElBQUksT0FBSyxFQUFqQixBQUFtQixTQUFTLHVCQUE1QixBQUF5QyxBQUM1QztBQUNKOzs7O2lDQUVPO2dCQUFBLEFBRUEsU0FGQSxBQU1BLHVCQU5BLEFBRUE7Z0JBRkEsQUFHQSxNQUhBLEFBTUEsdUJBTkEsQUFHQTtnQkFIQSxBQUlBLGFBSkEsQUFNQSx1QkFOQSxBQUlBO2dCQUpBLEFBS0EsT0FMQSxBQU1BLHVCQU5BLEFBS0EsQUFHSjs7b0JBQUEsQUFBUSxJQUFSLEFBQVksaUNBQWlDLHVCQUE3QyxBQUEwRCxBQUUxRDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNkJBQUEsQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQXpCLEFBQStCLFVBQXJDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUMsY0FBeEMsQUFBdUMsQUFBYzs4QkFBckQ7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBTVIsa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVFosQUFDSSxBQUNJLEFBT0ksQUFJUiwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkF2QlIsQUFVSSxBQWFJLEFBQ0ssQUFBSyxBQUlkLGdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFhLGdCQUFBLEFBQUssTUFBbEIsQUFBd0IsY0E3QmhDLEFBQ0ksQUE0QkksQUFJWDs7Ozs7a0gsQUF2RjRCOzs7Ozs7Ozs7aURBRVY7QSwwQ0FBbUIsTSxBQUFNLE0sQUFBekIsQUFDRDtBLDRDQUFvQix3QixBQUFBLEFBQVM7O3VDQUNILFVBQUEsQUFBUyxRQUFULEFBQWlCLG1CLEFBQWpCLEFBQW9DOztpQ0FBOUQ7QTs7dUNBQzBCLFVBQUEsQUFBUyxRQUFULEFBQWlCLGlCLEFBQWpCLEFBQWtDOztpQ0FBNUQ7QTs7OzZDQUVrQyxTQUFTLGFBQWYsQUFBTSxBQUFTLEFBQWEsYUFBNUIsQUFDRCxPQURDLEFBRUQsZ0JBRkM7eUhBRUksaUJBQUEsQUFBTyxTQUFQLEFBQWdCLE9BQWhCO3NHQUFBO3NEQUFBO2lGQUFBO3lEQUFBO3dFQUFBOytEQUNXLFVBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BRHJDLEFBQ1csQUFBaUM7O3lEQUQ1QztrR0FBQTs7eURBQUE7eURBQUE7d0VBQUE7O0FBQUE7b0RBQUE7QUFGSjs7K0RBQUE7aUVBQUE7QUFBQTtBLG1DQUFBOzs7OztvRCxBQURNOztpQ0FBbEM7QSxxREFTTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7O2tFQUVMLEVBQUMsU0FBRCxTQUFVLGNBQVYsY0FBd0IsZ0JBQXhCLGdCQUF3QyxVQUF4QyxXQUFrRCxVLEFBQWxEOzs7O2tFQUVYOzt3Q0FBQSxBQUFRLElBQUksT0FBSyxhQUFqQixBQUFtQixTQUFRLHVCQUEzQixBQUF3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBckJ6QixBQTRGM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovd2FtcDY0L3d3dy9LSUNLU1RBUlQifQ==