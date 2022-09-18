import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CuiBadgeComponentModule,
         CuiDarkModeModule,
         CuiSidebarComponentModule } from '@cooper/ui';
// --------------------------------------------------------
import { CooperSidebarComponent }    from './cooper-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CuiBadgeComponentModule,
        CuiSidebarComponentModule,
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
