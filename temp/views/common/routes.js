"use strict";
var router_1 = require('../fe/router');
var batch_route_1 = require('../batch/batch-route');
exports.$$ROUTES = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
].concat(router_1.$$ROUTES_FE, batch_route_1.$$ROUTES_BATCH);
//# sourceMappingURL=routes.js.map