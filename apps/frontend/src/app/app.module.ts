import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CuiWrapperModule }          from '@cooper/ui';
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
        CuiWrapperModule,
    ],
})
export class AppModule { }
