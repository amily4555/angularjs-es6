import {Routes} from '@angular/router';
import {$$ROUTES_FE} from '../fe/router';
import {$$ROUTES_BATCH} from '../batch/batch-route';



export const $$ROUTES: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    ...$$ROUTES_FE,
    ...$$ROUTES_BATCH
];
