import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
// --------------------------------------------------------
import { CuiDirectivesModule }        from '../../directives';
import { CuiIconComponentModule }     from './../icon/cui-icon.component.module';
// --------------------------------------------------------
import { CuiSidebarComponent }        from './cui-sidebar.component';
import { CuiSidebarDividerComponent } from './sidebar-divider/cui-sidebar-divider.component';
import { CuiSidebarItemComponent }    from './sidebar-item/cui-sidebar-item.component';
import { CuiSidebarSubitemComponent } from './sidebar-subitem/cui-sidebar-subitem.component';
// --------------------------------------------------------
export { CuiSidebarComponent }        from './cui-sidebar.component';
export { CuiSidebarDividerComponent } from './sidebar-divider/cui-sidebar-divider.component';
export { CuiSidebarItemComponent }    from './sidebar-item/cui-sidebar-item.component';
export { CuiSidebarSubitemComponent } from './sidebar-subitem/cui-sidebar-subitem.component';

@NgModule({
    imports: [
        CommonModule,
        CuiDirectivesModule,
        CuiIconComponentModule,
    ],
    exports: [
        CuiSidebarComponent,
        CuiSidebarDividerComponent,
        CuiSidebarItemComponent,
        CuiSidebarSubitemComponent,
    ],
    declarations: [
        CuiSidebarComponent,
        CuiSidebarDividerComponent,
        CuiSidebarItemComponent,
        CuiSidebarSubitemComponent,
    ],
})
export class CuiSidebarComponentModule { }
