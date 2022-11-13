import { NgModule }                  from '@angular/core';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CooperSidebarModule }       from '../components';
import { CooperPlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule }   from './playground.routing.module';

@NgModule({
    imports: [
        RouterModule,
        PlaygroundRoutingModule,
        CooperSidebarModule,
    ],
    declarations: [
        CooperPlaygroundComponent,
    ],
})
export class PlaygroundModule { }
