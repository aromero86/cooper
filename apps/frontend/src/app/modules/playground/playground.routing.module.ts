import { NgModule }                  from '@angular/core';
import { Routes,
         RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CooperPlaygroundComponent } from './playground.component';

const routes: Routes = [
    { 
        path: '', component: CooperPlaygroundComponent, children: [
            { path: 'accordion', loadChildren: () => import('./items/accordion/cooper-accordion.module').then(m => m.CooperAccordionModule) },
            { path: 'alert', loadChildren: () => import('./items/alert/cooper-alert.module').then(m => m.CooperAlertModule) },
            { path: 'avatar', loadChildren: () => import('./items/avatar/cooper-avatar.module').then(m => m.CooperAvatarModule) },
            { path: 'badge', loadChildren: () => import('./items/badge/cooper-badge.module').then(m => m.CooperBadgeModule) },
            { path: 'breadcrumbs', loadChildren: () => import('./items/breadcrumbs/cooper-breadcrumbs.module').then(m => m.CooperBreadcrumbsModule) },
            { path: 'button', loadChildren: () => import('./items/button/cooper-button.module').then(m => m.CooperButtonModule) },
            { path: 'form-text', loadChildren: () => import('./items/form-text/cooper-form-text.module').then(m => m.CooperFormTextModule) },
            { path: 'modal', loadChildren: () => import('./items/modal/cooper-modal.module').then(m => m.CooperModalModule) },
            { path: '',  redirectTo: 'badge', pathMatch: 'full' },
            { path: '**', redirectTo: 'badge' },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class PlaygroundRoutingModule { }