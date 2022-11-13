import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
// --------------------------------------------------------
import { CuiAvatarComponent } from './cui-avatar.component';
// --------------------------------------------------------
export { CuiAvatarComponent } from './cui-avatar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        CuiAvatarComponent,
    ],
    declarations: [
        CuiAvatarComponent,
    ],
})
export class CuiAvatarModule { }
