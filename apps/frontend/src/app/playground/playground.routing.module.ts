import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
import { CooperPlaygroundComponent } from './playground.component';

const routes: Routes = [
    { 
        path: '', component: CooperPlaygroundComponent, children: [
            { path: 'accordion', loadChildren: () => import('../modules/accordion/cooper-accordion.module').then(m => m.CooperAccordionModule) },
            { path: 'alert', loadChildren: () => import('../modules/alert/cooper-alert.module').then(m => m.CooperAlertModule) },
            { path: 'avatar', loadChildren: () => import('../modules/avatar/cooper-avatar.module').then(m => m.CooperAvatarModule) },
            { path: 'badge', loadChildren: () => import('../modules/badge/cooper-badge.module').then(m => m.CooperBadgeModule) },
            { path: 'breadcrumbs', loadChildren: () => import('../modules/breadcrumbs/cooper-breadcrumbs.module').then(m => m.CooperBreadcrumbsModule) },
            { path: 'button', loadChildren: () => import('../modules/button/cooper-button.module').then(m => m.CooperButtonModule) },
        ],
    },
    { path: '**', redirectTo: '' },
    { path: '',  redirectTo: 'playground/badge', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class PlaygroundRoutingModule { }