import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { RouterModule,
         Routes }                from '@angular/router';
// --------------------------------------------------------
import { CuiAvatarModule }       from '@cooper/ui';
// --------------------------------------------------------
import { CooperAvatarComponent } from './cooper-avatar.component';

const routes: Routes = [
    { path: '', component: CooperAvatarComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiAvatarModule,
    ],
    declarations: [
        CooperAvatarComponent,
    ],
})
export class CooperAvatarModule { }
