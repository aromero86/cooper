import { CommonModule }      from '@angular/common';
import { NgModule }          from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons      from 'angular-tabler-icons/icons';
// --------------------------------------------------------
import { CuiIconComponent }  from './cui-icon.component';

@NgModule({
    imports: [
        CommonModule,
        TablerIconsModule.pick(TablerIcons),
    ],
    exports: [
        CuiIconComponent,
    ],
    declarations: [
        CuiIconComponent
    ],
})
export class CuiIconComponentModule { }
