import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CooperSidebarModule }       from './components';
import { AppComponent }              from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        CooperSidebarModule,
    ],
})
export class AppModule { }
