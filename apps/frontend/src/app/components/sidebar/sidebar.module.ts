import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
// --------------------------------------------------------
import { CuiBadgetComponentModule,
         CuiSidebarComponentModule } from '@cooper/ui';
// --------------------------------------------------------
import { CooperSidebarComponent }    from './sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        CuiBadgetComponentModule,
        CuiSidebarComponentModule,
    ],
    exports: [
        CooperSidebarComponent,
    ],
    declarations: [
        CooperSidebarComponent,
    ],
})
export class CooperSidebarModule { }
