import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { AppComponent }              from './app.component';
import { AppRoutingModule }          from './app.routing.module';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
    ],
})
export class AppModule { }
