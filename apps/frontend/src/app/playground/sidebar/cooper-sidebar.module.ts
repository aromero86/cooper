import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CuiBadgeModule,
         CuiDarkModeModule,
         CuiSidebarModule }          from '@cooper/ui';
// --------------------------------------------------------
import { CooperSidebarComponent }    from './cooper-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CuiBadgeModule,
        CuiSidebarModule,
        CuiDarkModeModule,
    ],
    exports: [
        CooperSidebarComponent,
    ],
    declarations: [
        CooperSidebarComponent,
    ],
})
export class CooperSidebarModule { }
