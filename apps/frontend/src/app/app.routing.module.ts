import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'playground', loadChildren: () => import('./modules/playground/playground.module').then(m => m.PlaygroundModule) },
    { path: '',  redirectTo: '/playground', pathMatch: 'full' },
    { path: '**', redirectTo: '/playground' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
