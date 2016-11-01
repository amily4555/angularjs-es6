"use strict";
var auth_guide_1 = require('../common/auth-guide');
var batch_cpt_1 = require('./batch.cpt');
var batch_layout_1 = require('./batch.layout');
exports.$$ROUTES_M_BATCH = [
    {
        path: '',
        component: batch_cpt_1.BatchCpt,
        canActivate: [auth_guide_1.AuthGuide]
    }
];
exports.$$ROUTES_BATCH = [
    {
        path: 'batch',
        component: batch_layout_1.BatchLayoutCpt,
        canActivate: [auth_guide_1.AuthGuide],
        children: exports.$$ROUTES_M_BATCH.slice()
    }
];
//# sourceMappingURL=batch-route.js.map