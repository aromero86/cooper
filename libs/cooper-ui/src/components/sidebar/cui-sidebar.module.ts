import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
// --------------------------------------------------------
import { CuiDirectivesModule }        from '../../directives';
import { CuiIconModule }              from './../icon/cui-icon.module';
import { CuiScrollerModule }          from './../scroller/cui-scroller.module';
// --------------------------------------------------------
import { CuiSidebarComponent }        from './cui-sidebar.component';
import { CuiSidebarBrandComponent }   from './sidebar-brand/cui-sidebar-brand.component';
import { CuiSidebarDividerComponent } from './sidebar-divider/cui-sidebar-divider.component';
import { CuiSidebarItemComponent }    from './sidebar-item/cui-sidebar-item.component';
import { CuiSidebarSpacerComponent }  from './sidebar-spacer/cui-sidebar-spacer.component';
import { CuiSidebarSubitemComponent } from './sidebar-subitem/cui-sidebar-subitem.component';
// --------------------------------------------------------
export { CuiSidebarComponent }        from './cui-sidebar.component';
export { CuiSidebarBrandComponent }   from './sidebar-brand/cui-sidebar-brand.component';
export { CuiSidebarDividerComponent } from './sidebar-divider/cui-sidebar-divider.component';
export { CuiSidebarItemComponent }    from './sidebar-item/cui-sidebar-item.component';
export { CuiSidebarSpacerComponent }  from './sidebar-spacer/cui-sidebar-spacer.component';
export { CuiSidebarSubitemComponent } from './sidebar-subitem/cui-sidebar-subitem.component';

@NgModule({
    imports: [
        CommonModule,
        CuiDirectivesModule,
        CuiIconModule,
        CuiScrollerModule,
    ],
    exports: [
        CuiSidebarComponent,
        CuiSidebarBrandComponent,
        CuiSidebarDividerComponent,
        CuiSidebarItemComponent,
        CuiSidebarSpacerComponent,
        CuiSidebarSubitemComponent,
    ],
    declarations: [
        CuiSidebarComponent,
        CuiSidebarBrandComponent,
        CuiSidebarDividerComponent,
        CuiSidebarItemComponent,
        CuiSidebarSpacerComponent,
        CuiSidebarSubitemComponent,
    ],
})
export class CuiSidebarModule { }
