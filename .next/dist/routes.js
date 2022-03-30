'use strict';

var routes = require('next-routes')();

routes.add('/campaign/new', '/campaign/new').add('/campaign/:address', '/campaign/show').add('/campaign/:address/requests', '/campaign/requests/index').add('/campaign/:address/requests/new', '/campaign/requests/new');

console.log(routes);

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxTQUFTLEFBQWY7O0FBRUEsT0FDSyxBQURMLElBQ1MsQUFEVCxpQkFDaUQsQUFEakQsaUJBRUssQUFGTCxJQUVTLEFBRlQsc0JBRWlELEFBRmpELGtCQUdLLEFBSEwsSUFHUyxBQUhULCtCQUdpRCxBQUhqRCw0QkFJSyxBQUpMLElBSVMsQUFKVCxtQ0FJaUQsQUFKakQ7O0FBTUEsUUFBUSxBQUFSLElBQVksQUFBWjs7QUFFQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L3dhbXA2NC93d3cvS0lDS1NUQVJUIn0=