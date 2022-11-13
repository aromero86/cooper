import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'accordion', loadChildren: () => import('./playground/items/accordion/cooper-accordion.module').then(m => m.CooperAccordionModule) },
    { path: 'alert', loadChildren: () => import('./playground/items/alert/cooper-alert.module').then(m => m.CooperAlertModule) },
    { path: 'avatar', loadChildren: () => import('./playground/items/avatar/cooper-avatar.module').then(m => m.CooperAvatarModule) },
    { path: 'badge', loadChildren: () => import('./playground/items/badge/cooper-badge.module').then(m => m.CooperBadgeModule) },
    { path: 'breadcrumbs', loadChildren: () => import('./playground/items/breadcrumbs/cooper-breadcrumbs.module').then(m => m.CooperBreadcrumbsModule) },
    { path: 'button', loadChildren: () => import('./playground/items/button/cooper-button.module').then(m => m.CooperButtonModule) },
    { path: 'playground', loadChildren: () => import('./playground/playground.module').then(m => m.PlaygroundModule) },
    // { path: '**', redirectTo: '' },
    // { path: '',  redirectTo: '/button', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
