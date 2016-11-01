import {Routes} from '@angular/router';
import {AuthGuide} from '../common/auth-guide';
import {BatchCpt} from './batch.cpt';
import {BatchLayoutCpt} from './batch.layout';

export const $$ROUTES_M_BATCH: Routes = [
    {
        path: '',
        component: BatchCpt,
        canActivate: [AuthGuide]
    }
];

export const $$ROUTES_BATCH: Routes = [
    {
        path: 'batch',
        component: BatchLayoutCpt,
        canActivate: [AuthGuide],
        children: [...$$ROUTES_M_BATCH]
    }
];

