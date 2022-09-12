import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'alert', loadChildren: () => import('./modules/alert/cooper-alert.module').then(m => m.CooperAlertModule) },
    { path: 'badge', loadChildren: () => import('./modules/badge/cooper-badge.module').then(m => m.CooperBadgeModule) },
    { path: 'button', loadChildren: () => import('./modules/button/cooper-button.module').then(m => m.CooperButtonModule) },
    { path: '**', redirectTo: '' },
    { path: '',  redirectTo: '/badge', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
