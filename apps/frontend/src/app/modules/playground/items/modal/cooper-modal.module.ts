import { CommonModule }          from '@angular/common';
import { NgModule }              from '@angular/core';
import { RouterModule,
         Routes }                from '@angular/router';
// --------------------------------------------------------
import { CooperModalComponent }  from './cooper-modal.component';

const routes: Routes = [
    { path: '', component: CooperModalComponent },
    { path: '**', redirectTo: '' },
];

// TODO | Playground | Crear ejemplo de modales

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        CooperModalComponent,
    ],
})
export class CooperModalModule { }
