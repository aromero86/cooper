import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CooperSidebarModule }       from './components';
import { AppComponent }              from './app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        RouterModule,
        CooperSidebarModule,
    ],
})
export class AppModule { }
