import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { RouterModule,
         Routes }                from '@angular/router';
// --------------------------------------------------------
import { CuiButtonModule,
         CuiModalModule }        from '@cooper/ui';
// --------------------------------------------------------
import { CooperModalComponent }  from './cooper-modal.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';

const routes: Routes = [
    { path: '', component: CooperModalComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        CuiButtonModule,
        CuiModalModule,
    ],
    declarations: [
        CooperModalComponent,
        ModalExampleComponent,
    ],
})
export class CooperModalModule { }
