import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
import { RouterModule,
         Routes }                      from '@angular/router';
// --------------------------------------------------------
import { CuiBreadcrumbsModule,
         CuiScrollerModule, }          from '@cooper/ui'
// --------------------------------------------------------
import { CooperBreadcrumbsComponent }  from './cooper-breadcrumbs.component';

const routes: Routes = [
    { path: '', component: CooperBreadcrumbsComponent },
    { path: '**', redirectTo: '' },
];
CooperBreadcrumbsComponent
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiBreadcrumbsModule,
        CuiScrollerModule,
    ],
    declarations: [
        CooperBreadcrumbsComponent,
    ],
})
export class CooperBreadcrumbsModule { }
