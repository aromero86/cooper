import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'badge', loadChildren: () => import('./modules/badge/badge.module').then(m => m.CooperBadgeModule) },
    { path: 'button', loadChildren: () => import('./modules/button/button.module').then(m => m.CooperButtonModule) },
    { path: '**', redirectTo: '' },
    { path: '',  redirectTo: '/badge', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
