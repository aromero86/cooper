import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
// --------------------------------------------------------
import { CuiIconModule }           from './../icon/cui-icon.module';
// --------------------------------------------------------
import { CuiBreadcrumbsComponent } from './breadcrumbs.component';
import { CuiBreadcrumbComponent }  from './breadcrumb/breadcrumb.component';
// --------------------------------------------------------
export { CuiBreadcrumbsComponent } from './breadcrumbs.component';
export { CuiBreadcrumbComponent }  from './breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
        CuiIconModule,
    ],
    exports: [
        CuiBreadcrumbsComponent,
        CuiBreadcrumbComponent,
    ],
    declarations: [
        CuiBreadcrumbsComponent,
        CuiBreadcrumbComponent,
    ],
    providers: [ ],
})
export class CuiBreadcrumbsModule { }
